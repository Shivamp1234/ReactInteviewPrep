import React from 'react'
import HOCComponent from './HOCComponent'

const ClickCounter = (props) => {
  return (
    <>
    <h3>ClickCounter : {props.count}</h3>
    <button onClick={props.updateCount}>Click!</button>
    </>
  )
}

export default HOCComponent(ClickCounter)