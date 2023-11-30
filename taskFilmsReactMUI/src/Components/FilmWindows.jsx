import { Box, IconButton, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useParams } from "react-router-dom";
import { useFetchData } from "../utils/userContext";
import { useEffect, useState } from "react";


export function FilmWindow() {

    const params = useParams();
    console.log(params.id);

    const [data, setData] = useState(null);
    const [stuff, setStuff] = useState(null);

    
    // const nameRuValues = [];
    // for (va)


    useEffect(() => {
          fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${params.id}`, {
            method: 'GET',
            headers: {
              'X-API-KEY': 'e43bd03c-839c-4000-9f8b-274957f6431d',
              'Content-Type': 'application/json',
            },
          })
            .then(result => result.json())
            .then(json => setData(json))
            .catch(err => console.log(err));

            fetch(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${params.id}`, {
            method: 'GET',
            headers: {
              'X-API-KEY': 'e43bd03c-839c-4000-9f8b-274957f6431d',
              'Content-Type': 'application/json',
            },
          })
            .then(result => result.json())
            .then(json => setStuff(json))
            .catch(err => console.log(err));
      }, []);

    console.log(data);

    if (!data) {
        return console.log('loadingggg');
    }

    if (!stuff) {
        return console.log('loadinggggdd');
    }
    console.log(stuff)

    return (
        <div style={{ display: 'flex', padding: '20px', width: '100vw' }}>
            <div>
                <Box component={'img'} src={data.posterUrl} />
            </div>
            <div className="details" style={{ paddingLeft: '20px' }}>
                <div className="title" style={{ display: 'flex', paddingBottom: '10px' }}>
                    <Typography variant="h3">{data.nameRu}</Typography>
                    <Typography variant="h4">{data.ratingKinopoisk}</Typography>
                    <IconButton>
                        <StarIcon />
                    </IconButton>
                </div>

                <div className="controls" style={{ width: '35px', height: '35px', paddingBottom: '10px' }}>
                    <IconButton>
                        <ArrowBackIcon />
                    </IconButton>
                </div>

                <div className="cast" >
                    {stuff.map((item) => {
                        if (item.professionKey === "ACTOR")(
                            console.log(item.nameRu)
                            // <Typography variant="h6">{item.nameRu}</Typography>
                        )
                    })}
                     
                     
                    
                </div>

                <div className="details__info" style={{ height: '450px', paddingTop: '80px', display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" paddingBottom={'50px'}>Детали</Typography>
                    <div className="details__info-items" style={{}}>
                        <Box sx={{ display: 'flex', paddingBottom: '10px', justifyContent: 'space-between' }}>
                            <Typography variant="body1">Страна </Typography>
                            {data.countries.map((country, key) =>(
                                <Typography key={key+1} variant="body1">{country.country}</Typography>
                            ))}
                        </Box>
                        <Box sx={{ display: 'flex', paddingBottom: '10px', justifyContent: 'space-between' }}>
                            <Typography variant="body1">Год </Typography>
                            <Typography variant="body1">{data.year} </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', paddingBottom: '10px', justifyContent: 'space-between' }}>
                            <Typography variant="body1">Режиссер </Typography>
                            <Typography variant="body1">США</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', paddingBottom: '10px', justifyContent: 'space-between' }}>
                            <Typography variant="body1">Сценарий </Typography>
                            <Typography variant="body1">США</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', paddingBottom: '10px', justifyContent: 'space-between' }}>
                            <Typography variant="body1">Бюджет </Typography>
                            <Typography variant="body1">США</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', paddingBottom: '10px', justifyContent: 'space-between' }}>
                            <Typography variant="body1">Зрители </Typography>
                            <Typography variant="body1">США</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', paddingBottom: '10px', justifyContent: 'space-between' }}>
                            <Typography variant="body1">Время </Typography>
                            <Typography variant="body1">США</Typography>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function getData(){
    
}