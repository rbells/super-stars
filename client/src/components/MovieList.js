import React from 'react';
import '../pages/RateMovies.css';

function MovieList(props) {
    return(
        <>
            {props.movies.map((movie, index)=> (
                <div className='image-container d-flex justify-content-start col m-3'>
                    <img src={movie.Poster}></img>
                    <div onClick={()=>props.handleClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                        <span>Rate This Movie</span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default MovieList;