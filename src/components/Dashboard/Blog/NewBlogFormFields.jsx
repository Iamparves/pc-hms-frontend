import { FancyMultiSelect } from "@/components/shared/FancyMultiSelect";
import ImageUpload from "@/components/shared/ImageUpload";
import { Input } from "@/components/ui/input";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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
}) => {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-7 rounded-md bg-white p-8">
      <div className="space-y-5">
        <Input
          placeholder={"Enter blog title"}
          type={"text"}
          className="px-[15px] py-[22px] text-[15px] transition-colors placeholder:text-gray-400 focus:border-blue/60"
          disabled={isUploading}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
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
            photo={featuredImage}
            isRequired={true}
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
          <FancyMultiSelect
            selected={tags}
            setSelected={setTags}
            initialSelectables={[]}
            placeholderText="Add tags (optional)"
          />
        </div>
      </div>
    </div>
  );
};

export default NewBlogFormFields;
