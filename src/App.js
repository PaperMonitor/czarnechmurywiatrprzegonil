import React from 'react';
import logo from './logo.svg';
import './App.css';
import BeautifulWeather from './components/BeautifulWeather'
import RainyWeather from './components/RainyWeather'
import Night from './components/Night'

function App() {
  return (
    <div className="App">
      <h1>Czarne chmury wiatr przegonił</h1>
      <BeautifulWeather />
      <RainyWeather />
      <Night />
    </div>
  );
}

export default App;
