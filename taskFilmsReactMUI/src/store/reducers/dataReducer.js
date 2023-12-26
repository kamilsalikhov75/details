import { ADD_DATA, ADD_TOKEN } from "../actions/actionsTitles";

const initialState = {
    token: localStorage.getItem('token') || '',
    data: '',
    
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TOKEN:
            return { ...state, token: localStorage.setItem("token", action.payload) }

        case ADD_DATA:
            return { ...state, data: action.payload }
        default:
            return state;
    }
}

