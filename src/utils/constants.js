export const API_URL = "https://dummyjson.com/";
export const discountPercent = (price, discount) => {
  const a = price + (price * discount) / 100;
  return Math.round(a);
};

export const callApi = async (path_name) => {
  try {
    const fetchData = await fetch(API_URL + path_name);
    const data = await fetchData.json();
    return data.products;
  } catch (error) {
    console.log(error);
  }
};
