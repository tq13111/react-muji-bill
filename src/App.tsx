import React from 'react'
import Home from 'view/Home'
import Detail from 'view/Detail'
import Statistics from 'view/Statistics'
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import NoMatch from 'view/NoMatch'


const App = () => {
  return (
    <Router>
      <Switch>
        <Redirect from='/' to='/money' exact/>
        <Route path='/money' component={Home}/>
        <Route path='/detail' component={Detail}/>
        <Route path='/statistics' component={Statistics}/>
        <Route path='*' component={NoMatch}/>
      </Switch>

    </Router>
  )
}
export default App


