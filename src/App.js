import React from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import Competitions from './Competitions'
import Competitors from './Competitors'
import NewCompetitor from './NewCompetitior'


const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Competitions />
        </Route>
        <Route exact path="/competitors/:pokemon/:id">
          <Competitors />
        </Route>
        <Route exact path="/new/:pokemon/:id">
          <NewCompetitor />
        </Route>
        
        <Redirect to="/"></Redirect>
      </Switch>
    </div>
  )
}

export default App
