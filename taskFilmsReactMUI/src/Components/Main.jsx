import { useContext, useEffect, useMemo, useState } from "react"
import { FilmGrid } from "./FilmGrid"
import { Filter } from "./Filter"
import { returnedURL, setUrlForFilter } from "../utils/setUrl"
import { useDispatch, useSelector } from "react-redux"
import { mainFetch } from "../store/asyncActions.js/mainFetch"
import { order, type } from "../utils/library"


export function Main() {
    let sortValue, typeValue, yearFrom, yearTo, genresString;
    const token = useSelector(state => state.data.token);
    const selectedSortSelector = useSelector(state => state.filter.filterItems.currentSelectedSort);
    const selectedTypeSelector = useSelector(state => state.filter.filterItems.currentSelectedType);
    const currentPage = useSelector(state => state.filter.filterItems.currentPage);
    const titleItem = useSelector(state => state.filter.filterItems.searchItem);
    
    const yearRange = useSelector(state => state.filter.filterItems.currentYearRange)

    const genresArr = useSelector(state => state.filter.filterItems.currentGenres)

    if ((genresArr !== '') && (genresArr.length > 0)) {
        genresString = genresArr.map((genreItem) => {
            return genreItem.id;
        })
    }


    if ((selectedSortSelector && selectedTypeSelector) !== '') {
        sortValue = setUrlForFilter(selectedSortSelector, order);
        typeValue = setUrlForFilter(selectedTypeSelector, type);
    }

    if (yearRange !== null) {
        yearFrom = yearRange[0];
        yearTo = yearRange[1];
    }

    const dispatch = useDispatch()

    function fetch() {
        if (sortValue !== undefined && typeValue !== undefined && titleItem !== undefined && currentPage !== undefined && yearFrom !== undefined && yearTo !== undefined) {
            dispatch(mainFetch({ token, sortValue, typeValue, titleItem, currentPage, yearFrom, yearTo }))
        }
        if (sortValue !== undefined && typeValue !== undefined && titleItem !== undefined && currentPage !== undefined && yearFrom !== undefined && yearTo !== undefined && genresString !== undefined) {
            dispatch(mainFetch({ token, sortValue, typeValue, titleItem, currentPage, yearFrom, yearTo, genresString }))
        }
    }


    useEffect(() => {
        setTimeout(fetch(), 2000);
    }, [sortValue, typeValue, titleItem, currentPage, yearRange, genresString])


    if (token) {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Filter />
                <FilmGrid />
            </div>
        )
    }
}


//e43bd03c-839c-4000-9f8b-274957f6431d
//10233ca2-2138-41fb-9f22-5d24138db872