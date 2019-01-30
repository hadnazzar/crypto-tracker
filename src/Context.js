import React, {Component} from 'react'

export const AppContext = React.createContext();

export class AppProvider extends Component {
  state={
    cryptoLimit: 100
  }

  render() {
    return (
      <AppContext.Provider value={{
        cryptoLimit: this.state.cryptoLimit,
        changeCryptoLimit: (number) => {
          this.setState({cryptoLimit:number})
        }
      }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
