import { useEffect } from "react";
import { useContext } from "react";
import {paginationContext} from '../../Store';
import {Link} from 'react-router-dom';

export default function Movies(){

    let num = new Array(15).fill(1).map((e,i)=> i+1)

    let {moviePaginate,setMoviePaginate,getPaginate} = useContext(paginationContext);

    useEffect(()=> {

        getPaginate(`movie` , 1 , setMoviePaginate);

    } , []);

    function changePage(e){

        getPaginate(`movie` , e , setMoviePaginate);

    };

    return(<>
    
        <div className="container-fluid mt-3">
            <div className="row gy-3">
                {moviePaginate ? moviePaginate.map((movie,i)=> <div key={i} className="col-md-2 col-sm-4 col-6">

                <Link to={`/details/${movie.id}/movie`}>
                    <div className="position-relative parent-hover text-center">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="w-100" />
                        <div className="hover fs-5 w-100 h-100 position-absolute top-0 start-0 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center">Show More Details</div>
                        <div className="hover2 position-absolute top-0 end-0 bg-info py-1 px-2">{movie.vote_average}</div>
                    </div>
                    <h2 className="h5 text-light mt-1">{movie.title}</h2>
                </Link>

                </div>) : <div className="w-100 vh-100 text-center text-light fs-2 d-flex align-items-center justify-content-center"><i className="fas fa-spinner fa-spin"></i></div>}
            </div>

            <nav aria-label="..." className="my-5 d-flex justify-content-center">
            <ul className="pagination pagination-sm">

                {num.map((e,i)=> <li key={i} onClick={()=>  changePage(e)}  className="page-item "><a  className="page-link bg-transparent text-light">{e}</a></li>)}

            </ul>
            </nav>
        </div>
        
    </>)
}