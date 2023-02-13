import { useLocation, Link } from "react-router-dom";
import css from './AdditionalMovieInfo.module.css';

export const AdditionalMovieInfo = ({listTitle, movieId}) => {
    const location = useLocation();  
    const pathnameCast = `/movies/${movieId.toString()}/cast`;
    const pathnameReviews = `/movies/${movieId.toString()}/reviews`;
   
     return (
        <ul className={css.addInfo}>{listTitle}
            <li>
                <Link to={pathnameCast} state={{ from: location }}>Cast</Link>         
            </li>                              
            <li>
                <Link to={pathnameReviews} state={{ from: location }}>Reviews</Link>   
            </li>                                        
        </ul>                                                                                    
    )     
  }
  
  