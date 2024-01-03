import { createAsyncThunk } from '@reduxjs/toolkit'
import { returnedURL } from "../../utils/setUrl";


export const mainFetch = createAsyncThunk(
    'data/mainFetch',
    async (payload) => {
        const { token, sortValue, typeValue, titleItem, currentPage, yearFrom, yearTo, genresString } = payload
        let fetchURL = returnedURL(sortValue, typeValue, titleItem, currentPage, yearFrom, yearTo, genresString);
        console.log(fetchURL)
        const response = await fetch(fetchURL, {
            method: 'GET',
            headers: {
                'X-API-KEY': `${token}`,
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json();
        return json;
    }
)