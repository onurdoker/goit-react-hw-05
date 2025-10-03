import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Pagination from "@mui/material/Pagination";

import { fetchSearchMovies } from "../../utils/api.js";

import MoviesList from "../../contents/MoviesList/MoviesList.jsx";
import SearchBar from "../../contents/SearchBar/SearchBar.jsx";

import styles from "../HomePage/HomePage.module.css";

const MoviesPage = () => {
  
  const location = useLocation();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [totalPage, setTotalPage] = useState(0);
  
  const searchParams = new URLSearchParams(location.search);
  const page = Number(searchParams.get("page") ?? 1);
  console.log(searchParams.get("query"));
  
  
  const [searchMovies, setSearchMovies] = useState([]);
  
  
  useEffect(() => {
              
              if (location.search === "") {
                return;
              }
              
              const newSearch = new URLSearchParams(location.search).get("query");
              setQuery(newSearch,
                       page);
            },
            [location.search,
             page]);
  
  useEffect(() => {
              if (!query) {
                return;
              }
              const getSearchMovies = async () => {
                try {
                  const searchMovies = await fetchSearchMovies({
                                                                 query,
                                                                 page,
                                                               });
                  setSearchMovies(searchMovies.results);
                  setTotalPage(searchMovies.total_pages);
                } catch (error) {
                  console.error("Error fetching search movies:",
                                error);
                }
              };
              getSearchMovies();
            },
            [query,
             page]);
  
  const onHandleSearch = newSearch => {
    if (query === newSearch) {
      return;
    }
    setQuery(newSearch);
    setSearchMovies(null);
    navigate({
               pathname: location.pathname,
               search: `query=${newSearch}&page=1`,
             });
  };
  
  const onHandlePage = (search,
                        page) => {
    navigate({
               pathname: location.pathname,
               search: `query=${query}&page=${page}`,
             });
  };
  
  return (
      <div>
        <SearchBar
            onHandleSearch={onHandleSearch}
            setQuery={setQuery}
        />
        <div>
          
          {searchMovies.length > 0 &&
           <MoviesList searchMovies={searchMovies} />
          }
        </div>
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

export default MoviesPage;
