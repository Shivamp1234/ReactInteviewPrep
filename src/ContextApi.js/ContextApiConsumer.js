import React, { useContext } from 'react'
import { contextData } from './ContextApi';


const ContextApiConsumer = () => {
    const [data]=useContext(contextData);
    console.log(data);
  return (
    <>
    <h3>This data is from Context Api : {data}</h3>
    </>
  )
}

export default ContextApiConsumer