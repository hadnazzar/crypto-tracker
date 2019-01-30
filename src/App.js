import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header'
import MainApp from './Components/MainApp'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <MainApp />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
