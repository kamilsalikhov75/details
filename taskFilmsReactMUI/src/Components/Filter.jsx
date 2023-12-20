import { Box, Container, IconButton, InputAdornment, Pagination, Paper, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { SelectUsage } from "./Select";
import { genresArr } from "../utils/library";
import { RangeSlider } from "./Slider";
import { AutocompleteSelect } from "./AutocompleteSelect";
import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { clearSearchItem, setSearchItem, setSortItem, setTypeItem } from "../actions/actions";

export function Filter({ page, setPage }) {
    
    const dispatch = useDispatch();
    const selectSortArr = useSelector(state => state.selectedSort)
    const selectTypeArr = useSelector(state => state.selectedType);
    const totalPages = useSelector(state => state.data.totalPages);    
    
    const [value, setValue] = useState([1911, 2024])
    const [text, setText] = useState('')
    
    const [selectedSort, setSelectedSort] = useState(selectSortArr[0]);
    const [selectedType, setSelectedType] = useState(selectTypeArr[0]);

    useEffect(()=>{
        dispatch(setSortItem(selectedSort));
        dispatch(setTypeItem(selectedType));
        dispatch(setSearchItem(text));
    });
    

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
                <TextField sx={{ width: '100%' }} onChange={(event) => {
                    
                    setText(event.target.value);
                }} value={text} label='название' InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={() => {
                                dispatch(clearSearchItem())
                                setText('');
                            }}>
                                <CloseIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}></TextField>
                <SelectUsage selectTitle={"Сортировать по:"} selectArr={selectSortArr} selected={selectedSort} setSelected={(event)=>{
                    setSelectedSort(event.target.value)
                    
                }}/>
                <SelectUsage selectTitle={"Тип:"} selectArr={selectTypeArr} selected={selectedType} setSelected={(event) => {
                    setSelectedType(event.target.value)
                }} />
                <Box>
                    <Typography variant="body1" textAlign={'left'} marginLeft={'16px'}>
                        Год релиза:
                    </Typography>
                    <RangeSlider rangeFrom={1911} rangeTo={2024} value={value} setValue={setValue} />
                </Box>
                <AutocompleteSelect selectArr={genresArr} selectTitle={"Жанры"}></AutocompleteSelect>
                <Box sx={{ flexGrow: 1 }} />
                <Pagination page={page} onChange={setPage} count={totalPages} sx={{ height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} size="medium" color="primary" />
            </Paper>
        </div>
    )
}
