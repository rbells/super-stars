import React, {useState} from 'react';
import "./UserFilters.css";

function Selection(props){

    const [selected, setSelected] = useState(false);

    const handleClick = () =>{
        setSelected(!selected);
    };

    return(
            <button onClick={()=>{
                handleClick();
                props.addToSelections(props.title)
            }} className={selected ? 'selected' : 'notSelected'}>{props.title}</button>
    )
}

export default Selection;