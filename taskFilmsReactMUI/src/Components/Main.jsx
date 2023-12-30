import { useContext, useEffect, useMemo, useState } from "react"
import { FilmGrid } from "./FilmGrid"
import { Filter } from "./Filter"
import { returnedURL } from "../utils/setUrl"
import { useDispatch, useSelector } from "react-redux"
import { mainFetch } from "../store/asyncActions.js/mainFetch"
// import { addData } from "../store/actions/actions"
// import { mainFetch } from "../store/asyncActions.js/mainFetch"


export function Main() {
    
    const token = useSelector(state => state.data.token);
    const dispatch = useDispatch()
    
    dispatch(mainFetch(token))
     
    if (token) {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Filter/>
                <FilmGrid /> 
            </div>
        )
    }
}




//e43bd03c-839c-4000-9f8b-274957f6431d
//10233ca2-2138-41fb-9f22-5d24138db872