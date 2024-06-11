const fetchWithAuth = async (url, options = {}) => {
  const jwtToken = localStorage.getItem("jwtToken");

  if (jwtToken) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${jwtToken}`,
    };
  }

  return fetch(url, options);
};

export default fetchWithAuth;
