import { FilmGrid } from "./FilmGrid"
import { Filter } from "./Filter"

export function Main() {
    return (
        <div style={{ display: 'flex', width: '100vw', alignItems: 'center', justifyContent: 'space-between' }}>

            <Filter />
            <FilmGrid />
        </div>
    )
}




