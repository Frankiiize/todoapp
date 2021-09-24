import React from "react";

function useLocalStorage (itemName, inicialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setloading] = React.useState(true);
  const [item, setItem] = React.useState(inicialValue);
  let storagedTodoParsed = JSON.parse(localStorage.getItem('TODOS_V1'));
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(inicialValue));
          parsedItem = inicialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setloading(false)
      } catch(error) {
        setError(true);
      }
    },1000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  }

  return { 
   item,
   setItem,
   saveItem,
   loading,
   error,
   storagedTodoParsed,
  }
  
}

export { useLocalStorage };
