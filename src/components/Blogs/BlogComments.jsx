import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { commentOnBlog, getCommentsByBlog } from "@/db/comment";
import { useStore } from "@/store";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Skeleton } from "../ui/skeleton";
import CommentCard from "./CommentCard";

export const BlogComments = ({ blogId }) => {
  const user = useStore((state) => state.user);
  const [commentInput, setCommentInput] = useState("");

  const queryClient = useQueryClient();

  const commentsQuery = useQuery({
    queryKey: ["comments", { blogId }],
    queryFn: () => getCommentsByBlog(blogId),
    enabled: !!blogId,
    placeholderData: keepPreviousData,
  });

  const comments = commentsQuery.data?.data?.comments || [];

  const commentMutation = useMutation({
    mutationFn: commentOnBlog,
    onSuccess: (result) => {
      if (result.status === "success") {
        queryClient.invalidateQueries(["comments", { blogId }]);
        setCommentInput("");
        toast.success("Comment added successfully");
      } else {
        toast.error(result.message || "Failed to add comment");
      }
    },
    onError: (error) => {
      console.log(error);

      toast.error("Failed to add comment");
    },
  });

  const handleComment = () => {
    const commentData = {
      blog: blogId,
      content: commentInput,
    };

    commentMutation.mutate(commentData);
  };

  return (
    <div className="mt-3 rounded-lg bg-white p-4 sm:p-6 lg:px-10 lg:py-8">
      <h4 className="mb-5 text-xl font-semibold">Comments</h4>
      {user?._id ? (
        <div className="flex flex-col items-end gap-4">
          <Textarea
            placeholder={"Write something..."}
            className="w-full px-[15px] py-[10px] text-[15px] transition-colors placeholder:text-gray-400 focus:border-blue/60"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            disabled={commentMutation.isPending}
          />
          <Button
            disabled={!commentInput || commentMutation.isPending}
            size="lg"
            className="bg-blue hover:bg-blue/90"
            onClick={handleComment}
          >
            {commentMutation.isPending ? "Adding comment..." : "Comment"}
          </Button>
        </div>
      ) : (
        <div className="text-center">
          <p className="rounded-md border p-5">
            You have to{" "}
            <Link className="text-blue hover:underline" to="/login">
              Login
            </Link>{" "}
            first to comment
          </p>
        </div>
      )}
      <div className="mt-7 md:mt-10">
        {!commentsQuery.isFetching && comments?.length === 0 && (
          <p className="text-center text-sm text-gray-500">No comments found</p>
        )}
        {(!commentsQuery.isFetching || comments?.length > 0) && (
          <div className="flex flex-col gap-y-5">
            {comments.map((comment) => (
              <CommentCard
                key={comment._id}
                currentUserId={user}
                comment={comment}
              />
            ))}
          </div>
        )}
        {commentsQuery.isFetching && !comments?.length && (
          <div className="mt-5 space-y-5">
            {[...Array(2)].map((_, ind) => (
              <div
                key={ind}
                className="rounded-md border border-gray-100/70 p-5"
              >
                <Skeleton className="mb-2 h-4 w-52" />
                <Skeleton className="mb-5 h-3 w-44" />
                <Skeleton className="h-12 w-full" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
