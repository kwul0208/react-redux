import React from "react";

function Counter({add}) {

    return(
        <>
        <button type="button" onClick={()=> add() }>add</button>
        <button type="button">min</button>
        </>
    )
}

export default Counter;