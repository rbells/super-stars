import React from "react";
import {useNavigate} from 'react-router-dom';
import './Recommendations.css';

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

    const routeToGroupRecommendation = () =>{
        let path = 'grouprecommendations';
        navigate(path);
    }

    return(
    <div>
        <h1 className="recTitle">
            Recommendations
        </h1>
        <h2 className="watchYourself">Watching By Yourself</h2>
        <div className="yourselfButton">
            <button className="anyButton" onClick={routeToSoloRecommendation}>Give Me Anything!</button>
            <button className="specButton" onClick={routeToUserFilters}>I Want Something More Specific</button>
        </div>  
        <h2 className="watchGroup">Watching With Friends</h2>
        <div className="groupBut">
            <button className="groupButton" onClick={routeToGroupRecommendation}>Start The Watch Group</button>
        </div>

    </div>
    )
}

export default Recommendations;