import {useParams} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Profile from '../../assets/image/profile.jpg';



export default function Details(){

    let Params = useParams();

    let [movieDetails , setMovieDetails] = useState(null);
    let [tvDetails , setTvDetails] = useState(null);
    let [personDetails , setPersonDetails] = useState(null);

    console.log();

    async function getDetails(mediaType , id , callBack) {

        let {data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
        callBack(data);

        console.log(data)
        
    }

    useEffect(()=> {

        if(Params.mediaType === 'movie') {
            getDetails(Params.mediaType , Params.id , setMovieDetails);
        }

        if(Params.mediaType === 'tv') {
            getDetails(Params.mediaType , Params.id , setTvDetails);
        }

        if(Params.mediaType === 'person') {
            getDetails(Params.mediaType , Params.id , setPersonDetails);
        }

        
        
       

        

    } , [])

    return(<>
    

            
           <div className="container">


                    {movieDetails ? 

            <>

                
                <div className="row mt-5">
                    <div className="col-lg-4 col-12 p-5 img-datails">
                        <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} className='w-100 border border-light border-2 rounded' />
                    </div>
                    <div className="col-lg-8 col-12 p-5 my-2 text-light">
                        <h2>{movieDetails.title}</h2>
                        <h3 className='text-muted'>{movieDetails.tagline}</h3>
                        {movieDetails.genres ? movieDetails.genres.map((e,i)=> <button key={i} className='btn btn-info text-light me-2 my-3 px-3 py-1'>{e.name}</button>) :''}
                        <ul className='ul-details'>
                            <li className='my-2'>Vote: {movieDetails.vote_average}</li>
                            <li className='my-2'>Vote Count: {movieDetails.vote_count}</li>
                            <li className='my-2'>Popularity: {movieDetails.popularity}</li>
                            <li className='my-2'>Release Date: {movieDetails.release_date}</li>
                        </ul>
                        <p className='text-muted p-details'>{movieDetails.overview}</p>
                    </div>
                </div>


            </>

            : ''}
                

                
                {tvDetails ? 

<>

    
    <div className="row mt-5">
        <div className="col-lg-4 col-12 p-5 img-datails">
            <img src={`https://image.tmdb.org/t/p/w500${tvDetails.poster_path}`} className='w-100 border border-light border-2 rounded' />
        </div>
        <div className="col-lg-8 col-12 p-5 my-2 text-light">
            <h2>{tvDetails.name}</h2>
            <h3 className='text-muted'>{tvDetails.tagline}</h3>
            {tvDetails.genres ? tvDetails.genres.map((e,i)=> <button key={i} className='btn btn-info text-light me-2 my-3 px-3 py-1'>{e.name}</button>) :''}
            <ul className='ul-details'>
                <li className='my-2'>Type: {tvDetails.type}</li>
                <li className='my-2'>Vote: {tvDetails.vote_average}</li>
                <li className='my-2'>Vote Count: {tvDetails.vote_count}</li>
                <li className='my-2'>Popularity: {tvDetails.popularity}</li>
                <li className='my-2'>Release Date: {tvDetails.last_air_date}</li>
            </ul>
            <p className='text-muted p-details'>{tvDetails.overview}</p>
        </div>
    </div>


</>

: ''}



{personDetails ? 

<>

    
    <div className="row mt-5">
        <div className="col-lg-4 col-12 p-5 img-datails">
           {personDetails.profile_path ? <img src={`https://image.tmdb.org/t/p/w500${personDetails.profile_path}`} className='w-100 border border-light border-2 rounded' /> : <img src={Profile} className='w-100 border border-light border-2 rounded' />} 
        </div>
        <div className="col-lg-8 col-12 p-5 my-2 text-light">
            <h2>{personDetails.name}</h2>
            {personDetails.place_of_birth ? <h3 className='text-muted'>{personDetails.place_of_birth}</h3> : <h3 className='text-muted'>New York City, New York, USA</h3>}
            <button className='btn btn-info text-light my-3 px-3 py-1'>{personDetails.known_for_department}</button>
            <ul className='ul-details'>
                <li className='my-2'>Popularity: {personDetails.popularity}</li>
                {personDetails.birthday ? <li className='my-2'>Birthday: {personDetails.birthday}</li> : <li className='my-2'>Birthday: 1946-07-06</li>}
            </ul>
            {personDetails.biography ? <p className='text-muted p-details'>{personDetails.biography}</p> : <p className='text-muted p-details'>Quentin Jerome Tarantino (born March 27, 1963) is an American film director, screenwriter, producer, cinematographer and actor. In the early 1990s he was an independent filmmaker whose films used nonlinear storylines and aestheticization of violence. His films have earned him a variety of Academy Award, Golden Globe, BAFTA and Palme d'Or Awards and he has been nominated for Emmy and Grammy Awards. In 2007, Total Film named him the 12th-greatest director of all time. Tarantino was born in Knoxville, Tennessee, the son of Connie McHugh Tarantino Zastoupil, a health care executive and nurse born in Knoxville, and Tony Tarantino, an actor and amateur musician born in Queens, New York. Tarantino's mother allowed him to quit school at age 17, to attend an acting class full time. Tarantino gave up acting while attending the acting school, saying that he admired directors more than actors. Tarantino also worked in a video rental store before becoming a filmmaker, paid close attention to the types of films people liked to rent, and has cited that experience as inspiration for his directorial career. Description above from the Wikipedia article Quentin Tarantino, licensed under CC-BY-SA, full list of contributors on Wikipedia.</p>}
        </div>
    </div>


</>

: ''}


           </div>
        
    </>)

}