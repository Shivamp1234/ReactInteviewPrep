import React from 'react'

const ComponentC = ({name}) => {
  return (
    <>
    <h3>This is the data from Parent Component using Props drilling : {name}</h3>
    </>
  )
}

export default ComponentC