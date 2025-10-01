import { Link, useLocation } from "react-router";
import styles from "./MoviesList.module.css";

const MoviesList = (movies) => {
  
  const BASE_URL = "https://image.tmdb.org/t/p/w500";
  const location = useLocation();
  
  if (movies.trendingMovies) {
    movies = movies.trendingMovies;
  } else if (movies.searchMovies) {
    movies = movies.searchMovies;
  }
  
  if (!movies) {
    return <h1>Loading...</h1>;
  }
  
  return (
      <div>
        <ul className={styles.container}>
          {movies.map((movie) => (
              <li
                  className={styles.card}
                  key={movie.id}
              >
                <Link
                    to={`/movie/${movie.id}`}
                    state={{ from: location }}
                >
                  <img
                      className={styles.image}
                      src={movie.poster_path
                          ? `${BASE_URL}${movie.poster_path}`
                          : "https://dummyimage.com/270x400/CCCCCC/646CFF.jpg&text=image+not+found"
                      }
                      alt={movie.title}
                  />
                  <div className={styles.title}>
                    <p>{movie.title}</p>
                  </div>
                </Link>
              </li>
          ))}
        
        </ul>
      </div>
  );
};

export default MoviesList;