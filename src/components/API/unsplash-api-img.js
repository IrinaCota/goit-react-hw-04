import axios from 'axios';

const API_KEY = 'hRFnwZ4MYV-reFyjPjBPWTyXpLdf4IU5FZ8VGMthKGI'
axios.defaults.baseURL = 'https://api.unsplash.com/';

const fetchImages = async (searchQuery, page) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: API_KEY,
      query: searchQuery,
      page,
      per_page: 16,
    },
  });
  return response.data;
}

export default fetchImages;


    