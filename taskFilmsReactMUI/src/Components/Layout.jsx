import { Outlet } from "react-router-dom";
import { Header } from "./Header";
// import { Main } from "./Main";
import { createContext, useContext, useState } from "react";
import { ModalWindow } from "./Modals/Modal";
import { DialogModal, InputToken, RequestToken, } from "./Modals/DialogModal";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../store/reducers/dataReducer";
import { Authorization } from "./Modals/Authorization";




export function Layout() {
    const [modActive, setModActive] = useState(false)
    const [currentMod, setCurrentMod] = useState(null)

    const [email, setEmail] = useState(null)
    const [tokenValue, setTokenValue] = useState('');



    return (
        <Box>
            <Header setModActive={setModActive} />
            <Authorization modActive={modActive} setModActive={setModActive} currentMod={currentMod} setCurrentMod={setCurrentMod} setEmail={setEmail} setTokenValue={setTokenValue} tokenValue={tokenValue} />
            <Outlet />
        </Box>


    )
}

