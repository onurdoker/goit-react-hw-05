import { fetchCastInfo } from "../../utils/api.js";
import styles from "./CastPage.module.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router";

const CastPage = () => {
  
  const { id } = useParams();
  const [castInfo, setCastInfo] = useState(null);
  
  const BASE_URL = "https://image.tmdb.org/t/p/w500";
  
  useEffect(() => {
              
              const getCastInfo = async () => {
                try {
                  const response = await fetchCastInfo({ id });
                  setCastInfo(response);
                } catch (error) {
                  console.error("Error fetching cast info:",
                                error);
                }
              };
              getCastInfo();
            },
            [id]);
  
  console.log(castInfo);
  
  if (!castInfo) {
    return <h1>Loading...</h1>;
  }
  return (
      <div>
        <ul className={styles.castPage}>
          {castInfo.cast.map((cast) => (
              <li
                  className={styles.castItem}
                  key={cast.cast_id}
              >
                <img
                    className={styles.castImg}
                    src={cast.profile_path
                        ? `${BASE_URL}${cast.profile_path}`
                        : "https://dummyimage.com/270x400/CCCCCC/646CFF.jpg&text=image+not+found"
                    }
                    alt={cast.name}
                />
                <h4 className={styles.castName}>{cast.name}</h4>
                <p className={styles.castCharacter}>(as {cast.character})</p>
              </li>
          ))}
        </ul>
      </div>
  );
};

export default CastPage;