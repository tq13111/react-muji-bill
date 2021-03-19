import {useEffect, useState} from 'react';

export const useUpdate = (fn: () => void, deps: any) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(x => x + 1);
  }, [deps]);
  useEffect(() => {
    if (count > 1) {
      fn();
    }
  }, [count]);
};
