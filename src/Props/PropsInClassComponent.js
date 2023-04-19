import React, { Component } from 'react'

export class PropsInClassComponent extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <h3>Props In Class Component : {this.props.value}</h3>
    )
  }
}

export default PropsInClassComponent