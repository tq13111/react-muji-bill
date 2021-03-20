import createId from '../lib/createId';
import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';
import clone from 'lib/clone';

export const useRecordList = () => {
  const [recordList, setRecordList] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecordList(JSON.parse(window.localStorage.getItem('recordList') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('recordList', JSON.stringify(recordList));
  }, recordList);

  function createRecord(record: RecordItem) {
    const id = createId().toString();
    setRecordList([...recordList, {id, ...record,}]);
    window.alert('记账成功');
  }

  function removeRecord(id: string) {
    let index = -1;
    for (let i = 0; i < recordList.length; i++) {
      if (recordList[i].id === id) {
        index = i;
        break;
      }
    }
    if (index >= 0) {
      const newValue = clone(recordList);
      newValue.splice(index, 1);
      setRecordList(newValue);
    } else {
      window.alert('删除失败');
    }
  }

  return {createRecord, removeRecord, recordList, setRecordList};

};

