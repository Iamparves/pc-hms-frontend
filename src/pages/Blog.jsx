import BlogCard from "@/components/Blogs/BlogCard";
import { Skeleton } from "@/components/ui/skeleton";
import { getAllBlogs } from "@/db/blog";
import { useQuery } from "@tanstack/react-query";

const Blog = () => {
  const blogsQuery = useQuery({
    queryKey: ["blogs", { status: "Published" }],
    queryFn: () => getAllBlogs("?status=Published"),
  });

  const blogs = blogsQuery.data?.data?.blogs || [];

  return (
    <section>
      <div className="bg-[url(/doctor.jpg)] bg-cover bg-center">
        <div className="bg-black/60 py-20">
          <h1 className="text-center text-4xl font-bold text-white md:text-5xl">
            Blog Posts
          </h1>
        </div>
      </div>
      <div className="container py-10 md:py-14">
        {!blogsQuery.isFetching && blogs.length === 0 && <p>No blogs found</p>}
        {!blogsQuery.isFetching && blogs.length !== 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
        {blogsQuery.isFetching && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(4)].map((_, ind) => (
              <div key={ind} className="rounded-md bg-white p-5">
                <Skeleton className="mb-5 aspect-video w-full" />
                <Skeleton className="mb-3 h-6" />
                <Skeleton className="mb-12 h-4 w-3/5" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
