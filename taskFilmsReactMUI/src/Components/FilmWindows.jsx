import { Box, IconButton, Typography } from "@mui/material";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";


export function FilmWindow() {
    const navigate = useNavigate();
    const params = useParams();
    const paramsId = params.id

    const [filmData, setFilmData] = useState('');
    const [stuff, setStuff] = useState('');
    const [boxOffice, setBoxOffice] = useState('');


    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    const [favourite, setFavourite] = useState(favourites.includes(paramsId));

    const token = useSelector(state => state.data.token);

    FilmInfo(token, paramsId, setFilmData)


    if (!filmData) {
        return console.log("LOADING")
    }

    const handleSaveClick = (item) => {
        saveIdToLocalStorage(item);
        setFavourite(true);
    };

    const handleRemoveClick = (item) => {
        removeIdFromLocalStorage(item);
        setFavourite(false);
    }

    return (
        <div style={{ display: 'flex', padding: '20px' }}>
            <div className="controls" style={{ width: '35px', height: '35px', paddingBottom: '10px' }}>
                <IconButton onClick={() => { navigate(-1) }}>
                    <ArrowBackIcon />
                </IconButton>
            </div>
            <div>
                <Box sx={{ paddingRight: '20px', paddingLeft: '20px' }} component={'img'} src={filmData.posterUrl} />
            </div>
            <div className="details" style={{ paddingLeft: '20px' }}>
                <div className="title" style={{ display: 'flex', paddingBottom: '10px', alignItems: 'center' }}>
                    <Typography variant="h3">{filmData.nameRu}</Typography>
                    <Typography variant="h4">{filmData.ratingKinopoisk}</Typography>
                    {favourite && <IconButton onClick={() => handleRemoveClick(paramsId)}>
                        <StarIcon color='primary' />
                    </IconButton>}

                    {!favourite && <IconButton onClick={() => handleSaveClick(paramsId)}>
                        <StarIcon />
                    </IconButton>}
                    
                </div>
                <Cast token={token} paramsId={paramsId} setStuff={setStuff} stuff={stuff} />

                <div className="details__info" style={{ height: '450px', paddingTop: '80px', display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" paddingBottom={'50px'}>Детали</Typography>
                    <div className="details__info-items">
                        <Box sx={{ display: 'flex', paddingBottom: '10px', justifyContent: 'space-between' }}>
                            <Typography variant="body1">Страна </Typography>
                            <Box sx={{ display: 'flex', flexDirection: "column" }}>
                                {filmData.countries.map((country, key) => (
                                    <Typography key={key + 1} variant="body1">{country.country}</Typography>
                                ))}
                            </Box>

                        </Box>
                        <Box sx={{ display: 'flex', paddingBottom: '10px', justifyContent: 'space-between' }}>
                            <Typography variant="body1">Год </Typography>
                            <Typography variant="body1">{filmData.year} </Typography>
                        </Box>

                        <Stuff stuff={stuff} stuffItem={"Режиссер"} professionKey={"DIRECTOR"} />
                        <Stuff stuff={stuff} stuffItem={"Сценарий"} professionKey={"WRITER"} />
                        <BoxOffice token={token} paramsId={paramsId} setBoxOffice={setBoxOffice} boxOffice={boxOffice} />
                        <FilmLength filmData={filmData} />
                    </div>
                </div>

            </div>
        </div>
    )
}

function FilmInfo(token, paramsId, setFilmData) {
    useEffect(() => {
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${paramsId}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': token,
                'Content-Type': 'application/json',
            },
        })
            .then(result => result.json())
            .then(json => setFilmData(json))
            .catch(err => console.log(err));
    }, []);
}

function Cast({ token, paramsId, setStuff, stuff }) {

    useEffect(() => {
        fetch(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${paramsId}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': token,
                'Content-Type': 'application/json',
            },
        })
            .then(result => result.json())
            .then(json => setStuff(json))
            .catch(err => console.log(err));
    }, [])

    if (!stuff) {
        return console.log("Loading stuff");
    }

    return (
        <div className="cast" >
            {stuff.slice(0, 10).map((item, count) => {
                if (item.professionKey === "ACTOR")
                    return <Typography key={count + 1} variant="h6">{item.nameRu}</Typography>
            })}
        </div>
    )
}

function Stuff({ stuff, stuffItem, professionKey }) {
    if (!stuff) {
        return console.log("Loading stuff");
    }

    return (
        <Box sx={{ display: 'flex', paddingBottom: '10px', justifyContent: 'space-between' }}>
            <Typography sx={{ paddingRight: '20px' }} variant="body1">{stuffItem}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {stuff.map((item, count) => {
                    if (item.professionKey === `${professionKey}`)
                        return <Typography sx={{ textAlign: 'right' }} key={count + 1} variant="body1">{item.nameRu}</Typography>
                })}
            </Box>
        </Box>
    )
}

function BoxOffice({ token, paramsId, setBoxOffice, boxOffice }) {

    useEffect(() => {
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${paramsId}/box_office`, {
            method: 'GET',
            headers: {
                'X-API-KEY': token,
                'Content-Type': 'application/json',
            },
        })
            .then(result => result.json())
            .then(json => setBoxOffice(json))
            .catch(err => console.log(err));
    }, []);

    if (!boxOffice) {
        return console.log("Loading box office");
    }

    if (Object.keys(boxOffice).includes('items') && (boxOffice.items.length > 0)) {
        return (
            <Box sx={{ display: 'flex', paddingBottom: '10px', justifyContent: 'space-between' }}>
                <Typography variant="body1">Бюджет </Typography>
                <Typography variant="body1">{boxOffice.items[0].amount} $</Typography>
            </Box>
        )
    } else return null
}

function FilmLength({ filmData }) {
    if (filmData.filmLength !== null) {
        return (
            <Box sx={{ display: 'flex', paddingBottom: '10px', justifyContent: 'space-between' }}>
                <Typography variant="body1">Время </Typography>
                <Typography variant="body1">{filmData.filmLength} минут </Typography>
            </Box>
        )
    } else return null
}


