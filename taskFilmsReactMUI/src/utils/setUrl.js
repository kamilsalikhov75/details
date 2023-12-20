import { useSelector } from "react-redux";
import { order, type } from "./library";

export function setUrlForCollection(selected, fetchURLs, page) {
    for (let i in fetchURLs) {
        if (selected == i) {
            let str = fetchURLs[i];
            let link = str.replace(/.$/, page);
            // console.log(link)
            return link
        }
    }

}

export function setUrlForFilter(selected, fetchURLs) {
    for (let i in fetchURLs) {
        if (selected == i) {
            let str = fetchURLs[i];
            // console.log(str)
            return str
        }
    }
}


export function returnedURL(page) {
    let fetchURL;
    let sortValue;
    let typeValue;

    const selectedSortSelector = useSelector(state => state.filterItems.currentSelectedSort);
    const selectedTypeSelector = useSelector(state => state.filterItems.currentSelectedType);

    if ((selectedSortSelector && selectedTypeSelector) !== '') {
        sortValue = setUrlForFilter(selectedSortSelector, order);
        typeValue = setUrlForFilter(selectedTypeSelector, type);
    }

    const titleItem = useSelector(state => state.filterItems.searchItem)
    
    if ((sortValue && typeValue) !== undefined) {
        fetchURL = `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=${sortValue}&type=${typeValue}&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&keyword=${titleItem}&page=${page}`
    }

    return fetchURL;
}