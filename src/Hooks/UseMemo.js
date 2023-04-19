import React from 'react'
import { useState ,useMemo} from 'react';

const UseMemo = () => {
    const [state1,setState1]=useState(0);
    const expensiveFunction = useMemo(function updateState(){
        console.log("****************************");
        return state1+1;
    },[state1])
  return (
    <>
    <h3>UseMemo Hook : {state1} </h3>
    <button onClick={()=>setState1(state1+1)}>Increment</button>
    </>
  )
}

export default UseMemo