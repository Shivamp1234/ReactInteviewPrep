import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [data,setData]=useState("");
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((json)=>setData(json))
        .catch((error)=>console.log("Error",error))
    },[])
  return (
    <>
    {
        data && data.map((item)=>{
            return(
            <h3>{item.name}</h3>
            )
        })
    }
    </>
  )
}

export default Fetch