import React, { Component } from "react";
import Clss from "./clas";

class Compunmount extends Component{
    constructor(){
        super()
        this.state={
            toggle:true
        }

    }

    render(){
        return(
            <>
                <h1>
                    CompoWillUnMount
                </h1>
                {this.state.toggle ? <Clss/> : null}
                <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>delete</button>
            </>

        )
    }
}

export default Compunmount