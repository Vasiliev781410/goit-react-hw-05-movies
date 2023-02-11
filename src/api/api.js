import axios from 'axios';

const API_KEY = 'bc23d88e8c379b88dcc9e69c75bc8f78';
const URI = 'https://api.themoviedb.org/3';

async function fetchTrandingMovies(page) {
  const url = `${URI}/trending/movie/day?api_key=${API_KEY}&page=${page}`;

  return await getRequest(url);
}

async function searchMovies(searchText) {
  const query = encodeURIComponent(searchText);

  const url = `${URI}/search/movie?api_key=${API_KEY}&query=${query}`; 
  const response = await axios.get(url);
  //console.log(response.data.results);   
  return response.data.results;
}

async function getTrending() {
  const url = `${URI}/trending/all/day?api_key=${API_KEY}`; 
  const response = await axios.get(url); 
  //console.log(response.data.results);  
  return response.data.results;
}


async function getMovieById(movieId) {
  const url = `${URI}/movie/${movieId}?api_key=${API_KEY}`;

  return await getRequest(url);
}
    




async function getMovieVideo(movieId) {
  const url = `${URI}/movie/${movieId}/videos?api_key=${API_KEY}`;

  return await getRequest(url);
}

async function getRequest(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export { fetchTrandingMovies, searchMovies, getMovieById, getTrending, getMovieVideo };

