import React,{Component} from "react"

class Clss extends Component{
    componentWillUnmount(){
        alert("is deleteing")
    }
    render(){
        return(
            <div>
                <h1>hello world</h1>
            </div>
        )
    }
}

export default Clss