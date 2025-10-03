import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Pagination from "@mui/material/Pagination";

import { fetchTrendingMovies } from "../../utils/api.js";
import MoviesList from "../../contents/MoviesList/MoviesList.jsx";

import styles from "./HomePage.module.css";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [totalPage, setTotalPage] = useState(0);
  
  const page = new URLSearchParams(location.search).get("page") ?? 1;
  
  
  const [trendingMovies, setTrendingMovies] = useState([]);
  
  useEffect(() => {
              const getTrendingMovies = async () => {
                try {
                  const trendingMovies = await fetchTrendingMovies({ page });
                  setTrendingMovies(trendingMovies.results);
                  setTotalPage(trendingMovies.total_pages);
                } catch (error) {
                  console.error("Error fetching trending movies:",
                                error);
                }
              };
              getTrendingMovies();
            },
            [page]);
  
  const onHandlePage = (event,
                        page) => {
    navigate({
               pathname: location.pathname,
               search: `page=${page}`,
             });
  };
  
  return (
      <div>
        <h1 className={styles.title}>Trending Movies</h1>
        
        {trendingMovies.length > 0 &&
         <MoviesList trendingMovies={trendingMovies} />
        }
        {totalPage > 1 && (
            <Pagination
                className={styles.pagination}
                count={totalPage}
                onChange={onHandlePage}
                page={Number(page)}
                color="primary"
                showFirstButton
                showLastButton
                size="large"
            />
        )}
      </div>
  );
};

export default HomePage;