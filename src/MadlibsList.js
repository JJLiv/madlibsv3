import React, { useState } from "react";
import NewMadlibForm from "./NewMadlibForm";
import Madlib from "./Madlib";


const MadlibsList = () => {
    const INITIAL_STATE = {
        noun1: "",
        noun2: "",
        adjective: "",
        color: "",
    };

    const [madlibs, setMadlibs] = useState([INITIAL_STATE]);

    const addMadlib = (noun1, noun2, adjective, color) => {
        setMadlibs(madlibs => [...madlibs, { noun1, noun2, adjective, color}])
    }

    return (
        <div>
            <h3>Madlibs</h3>
            <NewMadlibForm addMadlib={addMadlib} />
            <div>
                {madlibs.map(({noun1, noun2, adjective, color}) => <Madlib 
                                        noun1={noun1} 
                                        noun2={noun2} 
                                        adjective={adjective} 
                                        color={color}
                                        key={color} />)}
            </div>
        </div>
    )
}

export default MadlibsList;