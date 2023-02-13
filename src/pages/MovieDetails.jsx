import {useState, useEffect} from "react";
import { Outlet,  useParams} from "react-router-dom";
import { AdditionalMovieInfo } from "components/AdditionalMovieInfo/AdditionalMovieInfo.jsx";
import { MovieInfo } from "components/MovieInfo/MovieInfo.jsx";
import {getMovieById}  from '../api/api.js';
import Notiflix from "notiflix";

export const MovieDetails = () => {
    const [titleS,setTitleS] = useState("");
    const [genresS,setGenresS] = useState("");
    const [overviewS,setOverviewS] = useState("");
    const [popularityS,setPopularityS] = useState("");
    const [posterPathS,setPosterPathS] = useState("");
    const {movieId} = useParams();
   
    const fetchData = async () => {
        try {
            const aboutMovie = await getMovieById(movieId); 
            const {title, genres, overview, popularity, poster_path} = aboutMovie;
            setTitleS(title);
            setGenresS(genres.map(genre=>genre.name).join(", ")); 
            setOverviewS(overview); 
            setPopularityS(Math.round(popularity));  
            setPosterPathS(poster_path);                                     
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
            <MovieInfo title={titleS} posterPath={posterPathS} popularity={popularityS} overview={overviewS} genres={genresS}  />          
            <AdditionalMovieInfo listTitle="Additional information" movieId={movieId} />           
            <Outlet />              
        </>
    ) 
}    

 