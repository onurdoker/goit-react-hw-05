import { useEffect, useState } from "react";
import { fetchSearchMovies } from "../../utils/api.js";
import MoviesList from "../../contents/MoviesList/MoviesList.jsx";
import SearchBar from "../../contents/SearchBar/SearchBar.jsx";

const MoviesPage = () => {
  
  const [search, setSearch] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  
  useEffect(() => {
              const getSearchMovies = async () => {
                const searchMovies = await fetchSearchMovies({ search });
                setSearchMovies(searchMovies.results);
              };
              getSearchMovies();
            },
            [search]);
  
  console.log(searchMovies);
  console.log(search);
  
  return (
      <>
        <SearchBar setSearch={setSearch} />
        <div>
          
          {searchMovies.length > 0 &&
           <MoviesList searchMovies={searchMovies} />
          }
        </div>
      </>
  );
};

export default MoviesPage;
