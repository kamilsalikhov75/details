import { Box, Slider } from "@mui/material";
import { useState } from "react";


export function RangeSlider({rangeFrom, rangeTo}){

    const [value, setValue] = useState([rangeFrom, rangeTo])

    function valuetext(value){
        return `${value}`
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return(
        <Box sx={{ height: '42px', margin: '16px'}}>
            <Slider  min={rangeFrom} max={rangeTo} step={1} value={value} valueLabelDisplay="auto" getAriaLabel={()=>"range"} getAriaValueText={valuetext} onChange={handleChange}/>
        </Box>
    )
}