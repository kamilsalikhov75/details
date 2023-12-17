export function setUrlForCollection(selected, fetchURLs, page) {
    for (let i in fetchURLs) {
        if (selected == i){
            let str = fetchURLs[i];
            let link = str.replace(/.$/, page);
            console.log(link)
            return link
        }
    }
    
}

export function setUrlForFilter(selected, fetchURLs) {
    for (let i in fetchURLs) {
        if (selected == i){
            let str = fetchURLs[i];
            console.log(str)
            return str
        }
    }  
}