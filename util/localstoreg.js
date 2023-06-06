

// config LS for use in hook 
export const setLocalStorageItem = (key, value) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  };
  
export const getLocalStorageItem = (key) => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(key);
      return item ? item : null;
    }
    return null;
  };