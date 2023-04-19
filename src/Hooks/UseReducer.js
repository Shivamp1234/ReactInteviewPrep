import React from 'react'
import { useReducer } from 'react';

const UseReducer = () => {
    const initialState=0;
    const reducer = (state,actions) =>{
        switch(actions){
            case "Increment" : return state+1
            case "Decrement" : return state-1
            default :return state
        }
    }
    const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <>
    <h3>UseReducer Hook : {state}</h3>
    <button onClick={()=>dispatch("Increment")}>Increment</button>
    <button onClick={()=>dispatch("Decrement")}>Decrement</button>
    </>
  )
}

export default UseReducer