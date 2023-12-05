import { Box, Modal, Typography } from "@mui/material";
import { useEffect } from "react";

export function ModalWindow({active, setActive, children, setCurrentMod, currentMod}){
    useEffect(()=>{
        setCurrentMod(currentMod)
    }, [currentMod])
    
    return(
        <Box >
            <Modal open={active} onClose={()=> setActive(false)}>
                
                <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    
                    {children} 
                </Box>
            </Modal>
        </Box>
        
    )
}