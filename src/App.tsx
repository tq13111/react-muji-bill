import React from 'react'
import Money from 'view/Money'
import Detail from 'view/Detail'
import Statistics from 'view/Statistics'
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import NoMatch from 'view/NoMatch'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;

`
const App = () => {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Redirect from='/' to='/money' exact/>
          <Route path='/money' component={Money}/>
          <Route path='/detail' component={Detail}/>
          <Route path='/statistics' component={Statistics}/>
          <Route path='*' component={NoMatch}/>
        </Switch>
      </Router>
    </Wrapper>
  )
}
export default App


