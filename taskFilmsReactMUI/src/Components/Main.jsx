import { useContext, useState } from "react"
import { FilmGrid } from "./FilmGrid"
import { FilmWindow } from "./FilmWindows"
import { Filter } from "./Filter"
import { FetchProvider } from "../utils/userContext"
import { fetchURLs, selectArr } from "../utils/library"
import { setUrl } from "../utils/setUrl"



export function Main() {
    const [selected, setSelected] = useState('');
    const [page, setPage] = useState(1);

    return (
        <FetchProvider fetchURL={() => setUrl(selected, fetchURLs, page)}>
            <div style={{ display: 'flex', width: '100vw', justifyContent: 'space-between' }}>
                <Filter selected={selected} setSelected={(event) => {
                    setSelected(event.target.value)
                }} page={page} setPage={(event, value) => {
                    setPage(value);
                    }} />
                <FilmGrid />
            </div>
        </FetchProvider>
    )
}
