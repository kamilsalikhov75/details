import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";


export function SelectUsage({selectTitle, selectArr, selected, setSelected}){

    

    return(
        <div>
            <FormControl variant="standard" sx={{ margin:'16px', height: '79px', display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'left'}}>
                <InputLabel>{selectTitle}</InputLabel>
                <Select sx={{ width: '100%'}} onChange={setSelected} value={selected} label={selectTitle}>
                    {selectArr.map((selectItem) => (
                        <MenuItem key={selectItem.id} defaultValue={selectItem.title} value={selectItem.title}>{selectItem.title}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}