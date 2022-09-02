import { useEffect } from "react";
import { useContext } from "react";
import {trendingContext} from '../../Store';
import Profile from '../../assets/image/profile.jpg';
import {Link} from 'react-router-dom';



export default function Person(){

    let {trendingPerson,setTrendingPerson,getData} = useContext(trendingContext);

    useEffect(()=> {

        getData(`person` , setTrendingPerson);
        console.log(trendingPerson);

    } , [])

    return(<>
    
        <div className="container-fluid mt-3">
        <div className="row g-3">
                {trendingPerson ? trendingPerson.reverse().map((person,i)=> <div key={i} className="col-md-2 col-sm-4 col-6">

                <Link to={`/details/${person.id}/person`}>
                    
                    {person.profile_path  ? <>
                    
                        <div className="position-relative parent-hover text-center">
                            <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt="" className="w-100" />
                            <div className="hover fs-5 w-100 h-100 position-absolute top-0 start-0 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center">Show More Details</div>
                            <div className="hover2 position-absolute top-0 end-0 bg-info py-1 px-2">{person.popularity}</div>
                        </div>

                    </> : <img src={Profile} alt="" className="w-100" />}
                    <h3 className="text-light h5 mt-1">{person.name}</h3>
                </Link>


                </div>) : <div className="text-light fs-2"><i className="fas fa-spinner fa-spin"></i></div>}
            </div>
        </div>
        
    </>)
}