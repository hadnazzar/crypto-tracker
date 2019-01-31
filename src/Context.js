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

  limitCurrencies = () => {
    const {cryptoLimit, cryptoList} = this.state;
    const limitNumber = parseInt(cryptoLimit)
    return isNaN(limitNumber) ? cryptoList : cryptoList.slice(1,limitNumber)
  }

  render() {
    return (
      <AppContext.Provider value={{
        cryptoLimit: this.state.cryptoLimit,
        cryptoList: this.limitCurrencies(),
        changeCryptoLimit: (number) => {
          this.setState({ cryptoLimit: number })
        }
      }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
