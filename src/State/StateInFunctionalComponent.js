import React, { useState } from 'react'

const StateInFunctionalComponent = () =>{
    const [state,setState]=useState(0);
    return(
        <>
        <h3>State In Functional Component : {state}</h3>
        </>
    )
}

export default StateInFunctionalComponent