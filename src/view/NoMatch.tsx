import React from 'react';
import {Link} from 'react-router-dom';

const Component = () => {
  return (
    <>
      <div>
        当前页面不存在，请检查网址是否正确
      </div>
      <Link to='/'> 返回首页 </Link>
    </>

  );
};
export default Component;


