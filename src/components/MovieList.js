import React from 'react';
import './RateMovies.css';

function MovieList(props) {
    return(
        <>
            {props.movies.map((movie, index)=> (
                <div className='d-flex justify-content-start col m-3'>
                    <img src={movie.Poster}></img>
                </div>
            ))}
        </>
    )
}

export default MovieList;