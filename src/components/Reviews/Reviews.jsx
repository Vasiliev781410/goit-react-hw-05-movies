import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import {getReviewById}  from '../../api/api.js';
import css from './Reviews.module.css';

export const Reviews = () => {
  const {movieId} = useParams();
  const [reviews,setReview] = useState([]);

  const fetchData = async () => {
    try {
        const results = await getReviewById(movieId);     
        setReview([...results]);                    
    }
    catch (error) {
    };  
}
useEffect(() => {    
     fetchData();         
    }         
// eslint-disable-next-line react-hooks/exhaustive-deps
,[movieId]);
   
return (       
    <ul className="reviews">
        {reviews.length > 0 ?
            reviews.map(review => 
            <li className="review" key={review.id}>   
              <span className={css.autor}>Autor: {review.author}.</span>
              <p className="rev">{review.content}</p>
            </li>
          ) :
          <span>We don't have any reviews for this movie</span>
        }                                                                                                 
    </ul>        
  )     
}

export default Reviews;

                                                                           
