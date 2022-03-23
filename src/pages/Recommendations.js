import React from "react";
import '../App.css';

function Recommendations() {

    const handleClick = () =>{
        //nothing yet
        console.log("Here you go");//testing that button works
    }
    return(
    <div>
        <h1>
            Recommendations
        </h1>
        <button onClick={handleClick}>Generate Recommendations</button>
    </div>
    )
}

export default Recommendations;