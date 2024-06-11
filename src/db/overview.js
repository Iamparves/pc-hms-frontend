import fetchWithAuth from "@/lib/fetchWithAuth";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getOverview = async (role) => {
  try {
    const response = await fetchWithAuth(`${BASE_URL}/overview/${role}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);

    return { error: error.message };
  }
};
