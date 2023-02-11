import { ListFilmItem } from "components/ListFilmItem/ListFilmItem"

export const ListFoundFilms = ({title, listFilms}) => {
    return (
        <ul className="listFilms">
            <h1>{title}</h1>
            {listFilms.map(film =>(<ListFilmItem key={film.id} film={film}/>))}                                                  
        </ul>
    ) 
}    