import Loader from "@/components/shared/Loader";
import { getBlogById } from "@/db/blog";
import { useStore } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import DashboardHeader from "../shared/DashboardHeader";
import NewBlogForm from "./NewBlogForm";

const UpdateBlog = () => {
  const user = useStore((state) => state.user);
  const { blogId } = useParams();
  const navigate = useNavigate();

  const blogQuery = useQuery({
    queryKey: ["blogs", blogId],
    queryFn: () => getBlogById(blogId),
  });

  const blog = blogQuery.data?.data?.blog || {};

  if (!blogQuery.isFetching && !blog._id) {
    toast.error("Blog not found");

    return navigate(`/dashboard/${user.role}/blogs`);
  }

  return (
    <>
      <DashboardHeader title="Update Blog" desc="Update an existing blog" />
      <div className="mx-auto h-[calc(100dvh-80px)] w-full overflow-y-auto">
        <div className="h-full p-3 sm:p-5 xl:p-10">
          {!blogQuery.isFetching && blog?._id ? (
            <NewBlogForm blog={blog} />
          ) : (
            <div className="flex h-full items-center justify-center gap-3">
              <div className="rounded-md bg-white px-20 py-10">
                <Loader className="size-20" />
                <p className="text-gray-500">Please Wait</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UpdateBlog;
