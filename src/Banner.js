import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './requests';
import './Banner.css'

function Banner() {
    
    const [movie, setMovie] = useState([]);

    useEffect( () => {
        // async function fetchData(){
        //     // code here
        //     const request = await axios.get(requests.fetchNetflixOriginals);
        //     console.log(
        //         request.data.results[
        //             Math.floor(Math.random() * request.data.results.length - 1)
        //         ]
        //     ); // array here movie 1 .. movie 2 .. movie 3
        // }
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                 request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                 ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <div>
            <header 
                className="banner"
                style = {
                    {
                        backgroudSize: "cover",
                        backgroudImage: `url(
                            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                        )`,
                        backgroundPosition: "center center",
                    }
                }
            > {/* <<<< Backgroud image */}
                <div className = "banner__contents">
                    {/* title */}
                    <h1 className="banner__title">
                        { movie?.title  || movie?.name || movie?.original_name}
                    </h1>
                    
                    {/* div > 2 buttons */}
                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">My List</button>
                    </div>
                   
                    <h1 className="banner_description">
                        {truncate(movie?.overview, 150)}
                        {/* {movie?.overview} */}
                    </h1>

                    <div className="banner--fadeBottom">
                    </div>
                    {/* description */}

                </div>
            </header>
        </div>
    )
}

export default Banner
