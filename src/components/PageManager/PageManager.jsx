import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "components/SharedLayout.jsx";
const Movies = lazy(() => import("pages/Movies.jsx"));
const Cast = lazy(() => import("components/Cast/Cast.jsx"));
const Reviews = lazy(() => import("components/Reviews/Reviews.jsx"));
const MovieDetails = lazy(() => import("pages/MovieDetails.jsx"));
const Home = lazy(() => import("pages/Home.jsx"));


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


