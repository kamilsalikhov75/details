import { Select } from "./Select";
import { Pagination  } from "./Pagination";
import { CheckboxUL } from "./CheckboxUL";
import { selectArr, genresArr } from "../utils/library";


export function Filter() {

    const yearArr = [];
    function arrOfNum(from, to, arr){
        for (let i = from; i <= to; i++){
            arr.push({id: i, title: i})
        } 
    }
    arrOfNum(1911, 2024, yearArr);

    return (
        <div className="filter">
            <h3>Фильтры</h3>
            
            <div className="filter__sort">
                <Select selectTitle={"Сортировать по: "} selectArr={selectArr}/>
                <Select selectTitle={"Год релиза: "} selectArr={yearArr}/>
            </div>

            <div className="filter__genres">
                <p className="filter__genres-title">Жанры</p>
                <CheckboxUL checkboxArr={genresArr}/>
            </div>

            <div className="filter__pagination">
                <Pagination n={6}/>
            </div>

        </div>
    )
}



