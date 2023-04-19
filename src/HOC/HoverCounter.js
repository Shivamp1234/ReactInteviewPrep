import React from 'react'
import HOCComponent from './HOCComponent'

const HoverCounter = (props) => {
  return (
    <>
    <h3>Hover Counter : {props.count}</h3>
    <button onMouseOver={props.updateCount}>Hover</button>
    </>
  )
}

export default HOCComponent(HoverCounter)