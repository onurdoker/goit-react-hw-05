const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDg4NzVkYzc3NmUyOTY4NWRhM2U3YWU0MDhiMjYzZCIsIm5iZiI6MTc1OTIyMTU5MC4xMzIsInN1YiI6IjY4ZGI5NzU2OTBlY2QwMDlhYWI5YjAzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Flm1e2lVJ0Q92R41BqUZtJ1WB2y6pSvosDONvA9yLhY";

const BASE_URL = "https://api.themoviedb.org/3";

const fetchTrendingMovies = async () => {
  const url = `${BASE_URL}/trending/movie/day`;
  const options = {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      accept: "application/json",
    },
  };
  try {
    const response = await fetch(url,
                                 options);
    return response.json();
  } catch (error) {
    console.error("Error fetching trending movies:",
                  error);
  }
};

export { fetchTrendingMovies };