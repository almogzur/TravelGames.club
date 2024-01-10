

// config LS for use in hook 
export const setLocalStorageItem = (key: any, value: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  };
  
export const getLocalStorageItem = (key: any) => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(key);
      return item ? item : null;
    }
    return null;
  };