const MoviesList = (trendingMovies) => {
  
  return (
      <div>
        <ul>
          {trendingMovies.map((movie) => {
            <li key={movie.id}>
              {movie.original_title}
            </li>;
          })}
          <li>Movies</li>
        
        </ul>
      </div>
  );
};

export default MoviesList;