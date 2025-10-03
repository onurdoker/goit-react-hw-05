import { fetchReviews } from "../../utils/api.js";
import styles from "./ReviewsPage.module.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ReviewsPage = () => {
  
  const [reviews, setReviews] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
              const getReviews = async () => {
                try {
                  const response = await fetchReviews({ id });
                  setReviews(response);
                } catch (error) {
                  console.error("Error fetching reviews:",
                                error);
                }
              };
              getReviews();
            },
            [id]);
  
  if (!reviews) {
    return <h1>Loading...</h1>;
  }
  
  console.log(reviews);
  
  return (
      <div>
        <ul className={styles.reviewsPage}>
          {reviews.results.map((review) => (
              <li
                  className={styles.reviewItem}
                  key={review.id}
              >
                <h4 className={styles.reviewAuthor}>{review.author}</h4>
                <p>{review.content}</p>
              </li>
          ))}
        </ul>
      </div>
  
  );
};

export default ReviewsPage;