import { useState, useEffect} from "react";
import { ListFoundFilms } from "components/ListFoundFilms/ListFoundFilms.jsx"
import { SearchForm } from "components/SearchForm/SearchForm.jsx"
import {searchMovies}  from '../api/api.js';
import Notiflix from "notiflix";
import {  useLocation, useSearchParams} from "react-router-dom";

export  const Movies = () => {   
    const [films,setFilms] = useState([]);      
    const location = useLocation();  
    const [searchParams, setSearchParams] = useSearchParams(location.search); 
    let query = searchParams.get("query");
    //console.log("filter ", filter); 
 
    const fetchData = async () => {      
        try {
                     
            const results = await searchMovies(query);                         
            setFilms(results);                             
            if (results.length === 0 && query !== "") { 
                Notiflix.Notify.failure('Oops, there is no films with that name');                               
            }   
        }
        catch (error) {  
            Notiflix.Notify.failure('Sorry, there are no films matching your search query. Please try again.');           
              
        };  
    }
    useEffect(() => {
        if (query){    
            fetchData(); 
         }                       
          
    }         
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ,[query]);

    const onSubmitSearchForm = (filterForm) =>{            
        //setFilter(filterForm);
        setSearchParams(`query=${filterForm}`);        
        setFilms([]);    
    }

    return (
        <>
            <SearchForm onSubmit={onSubmitSearchForm}/>
            <ListFoundFilms title={""} path="" listFilms={films} query={query}/>
        </>
        
        
    ) 
}   
    
export default Movies;
