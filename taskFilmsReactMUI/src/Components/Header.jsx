import { AppBar, Box, Button, Icon, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export function Header({setModActive}) {
    return (
        <div style={{height: '64px'}}>
            <AppBar sx={{height: '64px'}} variant='elevation' elevation={4} square={true}>
                <Toolbar variant='regular' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='body1'>
                        Фильмы
                    </Typography>
                    <Stack direction={'row'} spacing={0}>
                        <IconButton sx={{ color: 'white' }} onClick={()=> setModActive(true)}>
                            <Icon color='white'>
                                <AccountCircleIcon />
                            </Icon>
                        </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>
        </div>

    )
}