export function saveIdToLocalStorage(id){
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    if (!favourites.includes(id)){
        favourites.push(id);
    }
    localStorage.setItem('favourites', JSON.stringify(favourites));
}

export function removeIdFromLocalStorage(id){
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    const index = favourites.indexOf(id);
    if(index !== -1){
        favourites.splice(index, 1);
    }
    localStorage.setItem('favourites', JSON.stringify(favourites));
}