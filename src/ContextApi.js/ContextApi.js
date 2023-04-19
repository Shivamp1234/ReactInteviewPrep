import React, { useState } from 'react'
import { createContext } from 'react';

export const contextData=createContext();

const ContextApi = (props) => {
    const [name,setName]=useState("Shivam");

  return (
    <contextData.Provider value={[name,setName]}>
        {props.children}
    </contextData.Provider>
  )
}

export default ContextApi