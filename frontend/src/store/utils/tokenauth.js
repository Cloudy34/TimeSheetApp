export const getHeaders = () => {
  const token = localStorage.getItem("token");
  console.log("token");

  return {
    Authorization: `Token ${token}`,
    "Content-Type": "application/json",
  };
};
