// import { applyMiddleware, combineReducers, createStore } from "redux";

// import { filterReducer } from "./reducers/filterReducer";
// import { thunk } from 'redux-thunk'
import {configureStore} from '@reduxjs/toolkit'
import dataReducer from "./reducers/dataReducer";
import filterReducer from "./reducers/filterReducer";

// export const rootReducer = combineReducers({
//     data: dataReducer,
//     filter: filterReducer
// })

// export const store = createStore(rootReducer, applyMiddleware(thunk))


export const newStore = configureStore({
    reducer: {
        data: dataReducer,
        filter: filterReducer
    }
})