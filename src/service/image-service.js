import axios from "axios";

const API_KEY = '27623768-405768f09194e046df4a054c4';
// axios.defaults.baseURL = "https://pixabay.com/api/";
// axios.defaults.headers.common['Authorization'] = API_KEY;
// axios.defaults.params = {
//   imageType: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// };

export const getImages = async (query, page) => {
  const { data } =   await axios.get(`https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)

    // await axios.get(`search?query=${query}&page=${page}`);
   return data;
};

// `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`