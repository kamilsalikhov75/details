import { useContext, useEffect, useState } from "react"
import { FilmGrid } from "./FilmGrid"
import { FilmWindow } from "./FilmWindows"
import { Filter } from "./Filter"
import { FetchProvider, useTokenData } from "../utils/userContext"
import { fetchURLs, selectArr } from "../utils/library"
import { setUrl } from "../utils/setUrl"



export function Main() {
    const [selected, setSelected] = useState(Object.keys(fetchURLs)[0]);
    const [page, setPage] = useState(1);

    const [token, setToken] = useTokenData();
    console.log(token)

    if (token) {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Filter selected={selected} setSelected={(event) => {
                    setSelected(event.target.value)
                }} page={page} setPage={(event, value) => {
                    setPage(value);
                }} />
                <FilmGrid selected={selected} page={page} />
            </div>
        )
    }
}

//e43bd03c-839c-4000-9f8b-274957f6431d