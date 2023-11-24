import { Container, Stack } from "@mui/material";
import { FilmCard } from "./FilmCard";
import { useFetchData } from "../utils/userContext";


export function FilmGrid() {

    const data = useFetchData();

    if(!data){
        return console.log('loading');
    }
    // data.items.forEach((item) => console.log(item))
    
    return (
        <div style={{ marginLeft: '420px', paddingTop: '20px' }}>
            <Stack direction={"row"} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                
                {data.items.map((item) =>(
                    <FilmCard name={item.nameRu} poster={item.posterUrl} year={item.year} key={item.kinopoiskId}/>
                )) }
                
                
               
            </Stack>
        </div>
    )

}

