import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header'
import MainApp from './Components/MainApp'
import { AppProvider } from './Context'

class App extends Component {
  render() {
    return (
      <AppProvider>
        <BrowserRouter>
          <div>
            <Header />
            <MainApp />
          </div>
        </BrowserRouter>
      </AppProvider> 
    );
  }
}

export default App;
