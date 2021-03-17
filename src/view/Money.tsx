import React, {useState} from 'react';
import dayjs from 'dayjs';
import Layout from 'components/Layout';
import Tags from '../components/Money/Tags';
import Tabs from '../components/Tabs';
import recordTypeList from '../constants/recordTypeList';

// import Notes from '../components/Money/Notes';


const Component = () => {
  const [type, setType] = useState('-');
  const [tag, setTag] = useState('');
  const [notes, setNotes] = useState('-');
  const [amount, setAmount] = useState(0);
  const createAt = useState(dayjs().format('YYYY-MM-DD'))[0];

  return (
    <Layout>
      {/*<Notes title='备注' placeholder='在这里输入备注'>*/}
      {/*  <input*/}
      {/*         style={{width: '130px', marginRight: '16px', paddingLeft: '4px'}}*/}
      {/*         className="input2"*/}
      {/*         type="date">*/}
      {/*</Notes>*/}
      <Tabs dataSource={recordTypeList} type={type} setType={setType}/>
      <Tags type={type}/>
    </Layout>
  );
};
export default Component;


