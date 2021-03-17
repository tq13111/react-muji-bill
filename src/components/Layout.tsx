import React, {useState} from 'react';
import Nav from './Nav';
import styled from 'styled-components';

// type Props={
//   children:
// }
const Wrapper = styled.div`
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;
const Height = document.documentElement.clientHeight;
const Layout = (props: any) => {
  const h = useState(Height);
  return (
    <Wrapper style={{height: h + 'px'}}>
      <Main>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};
export default Layout;
