import React,{Component} from 'react'

class StateInClassComponent extends Component{
    constructor(){
        super();
        this.state={
            count : 0
        }
    }
    render(){
        return(
            <>
            <h3>State in Class Component : {this.state.count}</h3>
            </>
        )
    }
}
export default StateInClassComponent