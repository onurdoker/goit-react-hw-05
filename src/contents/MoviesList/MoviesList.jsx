const MoviesList = (movies) => {
  
  if (movies.searchMovies) {
    movies = movies.searchMovies;
  } else if (movies.trendingMovies) {
    movies = movies.trendingMovies;
  }
  
  return (
      <div>
        <ul>
          {movies.map((movie) => (
              <li key={movie.id}>
                {movie.id}
              </li>
          ))}
        
        </ul>
      </div>
  );
};

export default MoviesList;