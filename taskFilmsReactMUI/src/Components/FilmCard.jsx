import { Box, Card, CardActionArea, CardContent, CardMedia, Container, IconButton, Paper, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useLocalStorage, { toggleFavourite } from "../utils/saveToLocalStorage";


export function FilmCard({ name, poster, year, id, favourites, setFavourites }) {
    const paramsId = String(id);
    const isFavourite = favourites.includes(paramsId)
    
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
                        <IconButton sx={{ width: '32px', height: '32px' }} onClick={() => {
                            toggleFavourite(paramsId, favourites, setFavourites)
                        }}>
                            <StarIcon color={isFavourite ? 'primary' : ''} />
                        </IconButton>

                    </CardContent>

                </Paper>
            </Card>
        </div>
    )
}
