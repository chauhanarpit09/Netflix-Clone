import React  ,{useState,useEffect}from 'react'
import axios from './axios';
import requests from './request';
import './Banner.css';

function Banner() {
    const [movie, setmovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
           const request = await axios.get(requests.fetchNetflixOriginals);
           let op = request.data.results;
           setmovie(op[
               Math.floor(Math.random() * request.data.results.length-1)
           ]);
        
        }
        fetchData();
    }, []);


    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"...":str;
    }


    
    return (
        <header className="banner"
        style={{
            padding_top:"2px",
            backgroundSize:"cover",
            backgroundImage:`url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
            backgroundPosition:"center center",
        }}
        > 
      
            <div className="banner_contents">
                <h1 className="banner_title">
                  {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className = "banner_description">
                    {truncate(movie?.overview,200)}
                </h1>

            </div>

            <div className="banner_fadebottom"></div>
        </header>
    )
}

export default Banner
