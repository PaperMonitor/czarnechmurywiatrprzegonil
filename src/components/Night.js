import React, { Component } from 'react'

export default class Night extends Component {
    render() {
        return (
            <div className="BeautyContainer">
                <div className="beauty-content">
                    <div className="nav">
                    <i className="fas fa-angle-left"></i>
                    <i className="fas fa-cog"></i>
                    </div>
                    <div className="api-content">
        <p className="city">City: {this.props.city}</p>
                        <p className="weather">Weather: {this.props.weather}</p>
                        <h3 className="degrees">{this.props.temp}<span>&#176;</span></h3>
                    </div>
                    <div className="objects">
                    <div className="clouds"></div>
                    <div className="boat">
                    </div>
                    <div className="sea">
                    
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}