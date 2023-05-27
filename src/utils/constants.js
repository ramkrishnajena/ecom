export const API_URL = "https://dummyjson.com/";

export const callApi = async (path_name) => {
  try {
    const fetchData = await fetch(API_URL + path_name);
    const data = await fetchData.json();
    return data.products;
  } catch (error) {
    console.log(error);
  }
};
