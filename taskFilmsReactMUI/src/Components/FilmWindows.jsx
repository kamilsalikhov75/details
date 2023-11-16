import { Box, IconButton, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export function FilmWindow(){
    return(
        <div style={{display: 'flex', padding:'20px', width: '100vw'}}>
            
            <div>
                <Box component={'img'} src="https://static.hdrezka.ac/i/2014/1/22/h4442e483f19aey57g75d.jpg"/>
            </div>

            <div className="details" style={{paddingLeft: '20px'}}>
                <div className="title" style={{display: 'flex', paddingBottom: '10px'}}>
                    <Typography variant="h3">Матрица (1999)</Typography>
                    <IconButton>
                        <StarIcon/>
                    </IconButton>
                </div>

                <div className="controls" style={{width: '35px', height: '35px', paddingBottom: '10px'}}>
                    <IconButton>
                        <ArrowBackIcon/>
                    </IconButton>
                </div>

                <div className="cast" >
                    <Typography variant="h6">Киану Ривз</Typography>
                    <Typography variant="h6">Лоренс Фишберн</Typography>
                    <Typography variant="h6">Кэрри-Энн Мосс</Typography>
                    <Typography variant="h6">Хьюго Уивинг</Typography>
                </div>

                <div className="details__info" style={{height: '450px', paddingTop: '80px', display: 'flex', flexDirection: 'column'}}>
                    <Typography variant="h4" paddingBottom={'50px'}>Детали</Typography>
                    <div className="details__info-items" style={{}}>
                        <Box sx={{display: 'flex', paddingBottom: '10px', justifyContent: 'space-between'}}>
                            <Typography variant="body1">Страна </Typography>
                            <Typography variant="body1">США</Typography>
                        </Box>
                        <Box sx={{display: 'flex', paddingBottom: '10px', justifyContent: 'space-between'}}>
                            <Typography variant="body1">Год </Typography>
                            <Typography variant="body1">1999 </Typography>
                        </Box>
                        <Box sx={{display: 'flex', paddingBottom: '10px', justifyContent: 'space-between'}}>
                            <Typography variant="body1">Режиссер </Typography>
                            <Typography variant="body1">США</Typography>
                        </Box>
                        <Box sx={{display: 'flex', paddingBottom: '10px', justifyContent: 'space-between'}}>
                            <Typography variant="body1">Сценарий </Typography>
                            <Typography variant="body1">США</Typography>
                        </Box>
                        <Box sx={{display: 'flex', paddingBottom: '10px', justifyContent: 'space-between'}}>
                            <Typography variant="body1">Бюджет </Typography>
                            <Typography variant="body1">США</Typography>
                        </Box>
                        <Box sx={{display: 'flex', paddingBottom: '10px', justifyContent: 'space-between'}}>
                            <Typography variant="body1">Зрители </Typography>
                            <Typography variant="body1">США</Typography>
                        </Box>
                        <Box sx={{display: 'flex', paddingBottom: '10px', justifyContent: 'space-between'}}>
                            <Typography variant="body1">Время </Typography>
                            <Typography variant="body1">США</Typography>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}