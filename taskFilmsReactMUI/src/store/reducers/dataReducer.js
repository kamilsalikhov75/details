import { createSlice } from "@reduxjs/toolkit";
import { ADD_DATA, ADD_TOKEN } from "../actions/actionsTitles";
import { mainFetch } from "../asyncActions.js/mainFetch";

const initialState = {
    token: localStorage.getItem('token') || '',
    data: '',
    
};

// export const dataReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_TOKEN:
//             return { ...state, token: localStorage.setItem("token", action.payload) }

//         case ADD_DATA:
//             return { ...state, data: action.payload }
//         default:
//             return state;
//     }
// }


export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
        },
        addData: (state, action) => {
            state.data = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(mainFetch.fulfilled, (state, action) =>{
                state.data = action.payload
            })
            .addCase(mainFetch.rejected, () => {
                console.log('false')
            })
    }
})

export const {addToken, addData} = dataSlice.actions;
export default dataSlice.reducer;