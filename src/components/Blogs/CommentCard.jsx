import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { franc } from "franc";
import { MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const CommentCard = ({ comment, currentUserId }) => {
  const { _id, content, user, createdAt } = comment;

  const langCode = franc(content || "");

  return (
    <div className="rounded-lg bg-gray-50 p-5">
      <div className="flex justify-between gap-8">
        <div className="">
          <h2 className="text-[15px] font-semibold text-gray-800">
            {user.name}
          </h2>
          <p className="text-[13px] font-medium text-gray-400">
            {format(new Date(createdAt), "dd MMM yyyy - hh:mm aa")}
          </p>
        </div>
        {user._id === currentUserId && (
          <div className="">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
      <div className="mt-3">
        <p
          className={cn(
            "text-[15px]",
            langCode === "ben" && "font-hindSiligrui text-[15px]",
          )}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
