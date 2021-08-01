import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './containers/home/Home'

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={data => <Home {...data}></Home>} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
