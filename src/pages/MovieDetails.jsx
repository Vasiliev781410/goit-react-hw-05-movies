import {useState, useEffect} from "react";
import { Link, Outlet, useLocation, useParams} from "react-router-dom";
import { AdditionalMovieInfo } from "components/AdditionalMovieInfo/AdditionalMovieInfo.jsx";
import {getMovieById}  from '../api/api.js';
import Notiflix from "notiflix";

export const MovieDetails = () => {
    const [titleS,setTitleS] = useState("");
    const [genresS,setGenresS] = useState("");
    const [overviewS,setOverviewS] = useState("");
    const [popularityS,setPopularityS] = useState("");
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";  
    const {movieId} = useParams();
   
    const fetchData = async () => {
        try {
            const aboutMovie = await getMovieById(movieId); 
            const {title, genres, overview, popularity} = aboutMovie;
            setTitleS(title);
            setGenresS(genres.map(genre=>genre.name).join(", ")); 
            setOverviewS(overview); 
            setPopularityS(Math.round(popularity));                                      
            if (aboutMovie === undefined) { 
                Notiflix.Notify.failure('Oops, there is no information about this movie');                               
            }   
        }
        catch (error) {  
            Notiflix.Notify.failure('Sorry, there is no information about this movie');           
              
        };  
    }
    useEffect(() => {    
         fetchData();         
        }         
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ,[movieId]);
 
    return (
        <>
            <div> 
                <Link to={backLinkHref}>               
                    <button> {`<-`} Go back</button> 
                </Link>            
                <img src="" alt="" />
                <div>
                    <h1>{titleS}</h1>
                    <p>User score: {popularityS}%</p>
                    <h2> Overview</h2>
                    <p>{overviewS}</p>
                    <h3>Genres</h3>
                    <p>{genresS}</p> 
                </div>  
            </div>
            <AdditionalMovieInfo listTitle="Additional information" movieId={movieId} />           
            <Outlet />              
        </>
    ) 
}    

 