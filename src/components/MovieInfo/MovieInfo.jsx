import css from './MovieInfo.module.css';
import { Link, useLocation} from "react-router-dom";

export const MovieInfo = ({title,posterPath,popularity,overview,genres}) => {
const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";  
    return (
        <>
            <Link to={backLinkHref}>               
                <button> {`<-`} Go back</button> 
            </Link>  
            <div className={css.movieInfoContainer}>                  
                <img className={css.moviePoster} src={`https://image.tmdb.org/t/p/original${posterPath}`} alt={title} width="350" height="600" loading="lazy" />
                <div>
                    <h1>{title}</h1>
                    <p>User score: {popularity}%</p>
                    <h2> Overview</h2>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <p>{genres}</p> 
                </div>  
            </div>
        </>                                                                 
    )     
}

