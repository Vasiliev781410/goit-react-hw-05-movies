import axios from 'axios';

const API_KEY = 'bc23d88e8c379b88dcc9e69c75bc8f78';
const URI = 'https://api.themoviedb.org/3';

async function searchMovies(searchText) {
  const query = encodeURIComponent(searchText);

  const url = `${URI}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`; 
  const response = await axios.get(url);
  
  return response.data.results;
}

async function getTrending() {
  const url = `${URI}/trending/movie/day?api_key=${API_KEY}`; 
  const response = await axios.get(url); 
  
  return response.data.results;
}


async function getMovieById(movieId) {
  const url = `${URI}/movie/${movieId}?api_key=${API_KEY}`; 
  const response = await axios.get(url); 
   
  return response.data;
}

async function getCastById(movieId) {
  const url = `${URI}/movie/${movieId}/credits?api_key=${API_KEY}`; 
  const response = await axios.get(url); 
 
  return response.data;
}

async function getReviewById(movieId) {
  const url = `${URI}/movie/${movieId}/reviews?api_key=${API_KEY}`; 
  const response = await axios.get(url); 
 
  return response.data.results;
}
  

export { searchMovies, getMovieById, getTrending, getCastById, getReviewById};

