import { Select } from "./Select";
import { Pagination  } from "./Pagination";
import { Checkbox } from "./CheckboxUL";
import { selectArr, genresArr, yearArr } from "./library";


export function Filter() {

    return (
        <div className="filter">
            <h3>Фильтры</h3>

            <div className="filter__sort">
                <Select selectTitle={"Сортировать по: "} selectArr={selectArr}/>
                <Select selectTitle={"Год релиза: "} selectArr={yearArr}/>
            </div>

            <div className="filter__genres">
                <p className="filter__genres-title">Жанры</p>
                <Checkbox checkboxArr={genresArr}/>
            </div>

            <div className="filter__pagination">
                <Pagination n={6}/>
            </div>

        </div>
    )
}



