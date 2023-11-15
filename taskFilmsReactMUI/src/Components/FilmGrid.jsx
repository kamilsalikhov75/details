import { Container } from "@mui/material";
import { FilmCard } from "./FilmCard";


export function FilmGrid() {
    return (
        <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
        </Container>

    )
}

