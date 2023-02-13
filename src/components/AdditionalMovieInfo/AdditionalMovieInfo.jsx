import { Link } from "react-router-dom";
import css from './AdditionalMovieInfo.module.css';

export const AdditionalMovieInfo = ({listTitle, movieId}) => {  
    const pathnameCast = `/movies/${movieId.toString()}/cast`;
    const pathnameReviews = `/movies/${movieId.toString()}/reviews`;
     return (
        <ul className={css.addInfo}>{listTitle}
            <li>
                <Link to={pathnameCast} >Cast</Link>         
            </li>                              
            <li>
                <Link to={pathnameReviews} >Reviews</Link>   
            </li>                                        
        </ul>                                                                                    
    )     
  }
  
  