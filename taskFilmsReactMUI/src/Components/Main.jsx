import { useContext, useEffect, useMemo, useState } from "react"
import { FilmGrid } from "./FilmGrid"
import { FilmWindow } from "./FilmWindows"
import { Filter } from "./Filter"
import { fetchURLs, order, selectArr, type } from "../utils/library"
import { returnedURL, setUrlForFilter } from "../utils/setUrl"
import { useDispatch, useSelector } from "react-redux"
import { addData } from "../actions/actions"
// import { addFilterItems } from "../actions/actions"


export function Main() {
    
    let fetchURL;
    const [page, setPage] = useState(1);
    const token = useSelector(state => state.token);

    const dispatch = useDispatch()
    
    fetchURL = returnedURL(page);
    
    useEffect(() => {
        fetch(fetchURL, {
            method: 'GET',
            headers: {
                'X-API-KEY': `${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(result => result.json())
            .then(json => dispatch(addData(json)))
            .catch(err => console.log(err));
        
    }, [fetchURL])

    if (token) {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Filter page={page} setPage={(event, value) => {
                    setPage(value);
                }} />
                <FilmGrid />
                
            </div>
        )
    }
}

//e43bd03c-839c-4000-9f8b-274957f6431d
//10233ca2-2138-41fb-9f22-5d24138db872