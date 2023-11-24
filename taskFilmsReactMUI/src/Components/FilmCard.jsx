import { Box, Card, CardActionArea, CardContent, CardMedia, Container, IconButton, Paper, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

export function FilmCard({name, poster, year}) {
    return (
        <div style={{paddingRight: '20px', paddingBottom: '20px'}}>
            <Card sx={{ width: '296px', height: '324px' }}>
                <Paper variant="elevation" elevation={1} square={true}>

                    <CardActionArea>
                        <CardMedia component={'img'} height={'240px'} src={`${poster}`} />
                    </CardActionArea>
                    <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                        <Box sx={{ textAlign: 'left' }}>
                            <Typography variant="h5">{name}</Typography>
                            <Typography variant="body2">{year}</Typography>
                        </Box>
                        <IconButton sx={{ width: '32px', height: '32px' }}>
                            <StarIcon />
                        </IconButton>
                    </CardContent>


                </Paper>
            </Card>
        </div>
    )
}