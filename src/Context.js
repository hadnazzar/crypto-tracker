import React, {Component} from 'react'

export const AppContext = React.createContext();

export class AppProvider extends Component {
  state={
    cryptoLimit: 100,
    changeCryptoLimit: (number) => {
      this.setState({cryptoLimit:number})
    }
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
