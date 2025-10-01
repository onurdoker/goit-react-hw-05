import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router";
import { fetchMovieDetails } from "../../utils/api.js";

const MovieDetailPage = () => {
  
  const { id } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || "/movies");
  const [movie, setMovie] = useState(null);
  const BASE_URL = "https://image.tmdb.org/t/p/w500";
  
  
  useEffect(() => {
              const getMovieDetails = async () => {
                const movieDetails = await fetchMovieDetails({ id });
                setMovie(movieDetails);
              };
              getMovieDetails();
            },
            [id]);
  
  console.log(movie);
  
  if (!movie) {
    return <h1>Loading...</h1>;
  }
  console.log(goBackRef.current);
  console.log(location.state?.from);
  
  return (
      <div>
        <Link to={goBackRef.current}>Go Back</Link>
        <div>
          <img
              src={movie.poster_path
                  ? `${BASE_URL}${movie.poster_path}`
                  : "https://dummyimage.com/270x400/CCCCCC/646CFF.jpg&text=image+not+found"
              }
              alt={movie.title}
          />
        </div>
        <div>
          <h3>{movie.original_title}
            ({(movie.release_date.slice(0,
                                        4))})
          </h3>
        </div>
        <div>
          <h3>Overview</h3>
          {movie.overview}
          <h3>Genre</h3>
          <p>{movie.genres.map((genre) => genre.name)
                   .join(", ")}</p>
        </div>
        <div>
          <h3>Additional Information</h3>
          <p>Cast</p>
          <p>Reviews</p>
        </div>
      </div>
  );
};

export default MovieDetailPage;