import { ListFilmItem } from "components/ListFilmItem/ListFilmItem";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const ListFoundFilms = ({path,title, listFilms}) => {
    const location = useLocation();
    return (
        <ul className="listFilms">
            <h1>{title}</h1>
            {listFilms.map(film =>(
                <Link key={film.id} to={`${path}${film.id}`} state={{ from: location }}>
                    <ListFilmItem key={film.id} film={film}/>
                </Link>
            ))}                                                  
        </ul>
    ) 
}    