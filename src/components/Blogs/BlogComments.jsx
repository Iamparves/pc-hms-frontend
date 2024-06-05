import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useStore } from "@/store";
import { useState } from "react";
import { Link } from "react-router-dom";

export const BlogComments = () => {
  const user = useStore((state) => state.user);
  const [commentInput, setCommentInput] = useState("");

  const handleComment = () => {
    console.log(commentInput);
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
          />
          <Button
            disabled={!commentInput}
            size="lg"
            className="bg-blue hover:bg-blue/90"
            onClick={handleComment}
          >
            Submit
          </Button>
        </div>
      ) : (
        <div className="text-center">
          <p className="">
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
