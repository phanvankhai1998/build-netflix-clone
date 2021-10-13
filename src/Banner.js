import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './requests';


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

    return (
        <div>
            <header> {/* <<<< Backgroud image */}

            {/* title */}



            {/* div > 2 buttons */}



            {/* description */}

            </header>
        </div>
    )
}

export default Banner
