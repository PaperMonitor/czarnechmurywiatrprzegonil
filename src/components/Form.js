import React, { Component } from 'react'

// const Form = props =>{
//     return (
//         <div className="container">
//             <input type="text" className="form-control" name="city" autoComplete="off">
//         </div>
//     )
// }

export default class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.loadweather}>
                <input placeholder="Type in city name" type="text" className="form-control" name="city" autoComplete="off"></input><button><i className="fas fa-search"></i></button>
                <div>{this.props.error ? error() : null}</div>
                </form>
            </div>
        )
    }
}

function error(){
    return(
        <div classname="alert" role="alert">Please enter correct city name</div>
    )
}
