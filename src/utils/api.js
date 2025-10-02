import axios from "axios";

const API_KEY = "d48875dc776e29685da3e7ae408b263d";

const BASE_URL = "https://api.themoviedb.org/3";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: "en-US",
};

async function fetchTrendingMovies(page) {
  try {
    const config = {
      url: `trending/movie/day`,
      params: {
        page,
      },
    };
    const { data } = await axios(config,
                                 page);
    return data;
  } catch (error) {
    console.error("Error fetching trending movies:",
                  error);
    return null;
  }
}


const fetchSearchMovies = async ({ search }) => {
  
  const url = `${BASE_URL}/search/movie?query=${search}&include_adult=false&language=en-US&page=1`;
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
export { fetchTrendingMovies, fetchSearchMovies, fetchMovieDetails };