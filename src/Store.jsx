import {createContext , useState } from 'react';
import axios from 'axios';



export let trendingContext = createContext(0);

export default function TrendingProvider(props){


    let [trendingMovies , setTrendingMovies] = useState(null);
    let [trendingTv , setTrendingTv] = useState(null);
    let [trendingPerson , setTrendingPerson] = useState(null);

    async function getData(mediaType , callBack) {

        let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`);
        callBack(data.results);

    }

    return(<>

           <trendingContext.Provider value={{trendingMovies,trendingTv,trendingPerson,setTrendingMovies,setTrendingTv,setTrendingPerson,getData}}>
                {props.children}
           </trendingContext.Provider>
    
    </>)


}





export let paginationContext = createContext(0);

export function PaginationProvider(props){

    let [moviePaginate , setMoviePaginate] = useState(null);
    let [tvPaginate , setTvPaginate] = useState(null);

    async function getPaginate(mediaType , number , callBack){

        let {data} = await axios.get(`https://api.themoviedb.org/3/discover/${mediaType}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${number}`)
        callBack(data.results);

    };


    return(<>
    
            <paginationContext.Provider value={{moviePaginate,tvPaginate,setMoviePaginate,setTvPaginate,getPaginate}}>
                {props.children}
            </paginationContext.Provider>
    
    </>)

}