import React from 'react'
import Login from './Login';

const And = () => {
    const user =true;
  return (
    <>
    {user && <Login/>}
    </>
  )
}

export default And