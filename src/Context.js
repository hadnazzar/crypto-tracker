import React, { Component } from 'react'

export const AppContext = React.createContext();

export class AppProvider extends Component {
  state = {
    cryptoLimit: 100,
    cryptoList: []
  }

  componentDidMount() {
    fetch('https://api.coinmarketcap.com/v2/ticker/', {
      method: 'get',
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        const responseArr = Object.values(response.data)
          .sort(function (a, b) { return a.rank - b.rank });
        this.setState({ cryptoList: responseArr })
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <AppContext.Provider value={{
        cryptoLimit: this.state.cryptoLimit,
        cryptoList: this.state.cryptoList,
        changeCryptoLimit: (number) => {
          this.setState({ cryptoLimit: number })
        }
      }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
