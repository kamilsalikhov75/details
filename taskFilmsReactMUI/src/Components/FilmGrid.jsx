import { Container, Stack } from "@mui/material";
import { FilmCard } from "./FilmCard";
import { useFetchData } from "../utils/userContext";
import { Link } from "react-router-dom";


export function FilmGrid() {
    const data = useFetchData();
    if (!data) {
        return console.log('loading');
    }
    // data.items.forEach((item) => console.log(item))
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

