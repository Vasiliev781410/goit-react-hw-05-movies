import { useLocation } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

export const MovieDetails = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";
    console.log('pathname: ',location.pathname);
    return (
        <>
            <div> 
                <Link to={backLinkHref}>               
                    <button> Go back</button> 
                </Link>            
                <img src="" alt="" />
                <div>
                    <h1>King</h1>
                    <p>1</p>
                    <h2> Overview</h2>
                    <p>2</p>
                    <h3>Genres</h3>
                    <p>3</p> 
                </div>  
            </div>
            <div>
                <p>Additional information</p>
                <Link to={`${location.pathname}/cast`} >
                    Cast
                </Link>
                <Outlet />
            </div>
        </>
    ) 
}    

 