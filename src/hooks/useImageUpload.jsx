import { useState } from "react";
import { toast } from "sonner";

const uploadImage = async (imageFile) => {
  try {
    const ImageData = new FormData();
    ImageData.set("image", imageFile);

    const res = await fetch(
      "https://api.imgbb.com/1/upload?key=96414755e81ac2a7e751fe0575e30c1b",
      {
        method: "POST",
        body: ImageData,
      },
    );

    const result = await res.json();

    return result;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

const useImageUpload = () => {
  const [image, setImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [coverImg, setCoverImg] = useState("");

  const handleImageUpload = async (imageFile) => {
    setImage(URL.createObjectURL(imageFile));

    const toastId = toast.loading("Image is uploading...");
    setIsUploading(true);

    const result = await uploadImage(imageFile);
    setIsUploading(false);

    if (result?.success) {
      setCoverImg(result.data.display_url);
      toast.success("Image upload successful!", { id: toastId });
    } else {
      setImage(null);
      toast.error("Image upload failed! Please try again", { id: toastId });
    }
  };

  const clearImage = () => {
    setImage(null);
    setCoverImg("");
    document.getElementById("coverImg").value = null;
  };

  return {
    image,
    isUploading,
    coverImg,
    handleImageUpload,
    clearImage,
  };
};

export default useImageUpload;
