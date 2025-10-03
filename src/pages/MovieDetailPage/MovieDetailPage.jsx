import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router";
import { fetchMovieDetails } from "../../utils/api.js";


import styles from "./MovieDetailPage.module.css";

const MovieDetailPage = () => {
  
  const { id } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || "/");
  const [movie, setMovie] = useState(null);
  
  const BASE_URL = "https://image.tmdb.org/t/p/w500";
  
  
  useEffect(() => {
              const getMovieDetails = async () => {
                try {
                  const movieDetails = await fetchMovieDetails({ id });
                  setMovie(movieDetails);
                } catch (error) {
                  console.error("Error fetching movie details:",
                                error);
                }
              };
              getMovieDetails();
            },
            [id]);
  
  
  if (!movie) {
    return <h1>Loading...</h1>;
  }
  
  return (
      <div className={styles.container}>
        <Link to={goBackRef.current}>
          <button
              className={styles.btn}
          >
            Go Back
          </button>
        </Link>
        
        <div className={styles.detail}>
          <img
              className={styles.img}
              src={movie.poster_path
                  ? `${BASE_URL}${movie.poster_path}`
                  : "https://dummyimage.com/300x450/CCCCCC/646CFF.jpg&text=image+not+found"
              }
              alt={movie.title}
          />
          <div className={styles.text}>
            <h3>{movie.original_title} ({(movie.release_date.slice(0,
                                                                   4))})
            </h3>
            
            <h3>Overview</h3>
            {movie.overview}
            <h3>Genre</h3>
            <p>{movie.genres.map((genre) => genre.name)
                     .join(", ")}</p>
          </div>
        </div>
        <div>
          <h3>Additional Information</h3>
          
          <NavLink
              to={"cast"}
              className={styles.link}
          >
            Cast
          </NavLink>
          <NavLink
              to={"reviews"}
              className={styles.link}
          >
            Reviews
          </NavLink>
        </div>
        <Outlet />
      
      
      </div>
  );
};

export default MovieDetailPage;