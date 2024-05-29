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

export const signup = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return { error: error.message };
  }
};

export const login = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
      credentials: "include",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return { error: error.message };
  }
};

export const verifyAccount = async (otpData) => {
  try {
    const response = await fetch(`${BASE_URL}/users/verify-otp`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(otpData),
      // credentials: "include",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return { error: error.message };
  }
};