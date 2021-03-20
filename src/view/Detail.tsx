import Icon from 'components/Icon';
import React, {useState} from 'react';
import Layout from '../components/Layout';
import recordTypeList from '../constants/recordTypeList';
import {useDateList} from '../hooks/useDateList';
import styled from 'styled-components';
import MyTabs from '../components/MyTabs';

const Content = styled.li`
  .title {
    padding: 8px 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .record {
    background: #eee;
    border-bottom: 1px solid #ccc;
    color: black;
    position: relative;
    padding: 8px 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #aaa;
    font-size: 14px;
    overflow: auto;
    max-width: 160px;
  }

  .amount {
    overflow: auto;
    max-width: 52px;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .icon {
    width: 1.5em;
    height: 1.5em;
    background: rgba(255, 0, 0, 0.1);
    border-radius: 50%;
    margin-right: 16px;
    position: absolute;
    right: 65px
  }
`;
const NoResult = styled.div`
  text-align: center;
  padding: 16px;
`;
const Component = () => {
  const [type, setType] = useState('-');
  const {dayList, beautify, remove} = useDateList();

  return (
    <Layout>
      <MyTabs dataSource={recordTypeList} type={type} setType={setType}/>
      <ul>
        {dayList(type).length > 0 ? dayList(type).map((group, index) =>
            <Content key={index}>
              <h3 className="title">
                {beautify(group.title)}
                <span>￥{group.total}</span>
              </h3>
              <ul>
                {group.items.map((item, index) =>
                  <li className="record" key={index}>
                    <span>{item.tag}</span>
                    <span className="notes">{item.note}</span>
                    <Icon name='remove2'
                          onClick={() => remove(item.id as string)}/>
                    <span className="amount">￥{item.amount}</span>
                  </li>
                )}
              </ul>
            </Content>
          ) :
          <NoResult>目前没有相关记录</NoResult>}
      </ul>
    </Layout>
  );
};
export default Component;


