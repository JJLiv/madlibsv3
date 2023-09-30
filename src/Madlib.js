import React from "react";


const Madlib = ({noun1, noun2, adjective, color}) =>  {

    return (
        <div>
            <p>{noun1} looks like a/an {adjective} {color} {noun2}!</p>
        </div>
    )
}

export default Madlib;