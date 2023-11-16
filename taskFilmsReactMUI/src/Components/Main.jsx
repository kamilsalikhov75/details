import { FilmGrid } from "./FilmGrid"
import { FilmWindow } from "./FilmWindows"
import { Filter } from "./Filter"

export function Main() {
    return (
        <div style={{ display: 'flex', width: '100vw', justifyContent: 'space-between' }}>

            {/* <Filter /> */}
            {/* <FilmGrid /> */}
            <FilmWindow/>
        </div>
    )
}




