import fetchWithAuth from "@/lib/fetchWithAuth";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const createAdmin = async (adminData) => {
  try {
    const response = await fetchWithAuth(`${BASE_URL}/users/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminData),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return { error: error.message };
  }
};

export const getAdmins = async () => {
  try {
    const response = await fetchWithAuth(`${BASE_URL}/users/admin`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return { error: error.message };
  }
};

export const updateAdmin = async (adminId, adminData) => {
  try {
    const response = await fetchWithAuth(`${BASE_URL}/users/admin/${adminId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminData),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return { error: error.message };
  }
};

export const deleteAdmin = async (adminId) => {
  try {
    const response = await fetchWithAuth(`${BASE_URL}/users/admin/${adminId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return { error: error.message };
  }
};
