import { Box, Card, CardActionArea, CardContent, CardMedia, Container, IconButton, Paper, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { removeIdFromLocalStorage, saveIdToLocalStorage } from "../utils/saveToLocalStorage";


export function FilmCard({ name, poster, year, id }) {
    const paramsId = String(id);
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

    const [favourite, setFavourite] = useState(favourites.includes(paramsId));    
    
    const handleSaveClick = (item) => {
        saveIdToLocalStorage(item);
        setFavourite(true);
    };

    const handleRemoveClick = (item) => {
        removeIdFromLocalStorage(item);
        setFavourite(false);
    }

    return (
        <div style={{ paddingRight: '20px', paddingBottom: '20px' }}>
            <Card sx={{ width: '296px' }}>
                <Paper variant="elevation" elevation={1} square={true}>

                    <CardActionArea component={Link} to={`/film/${id}`}>
                        <CardMedia component={'img'} height={'240px'} src={`${poster}`} />
                    </CardActionArea>
                    <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                        <Box sx={{ textAlign: 'left' }}>
                            <Typography variant="h5">{name}</Typography>
                            <Typography variant="body2">{year}</Typography>
                        </Box>
                        {favourite && <IconButton sx = {{ width: '32px', height: '32px' }} onClick={() => {
                            handleRemoveClick(paramsId)
                            }}>
                            <StarIcon color='primary' />
                        </IconButton>}

                        {!favourite && <IconButton sx = {{ width: '32px', height: '32px' }} onClick={() => handleSaveClick(paramsId)}>
                            <StarIcon />
                        </IconButton>}
                    </CardContent>

                </Paper>
            </Card>
        </div>
    )
}
