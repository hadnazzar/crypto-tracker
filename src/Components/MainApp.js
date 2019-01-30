import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Liquidity from './Liquidity'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/liquidity' component={Liquidity}/>
    </Switch>
  </main>
)

export default Main
