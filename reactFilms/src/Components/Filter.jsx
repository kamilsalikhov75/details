import { useState } from "react";

import { Select } from "./Select";
import { Pagination } from "./Pagination";
import { CheckboxUL } from "./CheckboxUL";
import { selectArr, genresArr } from "../utils/library";
import { Button } from "./Button";
import { handleResetCheckbox } from "../utils/resetCheckbox";
import { arrOfNum } from "../utils/library";


export function Filter() {

    const yearArr = [];
    arrOfNum(1911, 2024, yearArr);


    const [isChecked, setIsChecked] = useState([]);
    const [isCheckedArr, setIsCheckedArr] = useState(true)


    return (
        <div className="filter">
            <h3>Фильтры</h3>

            <div className="filter__sort">
                <Select selectTitle={"Сортировать по: "} selectArr={selectArr} />
                <Select selectTitle={"Год релиза: "} selectArr={yearArr} />
            </div>

            <div className="filter__genres">

                <div className="filter__genres-panel">
                    <h3 className="filter__genres-title">Жанры</h3>
                    <Button onClick={() => handleResetCheckbox(setIsChecked, isCheckedArr, setIsCheckedArr, genresArr)}>сбросить</Button>
                </div>
                
                <CheckboxUL checkboxArr={genresArr} isChecked={isChecked} setIsChecked={setIsChecked} />
                
            </div>

            <div className="filter__pagination">
                <Pagination n={6} />
            </div>

        </div>
    )
}



