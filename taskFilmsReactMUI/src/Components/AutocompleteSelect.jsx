import { Autocomplete, Checkbox, TextField } from "@mui/material";


export function AutocompleteSelect({selectArr, selectTitle}){
    return(
        <Autocomplete sx={{minHeight: '79px', margin: '16px'}}
        multiple
        options={selectArr}
        disableCloseOnSelect
        getOptionLabel={(option) => option.name}
        renderOption={(props, option, {selected}) =>(
            <li {...props}>
                <Checkbox
                checked={selected}
                />
                {option.name}
            </li>
        )}
        renderInput={(params) => (
            <TextField {...params} label={selectTitle} color="primary"/>
        )}
        />
    )
}