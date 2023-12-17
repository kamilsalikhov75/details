import { Container, Stack } from "@mui/material";
import { FilmCard } from "./FilmCard";
// import { useFetchData, useTokenData } from "../utils/userContext";
import { Link } from "react-router-dom";
import { fetchURLs, order } from "../utils/library";
import { useState, useEffect, useMemo } from "react";
import { setUrlForFilter } from "../utils/setUrl";



export function FilmGrid({ data }) {

    // const [token, setToken] = useTokenData()
    // const [data, setData] = useState(null);
    
    

    // filterFetch(`${sortValue}`, searchItem, 'ALL', page, setData, token);

    


    // if (!data) {
    //     return console.log('loading');
    // }
    // console.log(data)
    // console.log(data.totalPages)
    // setTotalPages(data.totalPages);

    return (
        <div style={{ marginLeft: '420px', paddingTop: '20px' }}>
            <Stack direction={"row"} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {data.items.map((item) => (
                    <FilmCard name={item.nameRu || item.nameOriginal} poster={item.posterUrl} year={item.year} id={item.kinopoiskId} key={item.kinopoiskId} />
                ))}
            </Stack>
        </div>
    )
}




// export function filterFetch(sort, keyword, type, page, setData, token){

//     const fetchURL = `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=${sort}&type=${type}&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&keyword=${keyword}&page=${page}`

//     useEffect(() => {
        
//         fetch(fetchURL, {
//             method: 'GET',
//             headers: {
//                 'X-API-KEY': `${token}`,
//                 'Content-Type': 'application/json',
//             },
//         })
//             .then(result => result.json())
//             .then(json => setData(json))
//             .catch(err => console.log(err));
//     }, [fetchURL])
//     console.log(fetchURL);
// }

