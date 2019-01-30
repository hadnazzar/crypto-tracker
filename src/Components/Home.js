import React, { Component } from 'react'
import {AppContext} from '../Context';

class Home extends Component {
  state = {
    cryptoList: [],
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

  dropdownChange = (e) => {
    this.setState({limit:e.target.value})
  }

  convertCurrency = (price) => (
    '$' + price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  )

  renderCryptoRows = () => {
    // const filterNumber = parseInt(this.state.limit)
    // const filteredCryptoList = this.state.cryptoList.slice(0,)
    return this.state.cryptoList.map(crypto => (
      <tr key={crypto.id}>
        <th scope="row">{crypto.rank}</th>
        <td>{crypto.name}</td>
        <td>{crypto.symbol}</td>
        <td>{crypto.quotes.USD.percent_change_24h}</td>
        <td>{this.convertCurrency(crypto.quotes.USD.market_cap)}</td>
        <td>{this.convertCurrency(crypto.quotes.USD.volume_24h)}</td>
      </tr>
    ))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="float-left">Home</h1>
            <div className="float-right mt-2">
            <AppContext.Consumer>
              {(context) => (
                <select onChange={(e) => context.changeCryptoLimit(e.target.value)} value={this.state.value}>
                <option value="100">100</option>
                <option value="20">20</option>
                <option value="10">10</option>
                <option value="all">All</option>
              </select>
              )}
              </AppContext.Consumer>
            </div>
          </div>
          <table className="table table-responsive ">
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Price Change (24h)</th>
                <th scope="col">Market Cap</th>
                <th scope="col">Volume (24h)</th>
              </tr>
            </thead>
            <tbody>
              {this.renderCryptoRows()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Home
