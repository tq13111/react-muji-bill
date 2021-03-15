import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  border: 1px solid blue;
  line-height: 24px;

  > ul {
    display: flex;

    > li {
      width: 33.333%;
      text-align: center;
      padding: 16px;
    }
  }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li><Link className='item' to='/'>记账</Link>
        </li>
        <li><Link to='/detail'>明细</Link>
        </li>
        <li><Link to='/statistics'>统计</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
