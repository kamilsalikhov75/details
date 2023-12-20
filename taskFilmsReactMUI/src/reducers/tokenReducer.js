import { order, type } from "../utils/library";
const initialState = {
    token: localStorage.getItem('token') || '',
    data: '',
    selectedSort: Object.keys(order),
    selectedType: Object.keys(type),
    filterItems: {
        searchItem: '',
        currentSelectedSort: '',
        currentSelectedType: '',

    }
};

export const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TOKEN":
            return { ...state, token: localStorage.setItem("token", action.payload) }

        case "ADD_DATA":
            return { ...state, data: action.payload }
        case "SET_SEARCH_ITEM":
            return {
                ...state,
                filterItems: {
                    ...state.filterItems,
                    searchItem: action.payload,
                }
            }
        case "CLEAR_SEARCH_ITEM": {
            return {
                ...state,
                filterItems: {
                    ...state.filterItems,
                    searchItem: ''
                }
            }
        }
        case "SET_SORT_ITEM":
            return {
                ...state,
                filterItems: {
                    ...state.filterItems,
                    currentSelectedSort: action.payload
                }
            }

        case "SET_TYPE_ITEM":
            return {
                ...state,
                filterItems: {
                    ...state.filterItems,
                    currentSelectedType: action.payload
                }
            }
        default:
            return state;
    }
}

