import { Container, Stack } from "@mui/material";
import { FilmCard } from "./FilmCard";


export function FilmGrid() {
    return (
        <div style={{ marginLeft: '420px', paddingTop: '20px' }}>
            <Stack direction={"row"} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
            </Stack>
        </div>
    )

}

