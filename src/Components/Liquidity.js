import React, { Component } from 'react'
import { AppContext } from '../Context'
import { Chart } from "react-charts";

class Liquidity extends Component {

  chartDatas = (cryptoList) => {

    const list = cryptoList.map(crypto => (
      {
        label: crypto.name,
        data: [[crypto.quotes.USD.volume_24h, crypto.quotes.USD.market_cap]],

      }
    ))
    console.log(JSON.stringify(list))
    return list;
  }

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
            <div className="row">
              <div className="col-xs-12 liquidity-chart">
                <Chart
                  data={this.chartDatas(context.cryptoList)}
                  axes={[
                    { primary: true, type: "linear", position: "bottom" },
                    { type: "linear", position: "left" }
                  ]}
                  series={{ type: 'bubble' }}
                  primaryCursor
                  secondaryCursor
                  tooltip
                />
              </div>
            </div>
          </div>
        )}
      </AppContext.Consumer>
    )
  }
}
export default Liquidity
