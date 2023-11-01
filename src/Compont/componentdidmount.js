import React, { Component } from "react";
class CompoDidMout extends Component{
    constructor()
    {
        super()
        this.state={
            data:null
        }
        console.warn("constructor")
    }


    componentDidMount(){
        this.setState({data:"updatae"})
        console.warn("componentDidMount")
        
    }


    render(){
        console.warn("render")
        return(
            <>
                <h1>Component life Cycle</h1>
            </>
        )
    }
}

export default CompoDidMout