import styled from 'styled-components';
import React from 'react';


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
  note: string,
  setNote: (x: string) => void
}
const MyInput: React.FC<Props> = (props) => {
  return (
    <Label className="input">
      <Title className="name">{props.title}</Title>
      <Input1 placeholder={props.placeholder}
              type="text"
              value={props.note}
              onChange={
                (e) => props.setNote(e.target.value)}/>
      {props.children}
    </Label>
  );
};
export default MyInput;
export {};
