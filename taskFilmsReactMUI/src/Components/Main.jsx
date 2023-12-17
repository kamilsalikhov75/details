import { useContext, useEffect, useMemo, useState } from "react"
import { FilmGrid } from "./FilmGrid"
import { FilmWindow } from "./FilmWindows"
import { Filter } from "./Filter"
import { fetchURLs, order, selectArr, type } from "../utils/library"
import { setUrlForFilter } from "../utils/setUrl"
import { useSelector } from "react-redux"


export function Main() {
   

    const [selectedSort, setSelectedSort] = useState(Object.keys(order)[0]);
    const sortValue = setUrlForFilter(selectedSort, order);

    const [selectedType, setSelectedType] = useState(Object.keys(type)[0])
    const typeValue = setUrlForFilter(selectedType, type);
    console.log(typeValue);

    const [page, setPage] = useState(1);
    const [searchItem, setSearchItem] = useState('');

    const title = searchItem.replace(" ", "_");

    const [data, setData] = useState('');
    console.log(data)
    const token = useSelector(state => state.token);


    const fetchURL = `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=${sortValue}&type=${typeValue}&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&keyword=${title}&page=${page}`

    const FilmGridMemorize = useMemo(()=> <FilmGrid data={data} />, [data])


    useEffect(() => {
        fetch(fetchURL, {
            method: 'GET',
            headers: {
                'X-API-KEY': `${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(result => result.json())
            .then(json => setData(json))
            .catch(err => console.log(err));
        console.log(fetchURL);
    }, [fetchURL])

    if (!data) {
        return console.log('loading');
    }

    

    if (token) {

        

        return (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Filter selectedSort={selectedSort} setSelectedSort={(event) => {
                    setSelectedSort(event.target.value)
                }} selectedType={selectedType} setSelectedType={(event) => {
                    setSelectedType(event.target.value);
                }} page={page} setSearchItem={setSearchItem} searchItem={searchItem} totalPages={data.totalPages} setPage={(event, value) => {
                    setPage(value);
                }} />
                {FilmGridMemorize}
            </div>
        )
    }
}

//e43bd03c-839c-4000-9f8b-274957f6431d
//10233ca2-2138-41fb-9f22-5d24138db872