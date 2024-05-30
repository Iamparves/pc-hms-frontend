import useImageUpload from "@/hooks/useImageUpload";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { FaStarOfLife } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { TbPhotoUp } from "react-icons/tb";

const ImageUpload = ({
  initialImage = "",
  isRequired = false,
  isUpdate = false,
  onImageUpload,
  uploadButtonLabel = "Click to upload image",
  maxFileSizeMB = 4,
  customStyles = {},
  updateNote,
  imageId,
}) => {
  const { image, coverImg, isUploading, handleImageUpload, clearImage } =
    useImageUpload(imageId);

  const handleFileInputChange = async (e) => {
    const imageFile = e.target?.files[0];
    if (!imageFile) return;

    if (imageFile.size > maxFileSizeMB * 1024 * 1024) {
      return toast.error(`Image size should be less than ${maxFileSizeMB}MB`);
    }

    return await handleImageUpload(imageFile);
  };

  useEffect(() => {
    onImageUpload(coverImg);
  }, [coverImg]);

  return (
    <div
      className={cn(
        "aspect-[5/6] w-[240px] overflow-hidden rounded-lg border-2 border-dashed bg-[#F8F9FB]",
        customStyles.wrapper,
      )}
    >
      {!image && !initialImage && !coverImg && (
        <label
          className={cn(
            "group flex h-full cursor-pointer flex-col items-center justify-center p-5 text-center",
            customStyles.label,
          )}
          htmlFor="coverImg"
        >
          <span className="text-3xl text-gray-400">
            <TbPhotoUp />
          </span>
          <p className="mb-1 mt-6 text-sm text-[#4d91ff] group-hover:underline">
            {uploadButtonLabel}
            {!isUpdate && isRequired && (
              <span className="ml-1 inline-block text-[10px] text-red-400">
                <FaStarOfLife />
              </span>
            )}
          </p>
          <span className="text-xs text-gray-400">
            ( Less than {maxFileSizeMB} MB )
          </span>
          {isUpdate && (
            <p className="mt-5 text-sm text-red-400">
              {updateNote ||
                "PS: If you don't want to change the photo, don't select anything"}
            </p>
          )}
        </label>
      )}
      <input
        type="file"
        accept="image/*"
        name={imageId}
        id={imageId}
        className="hidden"
        onChange={handleFileInputChange}
      />
      {(image || initialImage || coverImg) && (
        <div
          className={cn(
            "relative h-full w-full p-2",
            customStyles.imageContainer,
          )}
        >
          <img
            src={coverImg || initialImage || image}
            alt=""
            className={cn(
              "h-full w-full rounded-md object-cover",
              customStyles.image,
            )}
          />
          <button
            className={cn(
              "absolute right-3 top-3 rounded-md bg-white/90 p-1.5 text-xl text-red-500",
              customStyles.deleteButton,
            )}
            onClick={clearImage}
            disabled={isUploading}
          >
            <MdDelete />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
