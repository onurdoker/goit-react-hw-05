import styles from "./MoviesList.module.css";

const MoviesList = (movies) => {
  
  const BASE_URL = "https://image.tmdb.org/t/p/w500";
  
  if (movies.trendingMovies) {
    movies = movies.trendingMovies;
  } else if (movies.searchMovies) {
    movies = movies.searchMovies;
  }
  
  return (
      <div>
        <ul className={styles.container}>
          {movies.map((movie) => (
              <li
                  className={styles.card}
                  key={movie.id}
              >
                <img
                    className={styles.image}
                    src={`${BASE_URL}${movie.poster_path}`}
                    alt={movie.title}
                />
                <div className={styles.title}>
                  <p>{movie.title}</p>
                </div>
              </li>
          ))}
        
        </ul>
      </div>
  );
};

export default MoviesList;