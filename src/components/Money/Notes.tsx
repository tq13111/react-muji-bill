import styled from 'styled-components';


const Label = styled.label`

  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;

  > .input2 {
    flex-shrink: 0;
    border: none;
    background: white;
  }
`;
const Title = styled.span`

  padding-right: 16px;
  white-space: nowrap;
  flex: 0 0 auto;

`;
const Input1 = styled.input`

  height: 48px;
  border: none;
  padding-right: 16px;
  margin-right: auto;
  overflow: hidden;
  flex-grow: 1;
`;

type Props = {
  title: string,
  placeholder: string,
  children: HTMLInputElement
}
const Notes = (props: Props) => {
  return (
    <Label className="input">
      <Title className="name">{props.title}</Title>
      <Input1 placeholder={props.placeholder}
              type="text"/>
      {props.children}
    </Label>
  );
};
export default Notes;
export {};
