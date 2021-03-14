import React from 'react';
import {Link} from 'react-router-dom';

const Component = () => {
  return (
    <>
      <Link to='/'>记账</Link>
      <Link to='/detail'>明细</Link>
      <Link to='/statistics'>统计</Link>
    </>
  );
};
export default Component;
