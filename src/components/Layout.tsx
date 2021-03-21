import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';


const Wrapper = styled.div`
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: rgb(0 0 0 / 30%) 0 0 2px;

  @media (min-height: 900px) {
    height: 900px !important;
    margin-top: 48px;

  }
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;

`;
let height = document.documentElement.clientHeight;
window.onload = () => {
  if (document.documentElement.clientHeight > 820) {
    window.alert('为保证预览效果，请使用手机预览');
  }
};
const Layout: React.FC = (props) => {
  return (
    <Wrapper style={{height: height + 'px'}}>
      <Main>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};
export default Layout;
