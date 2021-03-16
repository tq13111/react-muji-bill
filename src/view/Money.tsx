import React from 'react';
import Layout from 'components/Layout';
import Tags from '../components/Money/Tags';
// import Notes from '../components/Money/Notes';

const Component = () => {
  return (
    <Layout>
      {/*<Notes title='备注' placeholder='在这里输入备注'>*/}
      {/*  <input*/}
      {/*         style={{width: '130px', marginRight: '16px', paddingLeft: '4px'}}*/}
      {/*         className="input2"*/}
      {/*         type="date">*/}
      {/*</Notes>*/}
      <Tags type='-'/>
    </Layout>
  );
};
export default Component;


