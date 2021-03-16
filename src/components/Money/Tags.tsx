import styled from 'styled-components';
import Icon from '../Icon';
import {expenditureTags, incomeagsTags} from 'constants/TagsList';

const TagsWrapper = styled.div`
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-end;
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
  $bg: #d9d9d9;
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
    //background: lighten($mainBackground, 40%);
    border-radius: 10%;
  }

  > .icon {
    height: 40%;
    width: 40%;
    margin-bottom: 6px;
  }
`;
type Props = {
  type: string
}
const Tags = (props: Props) => {

  const tagList = props.type === '-' ? expenditureTags : incomeagsTags;

  return (
    <TagsWrapper>
      <Content>
        {tagList.map((tag) =>
          <Item key={tag.iconName}>
            <Icon name={tag.iconName}/>
            <p>{tag.name}</p>
          </Item>
        )}
      </Content>
    </TagsWrapper>
  );
};
export default Tags;
