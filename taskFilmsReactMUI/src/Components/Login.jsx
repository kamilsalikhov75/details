import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

export function DialogModal({dialogTitle, dialogTexFieldLabel, dialogButtonText, onCloseClick, onClick, setValue}) {

    return (
        <Paper elevation={24} sx={{ width: '444px', borderRadius: '4px', backgroundColor: 'white', aspectRatio: '444/183', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{padding: '16px 24px 16px 24px'}}>{dialogTitle}</Typography>
            <TextField onChange={(event) => setValue(event.target.value)} sx={{padding: '0px 24px 20px 24px', marginLeft: '24px', marginRight: '24px' }}  size="medium" label={dialogTexFieldLabel} variant="standard"></TextField>
            <Box sx={{ display: 'flex', padding: '8px', gap: '8px', marginLeft: 'auto'}}>
                <Button variant="text" onClick={() => onCloseClick(false)}>ОТМЕНА</Button>
                <Button variant="text" onClick={() => onClick()}>{dialogButtonText}</Button>
            </Box>
        </Paper>
    )
}


export function RequestToken({onCloseClick, onClick, setValue }){
    return(
        <DialogModal dialogTitle={"Запросить токен"} dialogTexFieldLabel={"почта"} dialogButtonText={"ЗАПРОСИТЬ"} onCloseClick={onCloseClick}  onClick={onClick} setValue={setValue}/>
    )
}

export function InputToken({onCloseClick, onClick, setValue}){
    return (
        <DialogModal dialogTitle={"Введите токен"} dialogTexFieldLabel={"токен"} dialogButtonText={"ОК"} onCloseClick={onCloseClick} onClick={onClick} setValue={setValue} />
    )
}
