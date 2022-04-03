import React,{useState} from 'react';
import "./UserFilters.css";
import Selection from './Selection';

function UserFilters(){

    const [selections, setSelections] = useState([]);

    const handleClick =() =>{

    };

    const addToSelections = (title) =>{
        console.log(title);
    };

    return(
        <div>
            <h1>User Filters</h1>
            <h2>Genre</h2>
            <div>
                <Selection addToSelections={addToSelections} title="Comedy"/>
                <Selection addToSelections={addToSelections} title="Drama"/>
                <Selection addToSelections={addToSelections} title="Horror"/>
                <Selection addToSelections={addToSelections} title="Adventure"/>
                <Selection addToSelections={addToSelections} title="Action"/>
                <Selection addToSelections={addToSelections} title="Family"/>
            </div>
            <h2>Decade</h2>
            <div>
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
            <h2>Finished</h2>
            <div>
                <button>Give Me My Movie!</button>
            </div>
        </div>
    )
}

export default UserFilters;