import React from 'react'
import PropsInFunctionalComponent from './PropsInFunctionalComponent'

const PropsInFunctionalPasser = (props) => {
    const name="Shivam";
  return (
    <>
    <PropsInFunctionalComponent name={name}/>
    </>
  )
}

export default PropsInFunctionalPasser