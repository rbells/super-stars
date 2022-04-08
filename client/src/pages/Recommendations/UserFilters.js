import React,{useState} from 'react';
import "./UserFilters.css";
import Selection from './Selection';
import {useNavigate} from 'react-router-dom';
import SoloRecommendations from './SoloRecommendations';

function UserFilters(){

    
    const [finalClick, setFinalClick] = useState(false);

    const [selections, setSelections] = useState([]);

    const handleFinalClick =() =>{
        setFinalClick(true);
    };

    const addToSelections = (title) =>{
        setSelections([...selections, title]);
    };

    if (finalClick == true && selections.length > 0){
        return(
            <div>
               <SoloRecommendations selections={selections} />
            </div>
        )
    } else {
        return(
        
            <div>
                <h1 className="userFilter">User Filters</h1>
                <h2 className="genre">Genre</h2>
                <div className="genreButton"> 
                    <Selection addToSelections={addToSelections} title="Comedy"/>
                    <Selection addToSelections={addToSelections} title="Drama"/>
                    <Selection addToSelections={addToSelections} title="Horror"/>
                    <Selection addToSelections={addToSelections} title="Adventure"/>
                    <Selection addToSelections={addToSelections} title="Action"/>
                    <Selection addToSelections={addToSelections} title="Family"/>
                </div>
                <h2 className="decade">Decade</h2>
                <div className="titleButton">
                    <Selection addToSelections={addToSelections} title="1940's"/>
                    <Selection addToSelections={addToSelections} title="1950's"/>
                    <Selection addToSelections={addToSelections} title="1960's"/>
                    <Selection addToSelections={addToSelections} title="1970's"/>
                    <Selection addToSelections={addToSelections} title="1980's"/>
                    <Selection addToSelections={addToSelections} title="1990's"/>
                    <Selection addToSelections={addToSelections} title="2000's"/>
                    <Selection addToSelections={addToSelections} title="2010's"/>
                    <Selection addToSelections={addToSelections} title="2020's"/>
                </div>
                <h2 className="finished">Finished</h2>
                <div className="giveButton">
                    <button onClick={handleFinalClick}>Give Me My Movie!</button>
                </div>
            </div>
        )
    }
}

export default UserFilters;