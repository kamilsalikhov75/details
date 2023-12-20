import { Stack } from "@mui/material";
import { FilmCard } from "./FilmCard";
import { useMemo } from "react";
import { useSelector } from "react-redux";



export function FilmGrid() {

    
    const dataSelector = useSelector(state => state.data);

    const filmItems = useMemo(()=>{
        if (!dataSelector) {
            return [];
        }
        return dataSelector.items;
        
    }, [dataSelector])

    if (!dataSelector) {
        return console.log('loading');
    }


    return (
        <div style={{ marginLeft: '420px', paddingTop: '20px' }}>
            <Stack direction={"row"} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {filmItems.map((item) => (
                    <FilmCard name={item.nameRu || item.nameOriginal} poster={item.posterUrl} year={item.year} id={item.kinopoiskId} key={item.kinopoiskId} />
                ))}
            </Stack>
        </div>
    )
}
