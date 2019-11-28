import React, { Component } from 'react'
import mountains from '../img/mountains.png'
import moon from '../img/moon.png'

export default class RainyWeather extends Component {
    render() {
        return (
            <div className="RainyContainer">
                <div className="rainy-content">
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
                    <div className="mountains">
                        <img src={mountains}></img>
                    </div>
                    <div className="moon">
                        <img src={moon}></img>
                    </div>
                    
                    </div>
                </div>
            </div>
        )
    }
}
