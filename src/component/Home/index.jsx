import { useEffect } from "react";
import { useContext } from "react";
import {trendingContext} from '../../Store';
import Profile from '../../assets/image/profile.jpg';
import {Link} from 'react-router-dom';



export default function Home(){

    let {trendingMovies,trendingTv,trendingPerson,setTrendingMovies,setTrendingTv,setTrendingPerson,getData} = useContext(trendingContext);

    useEffect(()=> {

        getData(`movie` , setTrendingMovies);
        getData(`tv` , setTrendingTv);
        getData(`person` , setTrendingPerson);

        console.log(trendingPerson)

    } , [])

    return(<>

        <div className="container-fluid mt-5">

             <div className="row g-3">
                <div className="col-md-4 col-6 d-flex align-items-center">
                    <div className="w-100">
                        <div className="brdr w-25 mb-3"></div>
                        <h2 className="text-light">Trending <br /> Movies <br /> to watch now</h2>
                        <p className="text-muted">most watched movies by days</p>
                        <div className="brdr w-100 mt-3"></div>
                    </div>
                </div>
                {trendingMovies ? trendingMovies.slice(0,10).map((movie,i)=> <div key={i} className="col-md-2 col-3">


                <Link to={`/details/${movie.id}/movie`}>

                        {movie.poster_path  ? <>
                        
                            <div className="position-relative parent-hover text-center">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="w-100" />
                                <div className="hover-home fs-5 w-100 h-100 position-absolute top-0 start-0 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center">Show More Details</div>
                                <div className="hover2 position-absolute top-0 end-0 bg-info py-1 px-2">{movie.vote_average}</div>
                            </div>

                        </> : <div className="text-light fs-2"><i className="fas fa-spinner fa-spin"></i></div>}
                        <h3 className="text-light h5 mt-1">{movie.title}</h3>
                </Link>
                

                </div>) : <div className="text-light fs-2"><i className="fas fa-spinner fa-spin"></i></div>}
            </div>

            <div className="row g-3 my-5">
                <div className="col-md-4 col-6 d-flex align-items-center">
                    <div className="w-100">
                        <div className="brdr w-25 mb-3"></div>
                        <h2 className="text-light">Trending <br /> Tv <br /> to watch now</h2>
                        <p className="text-muted">most watched tv by days</p>
                        <div className="brdr w-100 mt-3"></div>
                    </div>
                </div>
                {trendingTv ? trendingTv.slice(0,10).map((tv,i)=> <div key={i} className="col-md-2 col-3">

                <Link to={`/details/${tv.id}/tv`}>
                    {tv.poster_path  ? <>
                    
                        <div className="position-relative parent-hover text-center">
                                <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt="" className="w-100" />
                                <div className="hover-home fs-5 w-100 h-100 position-absolute top-0 start-0 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center">Show More Details</div>
                                <div className="hover2 position-absolute top-0 end-0 bg-info py-1 px-2">{tv.vote_average}</div>
                        </div>

                    </>  : <div className="text-light fs-2"><i className="fas fa-spinner fa-spin"></i></div>}
                    <h3 className="text-light h6 mt-1">{tv.name}</h3>
                </Link>

                            

                </div>) : <div className="text-light fs-2"><i className="fas fa-spinner fa-spin"></i></div>}
            </div>

            <div className="row g-3">
                <div className="col-md-4 col-6 d-flex align-items-center">
                    <div className="w-100">
                        <div className="brdr w-25 mb-3"></div>
                        <h2 className="text-light">Trending <br /> Person <br /> to watch now</h2>
                        <p className="text-muted">most watched person by days</p>
                        <div className="brdr w-100 mt-3"></div>
                    </div>
                </div>
                {trendingPerson ? trendingPerson.slice(10,20).map((person,i)=> <div key={i} className="col-md-2 col-3">

                <Link to={`/details/${person.id}/person`}>
                    {person.profile_path  ? <>
                    
                        <div className="position-relative parent-hover text-center">
                                <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt="" className="w-100" />
                                <div className="hover-home fs-5 w-100 h-100 position-absolute top-0 start-0 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center">Show More Details</div>
                                <div className="hover2 position-absolute top-0 end-0 bg-info py-1 px-2">{person.popularity}</div>
                            </div>
                    
                    </> : <img src={Profile} alt="" className="w-100" />}
                    <h3 className="text-light h6 mt-1">{person.name}</h3>
                </Link>
                
                </div>) : <div className="text-light fs-2"><i className="fas fa-spinner fa-spin"></i></div>}
            </div>

        </div>

    </>)

}