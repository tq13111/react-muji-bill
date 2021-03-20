import React, {useState} from 'react';
import dayjs from 'dayjs';
import Layout from 'components/Layout';
import Tags from 'components/Money/Tags';
import Tabs from 'components/Tabs';
import recordTypeList from 'constants/recordTypeList';
import MyInput from 'components/Money/MyInput';
import NumberPad from '../components/Money/NumberPad';
import {useRecordList} from '../hooks/useRecordList';


const Component: React.FC = () => {
  const [type, setType] = useState<'-' | '+'>('-');
  const [tag, setTag] = useState('');
  const [note, setNote] = useState('');
  const [amount, setAmount] = useState(0);
  const [createdAt, setCreatedAt] = useState(dayjs().format('YYYY-MM-DD'));
  const {createRecord} = useRecordList();

  function saveRecord() {
    if (amount === 0 && tag === '') {
      return window.alert('请选择标签并输入金额');
    } else if (amount === 0) {
      return window.alert('未输入金额，请重新输入');
    } else if (tag === '') {
      return window.alert('请选择标签，请重新输入');
    } else if (createdAt > dayjs().format('YYYY-MM-DD')) {
      return window.alert('错误，今天是：' + dayjs().format('M月D日') + '请勿输入之后的日期');
    } else {
      createRecord({type, tag, note, amount, createdAt});
    }
    setTag('');
    setNote('');
  }

  return (
    <Layout>
      <Tabs dataSource={recordTypeList} type={type} setType={setType}/>
      <Tags type={type} tag={tag} setTag={setTag}/>
      <MyInput title='备注' placeholder='在这里输入备注' note={note} setNote={setNote}>
        <input
          style={{width: '130px', marginRight: '16px', paddingLeft: '4px'}}
          className="input2"
          type="date" value={createdAt} onChange={
          (e) => setCreatedAt(e.target.value)}/>
      </MyInput>
      <NumberPad amount={amount} setAmount={setAmount} onSubmit={saveRecord}/>
    </Layout>
  );
};
export default Component;


