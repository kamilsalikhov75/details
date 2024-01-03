
import { order, type } from "../../utils/library";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedSort: Object.keys(order),
    selectedType: Object.keys(type),
    filterItems: {
        searchItem: '',
        currentSelectedSort: '',
        currentSelectedType: '',
        currentPage: '',
        currentYearRange: null,
        currentGenres: ''
    }
};


export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchItem: (state, action) => {
            state.filterItems.searchItem = action.payload;
        },
        clearSearchItem: (state) =>{
            state.filterItems.searchItem = '';
        },
        setSortItem: (state, action) => {
            state.filterItems.currentSelectedSort = action.payload;
        },
        setTypeItem: (state, action) => {
            state.filterItems.currentSelectedType = action.payload;
        },
        setCurrentPage: (state, action) =>{
            state.filterItems.currentPage = action.payload;
        },
        setCurrentYearRange: (state, action) => {
            state.filterItems.currentYearRange = action.payload
        },
        setCurrentGenres: (state, action) => {
            state.filterItems.currentGenres = action.payload
        }
    }
})

export const {setSearchItem, clearSearchItem, setSortItem, setTypeItem, setCurrentPage, setCurrentYearRange, setCurrentGenres} = filterSlice.actions;
export default filterSlice.reducer