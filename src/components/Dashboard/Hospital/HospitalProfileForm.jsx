import ImageUpload from "@/components/shared/ImageUpload";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useStore } from "@/store";
import { useEffect, useState } from "react";

const HospitalProfileForm = () => {
  const [photo, setPhoto] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const user = useStore((state) => state.user);

  const handlePhotoUpload = (imageUrl) => setPhoto(imageUrl);

  useEffect(() => {
    setPhoto(user.profile?.photo);
  }, [user.profile]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you're done.
        </CardDescription>
      </CardHeader>
      {user.profile ? (
        <CardContent className="">
          <ImageUpload
            photo={photo}
            isUpdate={true}
            onImageUpload={handlePhotoUpload}
            isUploading={isUploading}
            setIsUploading={setIsUploading}
            uploadButtonLabel="Upload profile photo"
            imageId="profilePhoto"
            updateNote=""
            customStyles={{
              wrapper: "w-48 h-52 mx-auto",
            }}
          />
        </CardContent>
      ) : (
        <h3>Loading...</h3>
      )}
      <CardFooter>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  );
};

export default HospitalProfileForm;
