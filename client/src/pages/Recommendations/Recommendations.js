import React from "react";
import {useNavigate} from 'react-router-dom';

function Recommendations() {

    let navigate = useNavigate();

    const routeToSoloRecommendation = () =>{
        let path = 'solorecommendations';
        navigate(path);
    }

    const routeToUserFilters = () =>{
        let path = 'userfilters';
        navigate(path);
    }

    return(
    <div>
        <h1>
            Recommendations
        </h1>
        <h2>Watching By Yourself</h2>
        <div>
            <button onClick={routeToSoloRecommendation}>Give Me Anything!</button>
            <button onClick={routeToUserFilters}>I Want Something More Specific</button>
        </div> 
        <h2>Watching With Friends</h2>
        <div>
            <button>Start The Watch Group</button>
        </div>

    </div>
    )
}

export default Recommendations;