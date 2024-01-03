import { createSlice } from "@reduxjs/toolkit";

import { mainFetch } from "../asyncActions.js/mainFetch";

const initialState = {
    token: localStorage.getItem('token') || '',
    data: '',
    
};


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
                console.log("Successfully");
                state.data = action.payload
            })
            .addCase(mainFetch.rejected, () => {
                console.log('Rejected')
            })
    }
})

export const {addToken, addData} = dataSlice.actions;
export default dataSlice.reducer;