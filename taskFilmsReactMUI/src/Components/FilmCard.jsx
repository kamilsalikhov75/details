import { Box, Card, CardActionArea, CardContent, CardMedia, Container, IconButton, Paper, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

export function FilmCard() {
    return (
        <Container>
            <Card sx={{ width: '296px', height: '324px' }}>
                <Paper variant="elevation" elevation={1} square={true}>

                    <CardActionArea>
                        <CardMedia component={'img'} height={'240px'} src="https://static.hdrezka.ac/i/2014/1/22/h4442e483f19aey57g75d.jpg" />
                    </CardActionArea>
                    <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                        <Box sx={{ textAlign: 'left' }}>
                            <Typography variant="h5">Матрица</Typography>
                            <Typography variant="body2">Рейтинг 9</Typography>
                        </Box>
                        <IconButton sx={{ width: '32px', height: '32px' }}>
                            <StarIcon />
                        </IconButton>
                    </CardContent>


                </Paper>
            </Card>
        </Container>
    )
}