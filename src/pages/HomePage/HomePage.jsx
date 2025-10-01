import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../utils/api.js";
import MoviesList from "../../contents/MoviesList/MoviesList.jsx";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage.jsx";

const HomePage = () => {
  
  const [trendingMovies, setTrendingMovies] = useState([]);
  
  useEffect(() => {
              const getTrendingMovies = async () => {
                const trendingMovies = await fetchTrendingMovies();
                setTrendingMovies(trendingMovies.results);
              };
              getTrendingMovies();
            },
            []);
  
  return (
      <div>
        <h1>Trending Movies</h1>
        
        {trendingMovies.length > 0 &&
         <MoviesList trendingMovies={trendingMovies} />
        }
      </div>
  );
};

export default HomePage;