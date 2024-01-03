import { useDispatch } from "react-redux";
import { InputToken, RequestToken } from "./DialogModal";
import { ModalWindow } from "./Modal";
import {addToken} from '../../store/reducers/dataReducer'

export function Authorization({modActive, setModActive, currentMod, setCurrentMod, setEmail, setTokenValue, tokenValue}) {

    const dispatch = useDispatch();
    return (
        <>
            {modActive && <ModalWindow active={modActive} setActive={setModActive} setCurrentMod={setCurrentMod} currentMod={"requestToken"}>
                {currentMod === 'requestToken' && <RequestToken onCloseClick={setModActive} onClick={() => setCurrentMod("inputToken")} setValue={setEmail} />}
                {currentMod === 'inputToken' && <InputToken onCloseClick={setModActive} setValue={setTokenValue} onClick={() => {
                    dispatch(addToken(tokenValue))
                    setModActive(false);

                }} />}
            </ModalWindow>}
        </>

    )
}