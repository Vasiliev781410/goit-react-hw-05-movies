export const ListFilmItem = ({film}) => {
    let filmName = null;
    try {
        filmName = film.original_title;
        if (filmName === undefined){
            filmName = film.name;
        }
    } catch (error) {      
        console.log(error);
    }
    return (
         <li id={film.id}>{filmName}</li> 
    )
}    