import React, { Component } from 'react'
import PropsInClassComponent from './PropsInClassComponent';

export class PropsInClassPasser extends Component {
    constructor(){
        super();
        this.state={
            count : 0
        }
    }
  render() {
    return (
      <>
      <PropsInClassComponent value={this.state.count}/>
      </>
    )
  }
}

export default PropsInClassPasser