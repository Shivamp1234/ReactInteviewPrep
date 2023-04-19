import React, { Component } from 'react'

export class ReactLifecycleMethods extends Component {
    constructor(){
        super();
        this.state={
            count : 0
        }
    }
    componentDidMount(){
        console.log("Component Mounted !!");
    }
    componentDidUpdate(){
        console.log("Component Updated !!");
    }
    componentWillUnmount(){
        console.log("Component Unmounted !!");
    }
    increment = () =>{
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <>
      <h3>React Component LifeCycle : {this.state.count}</h3>
      <button onClick={this.increment}>Update</button>
      </>
    )
  }
}

export default ReactLifecycleMethods