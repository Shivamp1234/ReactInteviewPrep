import React, { useState } from 'react'
import Login from './Login';
import Logout from './Logout';

const Ternary = () => {
    const [user,setUser]=useState(true);
  return (
    <>
    {user===true?<Login/>:<Logout/>}
    <button onClick={()=>setUser(!user)}>Change</button>
    </>
  )
}

export default Ternary