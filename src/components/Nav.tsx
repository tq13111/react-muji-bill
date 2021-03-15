import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import Icon from './Icon';

const NavWrapper = styled.nav`
  border: 1px solid blue;
  line-height: 24px;

  > ul {
    display: flex;

    > li {
      width: 33.333%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .icon {
        width: 32px;
        height: 32px;
        color: #eee;
      }

    }
  }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name='detail'/>
          <NavLink activeClassName='active' className='item' to='/detail'>明细</NavLink>
        </li>
        <li>
          <Icon name='money'/>
          <NavLink activeClassName='active' className='item' to='/'>记账</NavLink>
        </li>
        <li>
          <Icon name='statistics'/>
          <NavLink activeClassName='active' className='item' to='/statistics'>统计</NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
};
export default Nav;
