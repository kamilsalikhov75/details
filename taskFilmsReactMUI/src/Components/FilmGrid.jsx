import { Container, Stack } from "@mui/material";
import { FilmCard } from "./FilmCard";
import { useFetchData } from "../utils/userContext";
import { Link } from "react-router-dom";
import { fetchURLs } from "../utils/library";
import { useState, useEffect } from "react";
import { setUrl } from "../utils/setUrl";

export function FilmGrid({ selected, page }) {

    const [data, setData] = useState(null);
    const fetchURL = setUrl(selected, fetchURLs, page);
    console.log(fetchURL)
    
    useEffect(() => {
        fetch(fetchURL, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'e43bd03c-839c-4000-9f8b-274957f6431d',
                'Content-Type': 'application/json',
            },
        })
            .then(result => result.json())
            .then(json => setData(json))
            .catch(err => console.log(err));
    }, [fetchURL])

    if (!data) {
        return console.log('loading');
    }
    console.log(data)


    return (
        <div style={{ marginLeft: '420px', paddingTop: '20px' }}>
            <Stack direction={"row"} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {data.items.map((item) => (
                    <Link key={item.kinopoiskId} to={`/film/${item.kinopoiskId}`}>
                        <FilmCard name={item.nameRu} poster={item.posterUrl} year={item.year} key={item.kinopoiskId} />
                    </Link>
                ))}
            </Stack>
        </div>
    )
}

