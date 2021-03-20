import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import Icon from './Icon';

const NavWrapper = styled.nav`
  line-height: 24px;
  background: #555;

  > ul {
    display: flex;

    > li {
      width: 33.333%;
      text-align: center;

      > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;

        > .icon {
          width: 32px;
          height: 32px;
          color: white;
        }

        &.active {
          color: black;

          .icon {
            color: black;
          }
        }
      }
    }
  }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink activeClassName='active' className='item' to='/detail'>
            <Icon name='detail'/>
            明细</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' className='item' to='/money'>
            <Icon name='money'/>
            记账</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' className='item' to='/statistics'>
            <Icon name='statistics'/>
            统计</NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
