import React, { Component } from "react";

class States extends Component{
    state={
        name:"world"
    }

    render(){
        return(
        <>
        <h1>{this.state.name}</h1>
        <button onClick={()=>{this.setState({name: "hello"})}}>update</button>
        </>
        )
    }
}

export default States