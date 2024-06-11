const BASE_URL = import.meta.env.VITE_BASE_URL;

export const sendMessage = async (data) => {
  const url = `${BASE_URL}/contact`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  return result;
};
