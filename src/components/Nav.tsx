import React from 'react';
import {Link} from 'react-router-dom';
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
          <Link to='/detail'>明细</Link>
        </li>
        <li>
          <Icon name='money'/>
          <Link className='item' to='/'>记账</Link>
        </li>
        <li>
          <Icon name='statistics'/>
          <Link to='/statistics'>统计</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
