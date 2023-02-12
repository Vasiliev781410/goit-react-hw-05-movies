import { Link } from "react-router-dom";

export const AdditionalMovieInfo = ({listTitle, movieId}) => {  
    const pathnameCast = `/movies/${movieId.toString()}/cast`;
    const pathnameReviews = `/movies/${movieId.toString()}/reviews`;
     return (
        <ul>{listTitle}
            <li>
                <Link to={pathnameCast} >Cast</Link>         
            </li>                              
            <li>
                <Link to={pathnameReviews} >Reviews</Link>   
            </li>                                        
        </ul>                                                                                    
    )     
  }
  
  