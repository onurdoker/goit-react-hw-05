import axios from "axios";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDg4NzVkYzc3NmUyOTY4NWRhM2U3YWU0MDhiMjYzZCIsIm5iZiI6MTc1OTIyMTU5MC4xMzIsInN1YiI6IjY4ZGI5NzU2OTBlY2QwMDlhYWI5YjAzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Flm1e2lVJ0Q92R41BqUZtJ1WB2y6pSvosDONvA9yLhY";

const BASE_URL = "https://api.themoviedb.org/3";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: "en-US",
};

const fetchTrendingMovies = async ({ page }) => {
  if (!page) {
    page = 1;
  }
  const url = `${BASE_URL}/trending/movie/day?language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  try {
    const response = await fetch(url,
                                 options);
    return response.json();
    
  } catch (error) {
    console.error("Error fetching trending movies:",
                  error);
    return null;
  }
};


const fetchSearchMovies = async ({
                                   query,
                                   page,
                                 }) => {
  
  const url = `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  try {
    const response = await fetch(url,
                                 options);
    return response.json();
  } catch (error) {
    console.error("Error fetching search movies:",
                  error);
  }
};

const fetchMovieDetails = async ({ id }) => {
  const url = `${BASE_URL}/movie/${id}`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  try {
    const response = await fetch(url,
                                 options);
    return response.json();
  } catch (error) {
    console.error("Error fetching movie details:",
                  error);
  }
};


const fetchCastInfo = async ({ id }) => {
  const url = `${BASE_URL}/movie/${id}/credits`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  try {
    const response = await fetch(url,
                                 options);
    return response.json();
  } catch (error) {
    console.error("Error fetching cast info:",
                  error);
  }
};
export { fetchTrendingMovies, fetchSearchMovies, fetchMovieDetails, fetchCastInfo };