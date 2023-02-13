import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import {getCastById}  from '../../api/api.js';
import css from './Cast.module.css';

export const Cast = () => {
  const {movieId} = useParams();
  const [castS,setCastS] = useState([]);

  const fetchData = async () => {
    try {
        const aboutCast = await getCastById(movieId);  
        const {cast} = aboutCast;
        setCastS([...cast]);                    
    }
    catch (error) {
    };  
}
useEffect(() => {    
     fetchData();         
    }         
// eslint-disable-next-line react-hooks/exhaustive-deps
,[movieId]);
    
return (
  <ul className="addInfo">
      {castS.length > 0 ?
        castS.map(actor => 
          <li className={css.actor} key={actor.credit_id}>             
            {actor.profile_path && <img className={css.actorImg} src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt={actor.name} loading="lazy" width="100" height="150"/>}
            {actor.name}
            <span className={css.character}>Character: {actor.character}</span>
          </li>
          ) :
        <span>We don't have cast of this movie</span>
      }                                                                                                  
  </ul>
  )     
}

