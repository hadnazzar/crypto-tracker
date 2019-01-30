import React, { Component } from 'react'
import { AppContext } from '../Context';

class Home extends Component {

  convertCurrency = (price) => (
    '$' + price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  )

  renderCryptoRows = (limit, cryptoList=[]) => {
    const limitNumber = parseInt(limit)
    const filteredCryptoList = isNaN(limitNumber) ? cryptoList : cryptoList.slice(0,limitNumber)
    return filteredCryptoList.map(crypto => (
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
      <AppContext.Consumer>
        {(context) => (
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="float-left">Home</h1>
                <div className="float-right mt-2">
                  <select onChange={(e) => context.changeCryptoLimit(e.target.value)} value={context.cryptoLimit}>
                    <option value="100">100</option>
                    <option value="20">20</option>
                    <option value="10">10</option>
                    <option value="all">All</option>
                  </select>
                </div>
              </div>
              <table className="table">
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
                  {this.renderCryptoRows(context.cryptoLimit, context.cryptoList)}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </AppContext.Consumer>

    )
  }
}

export default Home
