import { Outlet } from "react-router-dom";
import { Header } from "./Header";
// import { Main } from "./Main";
import { createContext, useContext, useState } from "react";
import { ModalWindow } from "./Modals/Modal";
import { DialogModal, InputToken, RequestToken, } from "./Modals/DialogModal";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../store/reducers/dataReducer";




export function Layout() {
    const [modActive, setModActive] = useState(false)
    const [currentMod, setCurrentMod] = useState(null)

    const [email, setEmail] = useState(null)
    const [tokenValue, setTokenValue] = useState('');

    const dispatch = useDispatch();
    const token = useSelector(state => state.data.token);
    


    return (
        <Box>
            <Header setModActive={setModActive} />
            {modActive && <ModalWindow active={modActive} setActive={setModActive} setCurrentMod={setCurrentMod} currentMod={"requestToken"}>
                {currentMod === 'requestToken' && <RequestToken onCloseClick={setModActive} onClick={() => setCurrentMod("inputToken")} setValue={setEmail} />}
                {currentMod === 'inputToken' && <InputToken onCloseClick={setModActive} setValue={setTokenValue} onClick={() => {
                    dispatch(addToken(tokenValue));
                    setModActive(false);

                }} />}
            </ModalWindow>}
            <Outlet />
        </Box>


    )
}


