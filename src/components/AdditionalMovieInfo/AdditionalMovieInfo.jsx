import {  Link } from "react-router-dom";
import css from './AdditionalMovieInfo.module.css';

export const AdditionalMovieInfo = ({listTitle, location}) => {       
    return (
        <ul className={css.addInfo}>{listTitle}
            <li>
                <Link to="cast" state={{ from: location }}>Cast</Link>         
            </li>                              
            <li>
                <Link to="reviews" state={{ from: location }}>Reviews</Link>   
            </li>                                        
        </ul>                                                                                    
    )     
  }
  
  