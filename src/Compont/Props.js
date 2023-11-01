import React, { Component } from "react";

// export default function Props(Propss){
//     return(
//         <>
//         <h1>{Propss.data}</h1>
//         </>
//     )
// }

class Props extends Component{
    render(){
        return(
            <>
            <h1>{this.props.time}</h1>
            </>
        )
    }

}

export default Props