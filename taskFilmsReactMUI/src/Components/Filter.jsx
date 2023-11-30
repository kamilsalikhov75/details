import { Box, Container, IconButton, Pagination, Paper, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { SelectUsage } from "./Select";
import { genresArr, selectArr } from "../utils/library";
import { RangeSlider } from "./Slider";
import { AutocompleteSelect } from "./AutocompleteSelect";

export function Filter({selected, setSelected, page, setPage}) {
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
                    <SelectUsage selectTitle={"Сортировать по:"} selectArr={selectArr} selected={selected}  setSelected={setSelected}/>
                    <Box>
                        <Typography variant="body1" textAlign={'left'} marginLeft={'16px'}>
                            Год релиза:
                        </Typography>
                        <RangeSlider rangeFrom={1911} rangeTo={2024} />
                    </Box>
                    <AutocompleteSelect selectArr={genresArr} selectTitle={"Жанры"}></AutocompleteSelect>
                    <Box sx={{ flexGrow: 1 }} />
                    <Pagination page={page} onChange={setPage} sx={{ height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} size="medium" color="primary" count={35} />
                </Paper>
            </div>
    )
}