import fetchWithAuth from "@/lib/fetchWithAuth";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const createNotice = async (noticeData) => {
  try {
    const response = await fetchWithAuth(`${BASE_URL}/notices`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noticeData),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);

    return {
      error: error.message,
    };
  }
};

export const getAllNotice = async (queryString = "") => {
  try {
    const response = await fetchWithAuth(`${BASE_URL}/notices${queryString}`, {
      method: "GET",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);

    return {
      error: error.message,
    };
  }
};

export const updateNotice = async (noticeId, noticeData) => {
  try {
    const response = await fetchWithAuth(`${BASE_URL}/notices/${noticeId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noticeData),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);

    return {
      error: error.message,
    };
  }
};

export const deleteNotice = async (noticeId) => {
  try {
    const response = await fetchWithAuth(`${BASE_URL}/notices/${noticeId}`, {
      method: "DELETE",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);

    return {
      error: error.message,
    };
  }
};
