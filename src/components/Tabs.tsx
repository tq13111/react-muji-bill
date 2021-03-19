import styled from 'styled-components';
import React from 'react';

const TabsWrapper = styled.ul`
  display: flex;
  text-align: center;
  font-size: 18px;
  background: black;
  color: #eee;

  > li {
    width: 50%;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected {

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #eee;
      }
    }
  }
`;
type DataSource = {
  value: string,
  text: string
}
type  Props = {
  type: string,
  setType: Function,
  dataSource: DataSource[]
}
const Tabs: React.FC<Props> = (props) => {
  return (
    <TabsWrapper>
      {props.dataSource.map((item) =>
        props.type === item.value ?
          <li key={item.value} onClick={() => props.setType(item.value)}
              className='selected'>{item.text}
          </li> :
          <li key={item.value} onClick={() => props.setType(item.value)}>{item.text}
          </li>
      )}
    </TabsWrapper>
  );
};
export default Tabs;
