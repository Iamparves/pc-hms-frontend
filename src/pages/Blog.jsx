import BlogCard from "@/components/Blogs/BlogCard";
import { getAllBlogs } from "@/db/blog";
import { useQuery } from "@tanstack/react-query";

const Blog = () => {
  const blogsQuery = useQuery({
    queryKey: ["blogs"],
    queryFn: () => getAllBlogs(),
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
        {blogsQuery.isFetching && <p>Loading...</p>}
        {!blogsQuery.isFetching && blogs.length !== 0 && (
          <div className="grid grid-cols-4 gap-5">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
