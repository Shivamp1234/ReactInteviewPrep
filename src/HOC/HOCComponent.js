import React,{useState} from 'react'

const HOCComponent = (WrappedComponent) => {
    function HocFunction(){
    const [state,setState]=useState(0);
    const handleClick = () =>{
        setState(state+1)
    }
  return (
    <>
    <WrappedComponent count={state} updateCount={handleClick}/>
    </>
  )
  }
  return HocFunction
}

export default HOCComponent