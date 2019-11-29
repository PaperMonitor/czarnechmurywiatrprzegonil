import React, { Component } from 'react'
import rainyclouds from '../img/rainy-clouds.png'
import asteroid from '../img/asteroid.png'

export default class Night extends Component {
    render() {
        return (
            <div className="NightContainer">
                <div className="night-content">
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
                    <div id="asteroid">
                        <img src={asteroid} alt=""></img>
                    </div>
                    <div className="rain">
                        <img src={rainyclouds} alt=""></img>
                    </div>
                    <div id="flame-wrapper">
                    <div id="red"></div>
                    <div id="orange"></div>
                    <div id="gold"></div>
                    <div id="white"></div>
                    </div>
                
                    <div id="statue-top-line"></div>
                    <div id="statue-second-line"></div>
                    <div id="statue-column"></div>
                    <div id="statue-bottom-line"></div>
                    <div className="statue-bottom"></div>
                    <div id="explosion"></div>
                    <div className="ground"></div>
                    </div>
                </div>
            </div>
        )
    }
}