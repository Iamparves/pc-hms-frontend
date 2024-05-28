const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getLoggedInUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return { error: error.message };
  }
};
