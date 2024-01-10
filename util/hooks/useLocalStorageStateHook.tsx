// hooks/useLocalStorageState.js
import { useState, useEffect } from 'react';
import { setLocalStorageItem, getLocalStorageItem } from '../localstoreg' 

const useLocalStorageState = (key: any, initialValue: string) => {

  const [category, setCategory] = useState(initialValue);

  useEffect(() => {
    const storedValue = getLocalStorageItem(key);  
    if (storedValue !== null) {
      setCategory(storedValue);
    }
  }, [key]);

  useEffect(() => {
    setLocalStorageItem(key, category);
  }, [key, category]);

  return [category, setCategory];
};

export default useLocalStorageState;
