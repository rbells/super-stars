import React, {useState, useEffect} from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

function SoloRecommendations(){


    const [poster, setPoster] = useState("https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg");

    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        setTimeout(() =>{
            setLoading(false);
        }, 4000)
    }, [poster])

    const handleAlreadySeenClick = () =>{
        setPoster("https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg");
    }

    return(
        <div>
            {
                loading ?  
                <ScaleLoader color={"#4A90E2"} loading={loading} size={30} />
                :
                <div>
                    <h1>This is the solo recommendations</h1>
                        <img src={poster}></img>
                        <div className="overlay d-flex align-items-center justify-content-center">
                            <span>Rate This Movie</span>
                        </div>
                        <div>
                            <button onClick={handleAlreadySeenClick}>Already Seen It</button>
                        </div>
                </div>      
            }
            
        </div>
    )
}

export default SoloRecommendations;