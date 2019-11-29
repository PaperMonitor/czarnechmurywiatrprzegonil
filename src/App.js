import React from 'react';
import logo from './logo.svg';
import './App.css';
import BeautifulWeather from './components/BeautifulWeather'
import RainyWeather from './components/RainyWeather'
import Night from './components/Night'
import Form from './components/Form'

//api call api.openweathermap.org/data/2.5/weather?q=London,uk
const APIKey = "3e959ffbfde12c0eadf77551db611580"

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      city: undefined,
      weather: undefined,
      temp: undefined,
      error: false
    };
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if(city){
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${APIKey}`)
      const response = await api_call.json();
  
      this.setState({
        city: `${response.name}`,
        weather: response.weather[0].description,
        temp: Math.round(response.main.temp)
      })
    }else{
      this.setState({error:true });
    }
  }

  render(){
    return(
      <div className="App">
        <h1>Czarne Chmury Wiatr Przegonił</h1>
        <div className="wrapper">
        <RainyWeather />
        <BeautifulWeather city={this.state.city} weather={this.state.weather} temp={this.state.temp} theme={"night"}/>
        <Night />
        </div>
        <Form loadweather={this.getWeather} error={this.state.error}/>
      </div>
    )
  }
}


export default App;