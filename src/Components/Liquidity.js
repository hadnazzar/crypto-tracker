import React, { Component } from 'react'
import { AppContext } from '../Context'

class Liquidity extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="float-left">Liquidity</h1>
                <div className="float-right mt-2">
                  <select onChange={(e) => context.changeCryptoLimit(e.target.value)} value={context.cryptoLimit}>
                    <option value="100">100</option>
                    <option value="20">20</option>
                    <option value="10">10</option>
                    <option value="all">All</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </AppContext.Consumer>
    )
  }
}

export default Liquidity
