export function setUrl(selected, fetchURLs, page) {
    for (let i in fetchURLs) {
        if (selected == i){
            let str = fetchURLs[i];
            let link = str.replace(/.$/, page);
            return link
        }
        
    }
}