import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Main } from "./Main";
import { createContext, useContext, useState } from "react";
import { ModalWindow } from "./Modal";
import { DialogModal, InputToken, RequestToken, } from "./Login";
import { Box } from "@mui/material";
import { TokenProvider, useTokenData } from "../utils/userContext";


export function Layout() {
    const [modActive, setModActive] = useState(false)
    const [currentMod, setCurrentMod] = useState(null)

    const [email, setEmail] = useState(null)
    const [tokenValue, setTokenValue] = useState('');

    console.log(currentMod)
    
    const [token, setToken] = useTokenData();
    return (
        <Box>
            <Header setModActive={setModActive} />
            {modActive && <ModalWindow active={modActive} setActive={setModActive} setCurrentMod={setCurrentMod} currentMod={"requestToken"}>
                {currentMod === 'requestToken' && <RequestToken onCloseClick={setModActive} onClick={() => setCurrentMod("inputToken")} setValue={setEmail} />}
                {currentMod === 'inputToken' && <InputToken onCloseClick={setModActive} setValue={setTokenValue} onClick={() => {
                    localStorage.setItem("token", tokenValue)
                    setToken(tokenValue);
                    setModActive(false);
                    
                }} />}
            </ModalWindow>}
            <Outlet />
        </Box>
    )
}


