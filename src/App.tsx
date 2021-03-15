import React from 'react';
import Home from 'view/Home';
import Detail from 'view/Detail';
import Statistics from 'view/Statistics';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import NoMatch from 'view/NoMatch';
import styled from 'styled-components';
import Nav from './components/Nav';

const Wrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  border: 1px solid green;
  flex-grow: 1;
`;

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Redirect from='/' to='/money' exact/>
            <Route path='/money' component={Home}/>
            <Route path='/detail' component={Detail}/>
            <Route path='/statistics' component={Statistics}/>
            <Route path='*' component={NoMatch}/>
          </Switch>
        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
};
export default App;


