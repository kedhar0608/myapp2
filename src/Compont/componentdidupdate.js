import React, { Component } from "react";
class CompDidUpdate extends Component{
    constructor(){
        super()
        this.state={
            data:null
        }
    }
    componentDidUpdate(){
        alert("hello")
    }
    render(){
        return(
            <>
                <h1> componentDidUpdate</h1>
                <button onClick={()=>{this.setState({data:"hello"})}} >Click me</button>
            </>
        )
    }

}

export default CompDidUpdate