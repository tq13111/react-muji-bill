import styled from 'styled-components';
import Icon from '../Icon';
import {expenditureTags, incomeagsTags} from 'constants/TagsList';
import React from 'react';

const TagsWrapper = styled.div`
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-grow: 1;
  background: #FFFFFF;
  height: 400px;
  overflow: auto;
`;
const Content = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-content: flex-start;

`;
const Item = styled.li`
  width: 25%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 900px) {
    height: 25%;
  }

  &.selected {
    color: white;
    background: #ddd;
    border-radius: 16px;
  }

  > .icon {
    height: 40%;
    width: 40%;
    margin-bottom: 6px;
  }
`;
type Props = {
  type: string,
  tag: string,
  setTag: (x: string) => void
}
const Tags: React.FC<Props> = (props) => {

  const tagList = props.type === '-' ? expenditureTags : incomeagsTags;


  function selectTag(name: string) {
    if (name === props.tag) {
      props.setTag('');
    } else {
      props.setTag(name);
    }
  }

  return (
    <TagsWrapper>
      <Content>
        {tagList.map((tag) =>
          <Item key={tag.iconName} onClick={() => selectTag(tag.name)}
                className={props.tag === tag.name ? 'selected' : ''}>
            <Icon name={tag.iconName}/>
            <p>{tag.name}</p>
          </Item>
        )}
      </Content>
    </TagsWrapper>
  );
};
export default Tags;
