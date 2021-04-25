import React , {useState,useEffect } from 'react';
import axios from './axios';
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row(props) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl,settrailerUrl] = useState();

    useEffect(()=>{
        //if [] , run once when the row loads and dont run it again
        //if [movies] , then it chnages ecery time var movie changes
        async function fetchData(){
            const request = await axios.get(props.fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[props.fetchUrl]);


   const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      }
    };

   

    const handleclicks = (movie)=>{
        if(trailerUrl){
            settrailerUrl('');
        }
        else{
            console.log(movie);
            movieTrailer(movie?.name || movie.title || "")
            .then(url=>{
                const urlParams = new URLSearchParams(new URL(url).search) ;
                settrailerUrl(urlParams.get('v'));
            }).catch((error)=>console.log(error));
            settrailerUrl();
        }
    }

    return (

        <div className="row">
            <h2>{props.title}</h2>

            <div className="row_posters">
                {/*several row ->poster*/ }
                {movies.map(movie=>(  
                 <img 
                 key={movie.id}
                 onClick = {()=>handleclicks(movie)}
                 className={`row_poster ${props.islarge && "row_posterlarge"}`}
                 src={`${base_url}${props.islarge?movie.poster_path:movie.backdrop_path}`} alt={movie.name}/> 
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}



export default Row
