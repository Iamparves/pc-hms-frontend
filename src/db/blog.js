const BASE_URL = import.meta.env.VITE_BASE_URL;

export const createNewBlog = async (blogData) => {
  try {
    console.log(blogData);

    const response = await fetch(`${BASE_URL}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
      credentials: "include",
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);

    return {
      error: error.message,
    };
  }
};

export const getAllBlogs = async (queryString = "") => {
  try {
    const response = await fetch(`${BASE_URL}/blogs${queryString}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);

    return {
      error: error.message,
    };
  }
};

export const getBlogById = async (blogId) => {
  try {
    const response = await fetch(`${BASE_URL}/blogs/${blogId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);

    return {
      error: error.message,
    };
  }
};

export const deleteBlog = async (blogId) => {
  try {
    const response = await fetch(`${BASE_URL}/blogs/${blogId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);

    return {
      error: error.message,
    };
  }
};
