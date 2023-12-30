import { CLEAR_SEARCH_ITEM, SET_CURRENT_PAGE, SET_SEARCH_ITEM, SET_SORT_ITEM, SET_TYPE_ITEM } from "../actions/actionsTitles";
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
    }
};

// export const filterReducer = (state = filterState, action) => {
//     switch (action.type) {
//         case SET_SEARCH_ITEM:
//             return {
//                 ...state,
//                 filterItems: {
//                     ...state.filterItems,
//                     searchItem: action.payload,
//                 }
//             }
//         case CLEAR_SEARCH_ITEM: {
//             return {
//                 ...state,
//                 filterItems: {
//                     ...state.filterItems,
//                     searchItem: ''
//                 }
//             }
//         }
//         case SET_SORT_ITEM:
//             return {
//                 ...state,
//                 filterItems: {
//                     ...state.filterItems,
//                     currentSelectedSort: action.payload
//                 }
//             }

//         case SET_TYPE_ITEM:
//             return {
//                 ...state,
//                 filterItems: {
//                     ...state.filterItems,
//                     currentSelectedType: action.payload
//                 }
//             }
//         case SET_CURRENT_PAGE:
//             return {
//                 ...state,
//                 filterItems: {
//                     ...state.filterItems,
//                     currentPage: action.payload
//                 }
//             }
//         default:
//             return state;
//     }
// }

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
        }
    }
})

export const {setSearchItem, clearSearchItem, setSortItem, setTypeItem, setCurrentPage} = filterSlice.actions;
export default filterSlice.reducer