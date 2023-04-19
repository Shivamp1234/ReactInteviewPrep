import React, { useState } from 'react'

const StateUplifting = (props) => {
    const [name,setName]=useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name);
        props.getName(name);
    }
  return (
    <>
    <input type="text" name="name" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default StateUplifting