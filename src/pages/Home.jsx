import { ListFoundFilms } from 'components/ListFoundFilms/ListFoundFilms.jsx';
import {getTrending}  from '../api/api.js';
import Notiflix from "notiflix";
import { useState, useEffect } from "react";

export const Home = () => {
    const [films,setFilms] = useState([]); 

    const fetchData = async () => {
        try {
            const results = await getTrending();                          
            setFilms([ ...results]);                             
            if (results.length === 0) { 
                Notiflix.Notify.failure('Oops, there is no trending films now');                               
            }   
        }
        catch (error) {  
            Notiflix.Notify.failure('Sorry, there are no films now. Please try later.');              
        };  
    }
    useEffect(() => {    
         fetchData();         
        }         
    ,[]);

    return (
        <>
            <ListFoundFilms title={"Trending list"} path="movies/" listFilms={films}/>
        </>
    ) 
}   
      
