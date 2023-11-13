import { useState, useReducer, useContext } from "react";
import { useDispatch, useIsChecked } from "../utils/userContext";
import { Select } from "./Select";
import { Pagination } from "./Pagination";
import { CheckboxUL } from "./CheckboxUL";
import { selectArr, genresArr } from "../utils/library";
import { Button } from "./Button";  
import { arrOfNum } from "../utils/library";


export function Filter() {

    const yearArr = [];
    arrOfNum(1911, 2024, yearArr);

    const dispatch = useDispatch()
    const isChecked = useIsChecked()
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
                    <Button onClick={()=> dispatch({
                        type: 'reset_checkboxes'
                    })}>сбросить</Button>
                </div>
                
                <CheckboxUL checkboxArr={genresArr} isChecked={isChecked} dispatch={dispatch}  />
                
            </div>

            <div className="filter__pagination">
                <Pagination n={6} />
            </div>

        </div>
    )
}



