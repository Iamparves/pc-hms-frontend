import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { createNewBlog } from "@/db/blog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import NewBlogFormFields from "./NewBlogFormFields";

const NewBlogForm = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [tags, setTags] = useState([]);

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const postMutation = useMutation({
    mutationFn: (blogData) => {
      return createNewBlog(blogData);
    },
    onSuccess: (result) => {
      if (result.status === "fail") {
        toast.error(result.message);
      } else {
        toast.success(result.message);

        queryClient.invalidateQueries(["blogs"]);
        navigate(`/blogs/${result.data?.blog?._id}`);
      }
    },
  });

  const handlePostBlog = (e, status) => {
    e.preventDefault();

    if (!title || !content || !featuredImage) {
      return toast.error("Please fill in all of the required fields");
    }

    const blogData = {
      title,
      content,
      featuredImage,
      tags: tags.map((tag) => tag.value),
      status,
      publishedDate: new Date(),
    };

    postMutation.mutate(blogData);
  };

  return (
    <div>
      <Form>
        <form
          className="aria-disabled:pointer-events-none aria-disabled:opacity-60"
          aria-disabled={postMutation.isPending}
        >
          <div className="mb-5 flex justify-between gap-10">
            <Button
              className="py-5"
              onClick={() => navigate("../blogs")}
              variant="outline"
            >
              <ChevronLeft /> Go Back
            </Button>
            <div className="flex items-center gap-2">
              <Button
                onClick={(e) => handlePostBlog(e, "Draft")}
                className="py-5"
                variant="outline"
                type="button"
              >
                Save Draft
              </Button>
              <Button
                onClick={(e) => handlePostBlog(e, "Published")}
                className="bg-blue py-5 hover:bg-blue/90"
              >
                Publish
              </Button>
            </div>
          </div>
          <NewBlogFormFields
            tags={tags}
            setTags={setTags}
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            featuredImage={featuredImage}
            setFeaturedImage={setFeaturedImage}
            isUploading={isUploading}
            setIsUploading={setIsUploading}
          />
        </form>
      </Form>
    </div>
  );
};

export default NewBlogForm;
