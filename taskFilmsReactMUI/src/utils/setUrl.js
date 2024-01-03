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


export function returnedURL(sortValue, typeValue, titleItem, currentPage, yearFrom, yearTo, genresString) {
    let fetchURL, titleTrim;
    console.log(genresString)
    titleTrim = titleItem.replaceAll(' ', '-');
    console.log(titleTrim);
    if ((sortValue && typeValue && genresString) !== undefined){
        fetchURL = `https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=${genresString[0]}&order=${sortValue}&type=${typeValue}&ratingFrom=0&ratingTo=10&yearFrom=${yearFrom}&yearTo=${yearTo}&keyword=${titleTrim}&page=${currentPage}`
    }
    if (((sortValue && typeValue) !== undefined) && genresString === undefined){
        fetchURL = `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=${sortValue}&type=${typeValue}&ratingFrom=0&ratingTo=10&yearFrom=${yearFrom}&yearTo=${yearTo}&keyword=${titleItem}&page=${currentPage}`
    }
    return fetchURL;

}