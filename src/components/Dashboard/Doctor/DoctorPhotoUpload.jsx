import ImageUpload from "@/components/shared/ImageUpload";
import { useState } from "react";

const DoctorPhotoUpload = ({ isUpdate = false, oldPhoto = "" }) => {
  const [photo, setPhoto] = useState(oldPhoto);
  const [isUploading, setIsUploading] = useState(false);
  const handlePhotoUpload = (imageUrl) => setPhoto(imageUrl);

  return (
    <div>
      <ImageUpload
        photo={photo}
        isUpdate={isUpdate}
        onImageUpload={handlePhotoUpload}
        isUploading={isUploading}
        setIsUploading={setIsUploading}
        uploadButtonLabel="Upload doctor photo"
        imageId="doctorPhoto"
        // updateNote=""
        customStyles={{
          wrapper: "h-[260px]",
        }}
      />
    </div>
  );
};

export default DoctorPhotoUpload;
