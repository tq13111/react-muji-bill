import React from 'react';
import Home from 'view/Home';
import Detail from 'view/Detail';
import Statistics from 'view/Statistics';
import {HashRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import NoMatch from 'view/NoMatch';
import styled from 'styled-components';

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
const Nav = styled.nav`
  border: 1px solid blue;

  > ul {
    display: flex;

    > li {
      width: 33.333%;
      text-align: center;
      padding: 16px;
    }
  }
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
        <Nav>
          <ul>
            <li><Link className='item' to='/'>记账</Link>
            </li>
            <li><Link to='/detail'>明细</Link>
            </li>
            <li><Link to='/statistics'>统计</Link>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    </Router>
  );
};
export default App;


