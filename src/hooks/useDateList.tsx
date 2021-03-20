import {useRecordList} from './useRecordList';
import clone from '../lib/clone';
import dayjs from 'dayjs';

const useDateList = () => {
  const {recordList, removeRecord} = useRecordList();
  let newList = clone(recordList);

  const dayList = (type: string) => {
    newList = newList.filter(item => item.type === type)
      .sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
    if (newList.length === 0) {return [] as dayResult;}
    const result: dayResult = [{title: dayjs(newList[0].createdAt).format('YYYY-M-D'), items: [newList[0]]}];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.createdAt).format('YYYY-M-D'), items: [current]});
      }
    }
    result.forEach((group) => {
      group.total = group.items.reduce((previousValue, item) => previousValue + item.amount, 0);
    });
    return result;
  };
  const typeList = (type: string) => {
    newList = newList.filter(item => item.type === type);
    if (newList.length === 0) {return [];}
    const result: typeResult = [{tag: newList[0].tag, items: [newList[0]]}];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (last.tag === current.tag) {
        last.items.push(current);
      } else {
        result.push({tag: current.tag, items: [current]});
      }
    }
    result.forEach((group) => {
      group.total = group.items.reduce((previousValue, item) => previousValue + item.amount, 0);
    });
    return result;
  };

  function remove(id: string) {
    const result = window.confirm('确认删除');
    if (result) {removeRecord(id);}
  }

  function beautify(string: string) {
    const now = dayjs();
    const date = dayjs(string);
    if (date.isSame(now, 'day')) {
      return '今天';
    } else if (date.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (date.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (date.isSame(now, 'year')) {
      return date.format('M月D日');
    } else {
      return date.format('YYYY年M月D日');
    }
  }

  return {dayList, typeList, remove, beautify};
};
export {useDateList};
