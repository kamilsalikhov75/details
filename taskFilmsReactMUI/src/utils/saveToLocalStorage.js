import { useState, useEffect } from "react";


export const toggleFavourite = (item, favourites, setFavourites) => {
  if(favourites.includes(item)){
      setFavourites(favourites.filter((newItem) => newItem !== item))
      return
  }
  setFavourites([...favourites, item])
  
}

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;