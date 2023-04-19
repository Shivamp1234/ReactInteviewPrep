import React, { useRef } from 'react'

const UncontrolledComponent = () => {
    const nameRef=useRef();
    const emailRef=useRef();
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Name is :",nameRef.current.value);
        console.log("Email is :",emailRef.current.value);
    }
  return (
    <>
    <h3>Controlled Component : </h3>
    <input type="text" name="name" ref={nameRef}/>
    <input type="email" name="email" ref={emailRef}/>
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default UncontrolledComponent