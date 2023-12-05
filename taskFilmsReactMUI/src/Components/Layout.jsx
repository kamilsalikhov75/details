import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Main } from "./Main";
import { useState } from "react";
import { ModalWindow } from "./Modal";
import { DialogModal, InputToken, RequestToken, } from "./Login";
import { Box } from "@mui/material";



export function Layout() {
    const [modActive, setModActive] = useState(false)
    const [currentMod, setCurrentMod] = useState(null)

    const [email, setEmail] = useState(null);
    const [token, setToken] = useState(null);
    const isAuthorized = false

    console.log(currentMod)
    return (
        <Box>
            <Header setModActive={setModActive} />
            {modActive && <ModalWindow active={modActive} setActive={setModActive} setCurrentMod={setCurrentMod} currentMod={"requestToken"}>
                {currentMod === 'requestToken' && <RequestToken onCloseClick={setModActive} onClick={() => setCurrentMod("inputToken")} setValue={()=> setEmail}/>}
                {currentMod === 'inputToken' && <InputToken onCloseClick={setModActive} onClick={isAuthorized = true} setValue={()=>setToken}/>}
            </ModalWindow>}
            <Outlet />
        </Box>
    )
}
