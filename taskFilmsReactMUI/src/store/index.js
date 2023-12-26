import { applyMiddleware, combineReducers, createStore } from "redux";
import { dataReducer } from "./reducers/dataReducer";
import { filterReducer } from "./reducers/filterReducer";
import { thunk } from 'redux-thunk'

export const rootReducer = combineReducers({
    data: dataReducer,
    filter: filterReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))