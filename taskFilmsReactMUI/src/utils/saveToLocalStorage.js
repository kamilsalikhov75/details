import { useState, useEffect } from "react";

// export function saveIdToLocalStorage(id) {
//   const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
//   if (!favourites.includes(id)) {
//     favourites.push(id);
//   }
//   localStorage.setItem('favourites', JSON.stringify(favourites));
// }

// export function removeIdFromLocalStorage(id) {
//   const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
//   const index = favourites.indexOf(id);
//   if (index !== -1) {
//     favourites.splice(index, 1);
//   }
//   localStorage.setItem('favourites', JSON.stringify(favourites));
// }

export function toggle(id, setFavourite) {
  const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
  if (!favourites.includes(id)) {
    favourites.push(id);
    setFavourite(true)
  } else {
    const index = favourites.indexOf(id);
    if (index !== -1) {
      favourites.splice(index, 1);
      setFavourite(false)
    }
  }
  localStorage.setItem('favourites', JSON.stringify(favourites));
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