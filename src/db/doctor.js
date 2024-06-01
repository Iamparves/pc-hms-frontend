const BASE_URL = import.meta.env.VITE_BASE_URL;

export const createDoctor = async (doctorData) => {
  try {
    const response = await fetch(`${BASE_URL}/doctors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doctorData),
      credentials: "include",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);

    return { error: error.message };
  }
};

export const getAllSpecialities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/doctors/specialities`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);

    return { error: error.message };
  }
};
