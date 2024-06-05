import { BlogComments } from "@/components/Blogs/BlogComments";
import BlogReactions from "@/components/Blogs/BlogReactions";
import { getBlogById } from "@/db/blog";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { blogId } = useParams();

  const blogQuery = useQuery({
    queryKey: ["blogs", { blogId }],
    queryFn: () => getBlogById(blogId),
  });

  const blog = blogQuery.data?.data?.blog || {};

  return (
    <section className="py-10 md:py-14">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          {!blogQuery.isFetching && (
            <div className="rounded-lg bg-white p-4 sm:p-6 md:p-10">
              <h1 className="mb-5 text-center text-[22px] font-semibold leading-snug sm:text-2xl md:text-3xl">
                {blog.title}
              </h1>
              <img
                src={blog.featuredImage}
                alt={blog.title}
                className="aspect-video w-full rounded-lg object-cover"
              />
              <div className="mt-4">
                <p className="mb-3 text-center font-medium text-gray-700">
                  {format(new Date(blog?.publishedDate), "dd MMMM yyyy")}, by{" "}
                  <span className="text-blue">
                    {blog.author?.name || "Admin"}
                  </span>
                </p>
                <p className="text mx-auto flex max-w-2xl flex-wrap justify-center gap-2 text-center text-sm">
                  {blog.tags?.map((t) => (
                    <span
                      className="rounded-full bg-blue px-2 py-0.5 text-white"
                      key={t}
                    >
                      {t}
                    </span>
                  ))}
                </p>
              </div>
              <div className="blog-content mt-10">
                <div
                  dangerouslySetInnerHTML={{
                    __html: blog.content,
                  }}
                ></div>
              </div>
            </div>
          )}
          <BlogReactions reactions={blog?.reactions} blogId={blogId} />
          <BlogComments />
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
