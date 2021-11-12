import React from 'react';

export function useLocalStorage(itemName, initialValue) {
  
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
    
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
    
    const [item, setItem] = React.useState(parsedItem);
  
    const saveItem = (newItem) => {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newItem);
    };
  
    return [
      item,
      saveItem
    ];
  }