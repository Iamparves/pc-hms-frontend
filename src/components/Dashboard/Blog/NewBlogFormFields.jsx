import { FancyMultiSelect } from "@/components/shared/FancyMultiSelect";
import ImageUpload from "@/components/shared/ImageUpload";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { getAllTags } from "@/db/blog";
import { useQuery } from "@tanstack/react-query";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";

const NewBlogFormFields = ({
  title,
  setTitle,
  content,
  setContent,
  featuredImage,
  setFeaturedImage,
  isUploading,
  setIsUploading,
  tags,
  setTags,
  isUpdate,
  blogUrl,
}) => {
  const tagsQuery = useQuery({
    queryKey: ["tags"],
    queryFn: getAllTags,
  });

  const selectableTags = tagsQuery.data?.data?.tags || [];

  return (
    <div className="grid grid-cols-[1fr_auto] gap-x-7 gap-y-5 rounded-md bg-white p-8">
      {blogUrl && (
        <div className="col-span-2">
          <p className="rounded-sm bg-[#E2F0FE] px-5 py-3 text-center text-[15px] text-gray-800">
            You can view the blog post here:{" "}
            <Link
              target="_blank"
              className="text-blue hover:underline"
              to={blogUrl}
            >
              {title}
            </Link>
          </p>
        </div>
      )}
      <div className="space-y-5">
        <div>
          <h3 className="mb-2 text-sm font-medium">Title</h3>
          <Input
            placeholder={"Enter blog title"}
            type={"text"}
            className="px-[15px] py-[22px] text-[15px] transition-colors placeholder:text-gray-400 focus:border-blue/60"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Content</h3>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            className="[&_.ql-editor]:min-h-[300px] md:[&_.ql-editor]:min-h-[400px] xl:[&_.ql-editor]:min-h-[460px]"
          />
        </div>
      </div>
      <div className="sidebar w-[400px] space-y-5">
        <div className="">
          <h3 className="mb-2 text-sm font-medium">Featured Image</h3>
          <ImageUpload
            isUpdate={isUpdate}
            updateNote="Don't upload a new image if you don't want to change the current one"
            photo={featuredImage}
            isRequired={!isUpdate}
            onImageUpload={setFeaturedImage}
            imageId="featuredImage"
            isUploading={isUploading}
            setIsUploading={setIsUploading}
            customStyles={{
              wrapper: "w-full aspect-[3/2]",
            }}
          />
        </div>
        <div className="">
          <h3 className="mb-2 text-sm font-medium">Tags</h3>
          {!tagsQuery.isFetching ? (
            <FancyMultiSelect
              selected={tags}
              setSelected={setTags}
              initialSelectables={selectableTags.map((tag) => ({
                label: tag,
                value: tag,
              }))}
              placeholderText="Add tags (optional)"
            />
          ) : (
            <Skeleton className="flex h-12 w-full items-center justify-center text-sm text-gray-500">
              Fetching tags...
            </Skeleton>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewBlogFormFields;
