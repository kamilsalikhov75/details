import { AppBar, Box, Button, Icon, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export function Header() {
    return (
        <div style={{height: '64px'}}>
            <AppBar variant='elevation' elevation={4} square={true}>
                <Toolbar variant='regular' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='body1'>
                        Фильмы
                    </Typography>
                    <Stack direction={'row'} spacing={0}>
                        <IconButton sx={{ color: 'white' }}>
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