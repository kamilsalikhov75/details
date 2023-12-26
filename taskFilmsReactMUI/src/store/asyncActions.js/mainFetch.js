import { useEffect } from "react";
import { returnedURL } from "../../utils/setUrl";
import { addData } from "../actions/actions";
import { useSelector } from "react-redux";

export const mainFetch = () => {

    const token = useSelector(state => state.data.token);
    return function (dispatch) {
        let fetchURL = returnedURL();
        fetch(fetchURL, {
            method: 'GET',
            headers: {
                'X-API-KEY': `${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(result => result.json())
            .then(json => dispatch(addData(json)))
            .catch(err => console.log(err));
    }
}

