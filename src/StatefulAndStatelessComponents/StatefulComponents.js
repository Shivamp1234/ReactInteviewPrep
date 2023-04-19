import React, { Component } from 'react'

export class StatefulComponents extends Component {
    constructor(){
        super();
        this.state={
            name:"Shivam"
        }
    }
    updateName = () =>{
        this.setState({name:"Janvi"})
    }
  render() {
    return (
      <>
      <h3>Stateful Components : {this.state.name}</h3>
      <button onClick={this.updateName}>Update Name</button>
      </>
    )
  }
}

export default StatefulComponents