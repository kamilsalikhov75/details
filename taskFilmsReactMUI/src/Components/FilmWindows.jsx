import { Box, IconButton, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useFetchData } from "../utils/userContext";
import { useEffect, useState } from "react";


export function FilmWindow() {

    const navigate = useNavigate();
    const params = useParams();
    // console.log(params.id);

    const [data, setData] = useState(null);
    const [stuff, setStuff] = useState(null);
    const [boxOffice, setBoxOffice] = useState(null);

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

        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${params.id}/box_office`, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'e43bd03c-839c-4000-9f8b-274957f6431d',
                'Content-Type': 'application/json',
            },
        })
            .then(result => result.json())
            .then(json => setBoxOffice(json))
            .catch(err => console.log(err));
    }, []);

    // console.log(data);

    if (!data) {
        return console.log('loading');
    }

    if (!stuff) {
        return console.log('loadinggggdd');
    }

    if (!boxOffice) {
        return console.log('loadinggggdd');
    }
    // console.log(stuff)

    console.log(boxOffice);

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
                    <IconButton onClick={() =>{navigate(-1)}}>
                        <ArrowBackIcon />
                    </IconButton>
                </div>

                {/* <Cast stuff={stuff} setStuff={setStuff}/> */}

                <div className="cast" >
                    {stuff.slice(0, 10).map((item, count) => {
                        if (item.professionKey === "ACTOR")
                            return <Typography key={count + 1} variant="h6">{item.nameRu}</Typography>
                    })}
                </div>

                <div className="details__info" style={{ height: '450px', paddingTop: '80px', display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" paddingBottom={'50px'}>Детали</Typography>
                    <div className="details__info-items" style={{}}>
                        <Box sx={{ display: 'flex', paddingBottom: '10px', justifyContent: 'space-between' }}>
                            <Typography variant="body1">Страна </Typography>
                            <Box sx={{ display: 'flex', flexDirection: "column" }}>
                                {data.countries.map((country, key) => (
                                    <Typography key={key + 1} variant="body1">{country.country}</Typography>
                                ))}
                            </Box>

                        </Box>
                        <Box sx={{ display: 'flex', paddingBottom: '10px', justifyContent: 'space-between' }}>
                            <Typography variant="body1">Год </Typography>
                            <Typography variant="body1">{data.year} </Typography>
                        </Box>

                        <Stuff stuff={stuff} stuffItem={"Режиссер"} professionKey={"DIRECTOR"} />
                        <Stuff stuff={stuff} stuffItem={"Сценарий"} professionKey={"WRITTER"} />
                        <Box sx={{ display: 'flex', paddingBottom: '10px', justifyContent: 'space-between' }}>
                            <Typography variant="body1">Режиссер </Typography>
                            {stuff.map((item, count) => {
                                if (item.professionKey === "DIRECTOR")
                                    return <Typography key={count + 1} variant="body1">{item.nameRu}</Typography>
                            })}
                        </Box>
                        <Box sx={{ display: 'flex', paddingBottom: '10px', justifyContent: 'space-between' }}>
                            <Typography variant="body1">Сценарий</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                {stuff.map((item, count) => {
                                    if (item.professionKey === "WRITER")
                                        return <Typography key={count + 1} variant="body1">{item.nameRu}</Typography>
                                })}
                            </Box>
                        </Box>
                        <BoxOffice boxOffice={boxOffice} />

                        <FilmLength data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export function Cast({ stuff, setStuff }) {

    useEffect(() => {
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
    }, [])

    if (!stuff) {
        return console.log("Loading cast");
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


export function Stuff({ stuff, stuffItem, professionKey }) {
    return (
        <Box sx={{ display: 'flex', paddingBottom: '10px', justifyContent: 'space-between' }}>
            <Typography variant="body1">{stuffItem}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {stuff.map((item, count) => {
                    if (item.professionKey === `${professionKey}`)
                        return <Typography key={count + 1} variant="body1">{item.nameRu}</Typography>
                })}
            </Box>
        </Box>
    )
}

function BoxOffice({ boxOffice }) {
    if (Object.keys(boxOffice).includes('items')) {
        console.log(boxOffice.items.length)
    } else console.log("FA")
    // if (Object.keys(boxOffice.items[0]).includes('amount')) {
    //     return (
    //         <Box sx={{ display: 'flex', paddingBottom: '10px', justifyContent: 'space-between' }}>
    //             <Typography variant="body1">Бюджет </Typography>
    //             <Typography variant="body1">{boxOffice.items[0].amount} $</Typography>
    //         </Box>
    //     )
    // } else return null
}

function FilmLength({ data }) {
    if (data.filmLength !== null) {
        return (
            <Box sx={{ display: 'flex', paddingBottom: '10px', justifyContent: 'space-between' }}>
                <Typography variant="body1">Время </Typography>
                <Typography variant="body1">{data.filmLength} минут </Typography>
            </Box>
        )
    } else return null
}