import { getAllBlogs } from "@/db/blog";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import BlogCard from "../Blogs/BlogCard";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

const HomeBlogs = () => {
  const queryString = `?status=Published&limit=4&sort=-createdAt`;

  const blogsQuery = useQuery({
    queryKey: ["blogs", queryString],
    queryFn: () => getAllBlogs(queryString),
  });

  const blogs = blogsQuery.data?.data?.blogs || [];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="mb-10">
          <h2 className="text-center text-2xl font-semibold text-gray-800 md:text-3xl lg:text-4xl">
            Latest Blogs
          </h2>
          <div className="mt-2 flex items-center justify-center gap-1 lg:mt-2.5">
            <div className="h-1 w-2 rounded-full bg-blue"></div>
            <div className="h-1 w-2 rounded-full bg-blue"></div>
            <div className="h-1 w-8 rounded-full bg-blue"></div>
            <div className="h-1 w-2 rounded-full bg-blue"></div>
            <div className="h-1 w-2 rounded-full bg-blue"></div>
          </div>
        </div>
        {!blogsQuery.isFetching && blogs.length === 0 && (
          <div className="rounded-lg bg-white px-5 py-14 text-center">
            <p className="text-base font-medium text-gray-400">
              No blog post found
            </p>
          </div>
        )}
        {!blogsQuery.isFetching && blogs.length !== 0 && (
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
            <div className="mt-8 flex justify-center md:mt-10">
              <Button className="rounded-full bg-blue px-6 py-[26px] text-[15px] hover:bg-blue/90">
                <Link to="/blogs">View All Blogs</Link>
              </Button>
            </div>
          </>
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

export default HomeBlogs;
