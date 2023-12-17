import { Box, Container, IconButton, InputAdornment, Pagination, Paper, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { SelectUsage } from "./Select";
import { genresArr, order, selectArr, type } from "../utils/library";
import { RangeSlider } from "./Slider";
import { AutocompleteSelect } from "./AutocompleteSelect";
import { fetchURLs } from "../utils/library";
import { useState } from "react";

export function Filter({selectedSort, setSelectedSort, selectedType, setSelectedType, page, setPage, setSearchItem, searchItem, totalPages}) {

    const [value, setValue] = useState([1911, 2024])

    return (
            <div style={{ marginLeft: '20px', width: '300px', position: 'fixed', zIndex: 1, top: '50%', marginTop: '-200px', height: '100vh' }}>
                <Paper sx={{ width: '300px' }} elevation={1}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
                        <Typography sx={{ marginLeft: '16px' }} variant="h6">
                            Фильтры
                        </Typography>
                        <IconButton sx={{ width: '48px', height: '48px' }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <TextField sx={{width: '100%'}} onChange={(event)=>setSearchItem(event.target.value)} value={searchItem} label='название' InputProps={{endAdornment:(
                        <InputAdornment position="end">
                            <IconButton onClick={() => setSearchItem('')}>
                                <CloseIcon/>
                            </IconButton> 
                        </InputAdornment>
                    )}}></TextField>
                    <SelectUsage selectTitle={"Сортировать по:"} selectArr={Object.keys(order)} selected={selectedSort}  setSelected={setSelectedSort}/>
                    <SelectUsage selectTitle={"Тип:"} selectArr={Object.keys(type)} selected={selectedType}  setSelected={setSelectedType}/>
                    <Box>
                        <Typography variant="body1" textAlign={'left'} marginLeft={'16px'}>
                            Год релиза:
                        </Typography>
                        <RangeSlider rangeFrom={1911} rangeTo={2024} value={value} setValue={setValue}/>
                    </Box>
                    <AutocompleteSelect selectArr={genresArr} selectTitle={"Жанры"}></AutocompleteSelect>
                    <Box sx={{ flexGrow: 1 }} />
                    <Pagination page={page} onChange={setPage} sx={{ height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} size="medium" color="primary" count={totalPages} />
                </Paper>
            </div>
    )
}