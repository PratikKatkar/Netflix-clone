import React  from 'react'
import Api from '../api/Api';
import axios from "axios"
import { useEffect, useState } from "react";
import "./Bannar.css"

const Bannar = () => {
 
    const [movie, setMovie] = useState([]);

    useEffect(() =>{
        
        const fetchData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API}${Api.fetchNetFlixOriginals}`);
            setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]);
            return response;

        };
        fetchData();
    },[]);

    const  truncate= (str, n) => {
        return str?. length > n ? str. substr(0, n-1) + "..." : str;

    }


    return (
       <header className='banner' 
       style={{
           backgroundSize:"cover",
           backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
           backgroundPosition: "center center",

       }}
       >
           <div className="banner-contents" >
               <h1 className="banner-title">
                   {movie?.title || movie?.name || movie?.original_name  }
               </h1>
              
               <div className="banner-buttons">
                   <button className="banner-button"> Play</button>
                   <button className="banner-button">My List</button>
              </div>
              <div>
              <h1 className="banner-description">
                  {truncate(movie?.overview, 200)}
              </h1>
              </div>
            <div className="banner-fadeBottom">
            </div>

            </div>

         
           

       </header>
    )
}

export default Bannar
