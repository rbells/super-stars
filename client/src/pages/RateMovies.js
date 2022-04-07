import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RateMovies.css";
import MovieList from "../components/MovieList";
import SearchBox from "../components/SearchBox";
import Axios from 'axios';

function RateMovies() {

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState([]);

    const [userDetails,setUserDetails] = useState({
        username:'',
        userID:''
      });

    Axios.defaults.withCredentials = true;

    useEffect(()=>{
        Axios.get("http://localhost:3001/api/login").then((response) =>{
            if(response.data.loggedIn === true){
                setUserDetails({...userDetails,username: response.data.user[0].username, 
                                                userID: response.data.user[0].id});
            }  
        })
    },[]);


    const getMovieRequest = async (searchValue) =>{
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=73fbf4ac`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search){
            setMovies(responseJson.Search);
        }
    }

    useEffect(()=>{
        getMovieRequest(searchValue);
    }, [searchValue])

    const rateThisMovie = (movie) => {
        let rating = prompt("?/10");
        let review = prompt("Review this movie");
        let title = movie.Title;
        Axios.post('http://localhost:3001/api/rating', 
        {title: title,
         rating: rating,
         review: review,
         user_id: userDetails.userID,
         author: userDetails.username
        });
    }
    return(
    <div className='container-fluid movie-app'>
        <div className ='row d-flex align-items-center mt-4 mb-4'>
            <div className = 'col'>
                <h1>Movies</h1>
            </div>
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
            <div className='row'>
                <MovieList handleClick={rateThisMovie} movies={movies}/>
        </div> 
    </div>
    )
}

export default RateMovies;