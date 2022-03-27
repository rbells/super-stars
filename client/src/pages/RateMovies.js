import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RateMovies.css";
import MovieList from "../components/MovieList";
import SearchBox from "../components/SearchBox";

function RateMovies() {

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState([]);


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
        console.log(movie.Title);
        console.log(rating);
        console.log(review);
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