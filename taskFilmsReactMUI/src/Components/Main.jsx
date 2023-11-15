import { Container } from "@mui/material";
import { Filter } from "./Filter";
import { FilmGrid } from "./FilmGrid";

export function Main(){
    return(
        <Container sx={{display: 'flex', height: '770px', alignItems: 'center', justifyContent: 'space-between'}}>
            <Filter/>
            <FilmGrid/>
        </Container>
    )
}