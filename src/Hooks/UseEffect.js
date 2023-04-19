import React, { useEffect,useState } from 'react'

const UseEffect = () => {
    const [state,setState]=useState(0);
    useEffect(()=>{
        console.log("Component Mounted!");
        return()=>{
            console.log("Cleanup here!")
        }
    },[state])
    const updateState = () =>{
        setState(state+1);
    }
  return (
    <>
    <h3>UseEffect Hook : {state}</h3>
    <button onClick={updateState}>Update</button>
    </>
  )
}

export default UseEffect