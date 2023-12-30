import { createAsyncThunk } from '@reduxjs/toolkit'
import { returnedURL } from "../../utils/setUrl";
// import { addData } from "../actions/actions";


// export const mainFetch = (token) => {
//     return function (dispatch) {
//         let fetchURL = returnedURL();
//         fetch(fetchURL, {
//             method: 'GET',
//             headers: {
//                 'X-API-KEY': `${token}`,
//                 'Content-Type': 'application/json',
//             },
//         })
//             .then(result => result.json())
//             .then(json => dispatch(addData(json)))
//             .catch(err => console.log(err));
//     }
// }

export const mainFetch = createAsyncThunk(
    'data/mainFetch',
    async (token) => {
            let fetchURL = returnedURL();
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