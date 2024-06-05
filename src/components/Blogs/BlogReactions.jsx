import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import BlogShareButton from "./BlogShareButton";

const buttonStyles =
  "flex w-full items-center justify-center gap-3 rounded-md bg-gray-50 py-4 transition-colors hover:bg-gray-100";

const BlogReactions = ({ reactions, blogId }) => {
  return (
    <div className="mt-3 rounded-lg bg-white p-4 sm:p-6 lg:px-10 lg:py-6">
      <div className="flex items-center justify-between gap-5">
        <button className={buttonStyles}>
          <AiOutlineLike className="text-[22px]" />
          <span className="">{reactions?.like || 0} Likes</span>
        </button>
        <button className={buttonStyles}>
          <AiOutlineDislike className="text-[22px]" />
          <span className="">{reactions?.dislike || 0} Dislikes</span>
        </button>
        <BlogShareButton blogId={blogId} buttonStyles={buttonStyles} />
      </div>
    </div>
  );
};

export default BlogReactions;
