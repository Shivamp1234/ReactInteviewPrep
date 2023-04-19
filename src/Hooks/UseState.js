import React ,{useState}from 'react'

const UseState = () => {
    const [state,setState]=useState(0);
    const increment = () =>{
        setState(state+1)
    }
    const decrement = () =>{
        setState(state-1)
    }
  return (
    <>
    <h3>UseState Hook : {state}</h3>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default UseState