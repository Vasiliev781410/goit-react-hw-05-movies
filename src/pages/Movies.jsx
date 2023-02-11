import { useState, useEffect} from "react";
import { ListFoundFilms } from "components/ListFoundFilms/ListFoundFilms.jsx"
import { SearchForm } from "components/SearchForm/SearchForm.jsx"
import {searchMovies}  from '../api/api.js';
import Notiflix from "notiflix";


export const Movies = () => {    
    const [filter,setFilter] = useState(""); 
    const [films,setFilms] = useState([]); 

    const fetchData = async () => {
        try {
            const results = await searchMovies(filter);                         
            setFilms([ ...results]);                             
            if (results.length === 0 && filter !== "") { 
                Notiflix.Notify.failure('Oops, there is no films with that name');                               
            }   
        }
        catch (error) {  
            Notiflix.Notify.failure('Sorry, there are no films matching your search query. Please try again.');           
              
        };  
    }
    useEffect(() => {    
         fetchData();         
        }         
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ,[filter]);

    const onSubmitSearchForm = (filterForm) =>{            
        setFilter(filterForm);    
        setFilms([]);    
    }

    return (
        <>
            <SearchForm onSubmit={onSubmitSearchForm}/>
            <ListFoundFilms title={""} listFilms={films}/>
        </>
        
        
    ) 
}   
      
