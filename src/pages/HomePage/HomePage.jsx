import { useEffect, useState } from "react";
import MoviesList from "../../contents/MoviesList/MoviesList.jsx";
import { fetchTrendingMovies } from "../../utils/api.js";

import style from "./HomePage.module.css";

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
  
  console.log(trendingMovies);
  
  return (
      <div className={style.container}>
        <h1>Trending Movies</h1>
        
        {trendingMovies.length > 0 &&
         <MoviesList trendingMovies={trendingMovies} />
        }
      
      </div>
  );
};

export default HomePage;