import React, {useState, useEffect} from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import './SoloRecommendation.css';

function SoloRecommendations(props){


    const [poster, setPoster] = useState("https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg");
    const [selections, setSelections]= useState(props.selections);
    const [poster2, setPoster2] = useState("https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_SX300.jpg");

    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        setTimeout(() =>{
            setLoading(false);
        }, 2500)
    }, [poster])

    const handleAlreadySeenClick = () =>{
        setPoster("https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg");
    }

    if (selections.length > 0){
        return(
            <div>
                {
                    loading ?  
                    <ScaleLoader color={"#4A90E2"} loading={loading} size={30} />
                    :
                    <div>
                        <h1 className="specRecTitle">This is the specific recommendations</h1>
                        <h1 className="selection">{props.selections}</h1>
                            <center> <img src={poster2}></img> </center>
                            <div className="overlay d-flex align-items-center justify-content-center">
                                <span>Rate This Movie</span>
                            </div>
                            <div className="seenButton">
                                <button onClick={handleAlreadySeenClick}>Already Seen It</button>
                            </div>
                    </div>      
                }
                
            </div>
        )
    } else {
        return(
            <div>
                {
                    loading ?  
                    <ScaleLoader color={"#4A90E2"} loading={loading} size={30} />
                    :
                    <div>
                        <h1 className="soloRecTitle">This is the solo recommendations</h1>
                            <center> <img src={poster}></img> </center>
                            <div className="overlay d-flex align-items-center justify-content-center">
                                <span>Rate This Movie</span>
                            </div>
                            <div className="seenButton2">
                                <button onClick={handleAlreadySeenClick}>Already Seen It</button>
                            </div>
                    </div>      
                }
                
            </div>
        )
    }  
}

export default SoloRecommendations;