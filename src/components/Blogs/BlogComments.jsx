import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { commentOnBlog } from "@/db/comment";
import { useStore } from "@/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export const BlogComments = ({ blogId }) => {
  const user = useStore((state) => state.user);
  const [commentInput, setCommentInput] = useState("");

  const queryClient = useQueryClient();

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
    </div>
  );
};
