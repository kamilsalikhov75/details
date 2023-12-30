import { Autocomplete, Checkbox, TextField } from "@mui/material";


export function AutocompleteSelect({selectArr, selectTitle}){
    return(
        <Autocomplete sx={{minHeight: '79px', margin: '16px'}}
        multiple
        options={selectArr}
        disableCloseOnSelect
        getOptionLabel={(option) => option.genre}
        renderOption={(props, option, {selected}) =>(
            <li {...props}>
                <Checkbox
                checked={selected}
                />
                {option.genre}
            </li>
        )}
        renderInput={(params) => (
            <TextField {...params} label={selectTitle} color="primary"/>
        )}
        />
    )
}