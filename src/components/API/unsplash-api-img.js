import axios from 'axios';

const API_KEY = 'hRFnwZ4MYV-reFyjPjBPWTyXpLdf4IU5FZ8VGMthKGI';
const BASE_URL = `https://api.unsplash.com/search/photos/`;

async function fetchImages(searchQuery, page) {

    const params = new URLSearchParams({
        query: searchQuery,
        client_id: API_KEY,
        per_page: 16,
        page: page,
    })

     try {
    const response = await axios.get(`${BASE_URL}?${params}`);
    const { results, total } = response.data;
    return { results, total };
  } catch (error) {
    console.log(error);
  }
}
export default fetchImages;



    