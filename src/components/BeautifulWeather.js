import React, { Component } from 'react'
import boat from '../img/boat.png'

export default class BeautifulWeather extends Component {
    render() {
        return (
            <div className="BeautyContainer">
                <div className="beauty-content">
                    <div className="nav">
                    <i class="fas fa-angle-left"></i>
                    <i class="fas fa-cog"></i>
                    </div>
                    <div className="api-content">
                        <p className="city">Miasto</p>
                        <p className="weather">Pogoda</p>
                        <h3 className="degrees">15</h3>
                    </div>
                    <div className="objects">
                    <div className="clouds"></div>
                    <div className="boat">
                    </div>
                    <div className="sea">
                    <img src={boat}></img>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
