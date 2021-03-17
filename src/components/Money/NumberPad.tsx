import Icon from '../Icon';
import styled from 'styled-components';
import {useState} from 'react';

const Output = styled.div`
  font-size: 26px;
  font-family: Consolas, monospace;
  padding: 0 16px;
  text-align: right;
  height: 48px;
  line-height: 48px;
  background: white;

`;
const Buttons = styled.div`

  > button {
    width: 25%;
    height: 48px;
    float: left;
    border: none;
    color: #eee;

    @media (min-height: 900px) {
      height: 80px;
    }

    &.ok {
      height: 96px;
      float: right;
      @media (min-height: 900px) {
        height: 80px *2;
      }
    }

    &:nth-child(1) {
      //background: lighten(red, 4*6%)
      background: #ccc;
    }

    &:nth-child(2), &:nth-child(5) {
      //background: lighten(red, 4*5%);
      background: #ccc;
    }

    &:nth-child(3), &:nth-child(6), &:nth-child(9) {
      //background: lighten(red, 4*4%);
      background: #ccc;
    }

    &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13) {
      //background: lighten(red, 4*3%);
      background: #ccc;
    }

    &:nth-child(8), &:nth-child(11), &:nth-child(14) {
      //background: lighten(red, 4*2%);
      background: #ccc;
    }

    &:nth-child(15) {
      //background: lighten(red, 4*1%);
      background: #ccc;
    }

    &:nth-child(12) {
      //background: red;
      background: #ccc;
    }
  }
`;
const Remove = styled(Icon)`
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.5em;
  color: #eee;
`;
const Clear = styled(Icon)`
  width: 2em;
  height: 2em;
  vertical-align: -0.5em;
`;
const Add = styled(Icon)`
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.5em;
`;
const NumberPad = () => {
  const [output, setOutput] = useState('0');

  function calculation(e: any) {
    const button = (e.currentTarget as HTMLButtonElement);
    const input = button.textContent || button.value;
    if (output.length >= 16) {return;}
    if (output === '0') {
      if (input === '0') {return;} else if ('123456789'.indexOf(input) !== -1) {
        setOutput(input);
        return;
      }
    }
    if (input === '.' && output.match(/\+[0-9]+\.[0-9]+/)) {return;}
    if (input === '.' && output.match(/\./) && !output.match(/\+/)) {return;}
    if (output.indexOf('+') !== -1 && input === '+' && output.length >= 3) {
      add();
    }
    setOutput(output + input);
    setOutput(output.replace(/\+0+/, '+0').replace(/\.\+/, '+').replace(/\.+/g, '.').replace(/\++/, '+').replace(/\+\./, '+0.'));

  }

  function add() {
    const array = output.split('+');
    if (array[1] !== '') {
      const number = (parseFloat(array[0]) * 100 + parseFloat(array[1]) * 100) / 100;
      setOutput(number.toString());
      if (output.length >= 16) {
        setOutput('错误');
        return;
      }
    }
  }

  function remove() {

  }

  function clear() {

  }

  function ok() {

  }

  return (
    <div>
      <Output>{output}</Output>
      <Buttons>
        <button onClick={calculation}>1</button>
        <button onClick={calculation}>2</button>
        <button onClick={calculation}>3</button>
        <button onClick={remove}>
          <Remove name='remove'/>
        </button>
        <button onClick={calculation}>4</button>
        <button onClick={calculation}>5</button>
        <button onClick={calculation}>6</button>
        <button onClick={clear}>
          <Clear name="clear"/>
        </button>
        <button onClick={calculation}>7</button>
        <button onClick={calculation}>8</button>
        <button onClick={calculation}>9</button>
        <button className="ok" onClick={ok}>OK</button>
        <button className="zero" onClick={calculation}>0</button>
        <button value="." onClick={calculation}>
          <Icon name="point"/>
        </button>
        <button value="+" onClick={calculation}>
          <Add name="add"/>
        </button>
      </Buttons>
    </div>
  );
};
export default NumberPad;
