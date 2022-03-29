import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RateMovies.css";
import MovieList from "./MovieList";
import SearchBox from "./SearchBox";

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
        console.log("ready to rate");
        console.log(movie.Title);
    }
    
    const starWrapper = document.querySelector(".stars a");
    const stars = document.querySelectorAll(".stars a");

    stars.forEach((star, clickedIdx) => {
        star.addEventListener("click", () => {
            starWrapper.classList.add('disabled');
            stars.forEach((otherStar, otherIdx) => {
                if (otherIdx <= clickedIdx) {
                    otherStar.classList.add("active");
                }
            });
            console.log('star of index ${idx + 1} was clicked');
        });
    });

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
        <div class="stars">
            <a>1</a>
            <a>2</a>
            <a>3</a>
            <a>4</a>
            <a>5</a>
        </div>
    </div>
    )
}

export default RateMovies;