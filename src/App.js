import React, { Suspense } from 'react'
import ClassComponent from './ClassAndFunctionalComponent/ClassComponent'
import { FunctionalComponent } from './ClassAndFunctionalComponent/FunctionalComponent'
import FunctionalComponentUsingArrowFunction from './ClassAndFunctionalComponent/FunctionalComponent'
import StateInClassComponent from './State/StateInClassComponent'
import StateInFunctionalComponent from './State/StateInFunctionalComponent'
import IfElse from './ConditionalRendering/IfElse'
import Ternary from './ConditionalRendering/Ternary'
import And from './ConditionalRendering/And'
import Fetch from './ApiCalling.js/Fetch'
import Axios from './ApiCalling.js/Axios'
import ComponentA from './PropsDrilling/ComponentA'
import StateUplifting from './StateUplifting.js/StateUplifting'
import ContextApiConsumer from './ContextApi.js/ContextApiConsumer'
import ControlledComponent from './ControlledAndUncontrolledComponents.js/ControlledComponent'
import UncontrolledComponent from './ControlledAndUncontrolledComponents.js/UncontrolledComponent'
import RoutesFile from './Routing/RoutesFile'
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import UseReducer from './Hooks/UseReducer'
import UseMemo from './Hooks/UseMemo'
import ClickCounter from './HOC/ClickCounter'
import HoverCounter from './HOC/HoverCounter'
import PureComponent from './PureComponent/PureComponent'
import StatefulComponents from './StatefulAndStatelessComponents/StatefulComponents'
import StatelessComponent from './StatefulAndStatelessComponents/StatelessComponent'
// import LazyLoading from './LazyLoading/LazyLoading'

const App = () => {
  // const LazyComp = React.lazy(()=>import("./LazyLoading/LazyLoading.js"));
  const name = "Shivam";
  const getData = (data) =>{
    console.log("This Data is from Child Component Using State Uplifting :",data);
  }
  return (
    <>
    <ClassComponent/>
    <FunctionalComponent/>
    <FunctionalComponentUsingArrowFunction/>
    <StateInClassComponent/>
    <StateInFunctionalComponent/>
    {/* <CounterInFunctionalPropsPasser/>
    <ReactLifecycleMethods/>
    <PropsInClassPasser/>
    <PropsInFunctionalPasser/> */}
    {/* <Suspense fallback={<div><h1>Loading ...</h1></div>}>
      <LazyComp/>
    </Suspense> */}
    <StatefulComponents/>
    <StatelessComponent name={name}/>
    <IfElse/>
    <Ternary/>
    <And/>
    <Fetch/>
    <Axios/>
    <ComponentA name={name}/>
    <StateUplifting getName={getData}/>
    <ContextApiConsumer/>
    <ControlledComponent/>
    <UncontrolledComponent/>
    <RoutesFile/>
    <UseState/>
    <UseEffect/>
    <UseReducer/>
    <UseMemo/>
    <ClickCounter/>
    <HoverCounter/>
    <PureComponent value={name}/>
    </>

  )
}

export default App
