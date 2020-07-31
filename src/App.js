import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Error from './components/pages/Error'
import Navbar from './components/layout/Navbar'
import Stockholm from './components/pages/Stockholm'
import Uppsala from './components/pages/Uppsala'
import Windows from './components/pages/ourServices/Windows'
import Balcon from './components/pages/ourServices/Balcon'
import Trash from './components/pages/ourServices/Trash'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about/'>
          <About />
        </Route>
        <Route exact path='/stockholm/'>
          <Stockholm />
        </Route>
        <Route exact path='/uppsala/'>
          <Uppsala />
        </Route>
        <Windows exact path='/windows/'>
          <Uppsala />
        </Windows>
        <Route exact path='/trash/'>
          <Trash />
        </Route>
        <Route exact path='/balcon/'>
          <Balcon />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
