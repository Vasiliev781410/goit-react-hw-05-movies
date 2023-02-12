import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "components/SharedLayout.jsx";
import { Home } from "pages/Home.jsx";
import { Movies } from "pages/Movies.jsx";
import { MovieDetails } from "pages/MovieDetails.jsx";
import { Cast } from "components/Cast/Cast.jsx";
import { Reviews } from "components/Reviews/Reviews.jsx";

export const PageManager = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout/>} >
                <Route index element={<Home/>} />           
                <Route path="movies" element={<Movies/>} />  
                <Route path="movies/:movieId" element={<MovieDetails/>} >
                    <Route path="cast" element={<Cast/>} />
                    <Route path="reviews" element={<Reviews/>} />
                </Route> 
                <Route path="*" element={<Home/>} />                                                    
            </Route>
        </Routes>                                                                                                     
    )     
}


