import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "components/SharedLayout.jsx";
import { Home } from "pages/Home.jsx";
import { Movies } from "pages/Movies.jsx";

export const PageManager = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />           
                <Route path="movies" element={<Movies />} />   
                <Route path="*" element={<Home />} />                                      
            </Route>
        </Routes>                                                                                                     
    )     
}

//<Route path="movies/:movieId" element={<MovieDetails />} />  
