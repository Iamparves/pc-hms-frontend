export const uploadImage = async (imageFile) => {
  try {
    const ImageData = new FormData();
    ImageData.set("image", imageFile);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
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
