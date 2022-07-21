import axios from "axios";

const API_KEY = '27623768-405768f09194e046df4a054c4';
axios.defaults.baseURL = "https://pixabay.com/api/";
axios.defaults.params = {
  imageType: 'photo',
  orientation: 'horizontal',
  per_page: 12,
  key: API_KEY,
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(`?q=${query}&page=${page}`); 
   return data;
};
