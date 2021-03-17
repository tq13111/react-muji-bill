import React, {useState} from 'react';
import dayjs from 'dayjs';
import Layout from 'components/Layout';
import Tags from '../components/Money/Tags';
import Tabs from '../components/Tabs';
import recordTypeList from '../constants/recordTypeList';

// import Notes from '../components/Money/Notes';


const Component = () => {
  const [record, setRecord] = useState({
    tag: '',
    notes: '',
    type: '-',
    amount: 0,
    createdAt: dayjs().format('YYYY-MM-DD')
  });
  return (
    <Layout>
      {/*<Notes title='备注' placeholder='在这里输入备注'>*/}
      {/*  <input*/}
      {/*         style={{width: '130px', marginRight: '16px', paddingLeft: '4px'}}*/}
      {/*         className="input2"*/}
      {/*         type="date">*/}
      {/*</Notes>*/}
      <Tabs dataSource={recordTypeList} type={record.type} setType={setRecord}/>
      <Tags type='-'/>
    </Layout>
  );
};
export default Component;


