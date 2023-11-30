import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Main } from "./Main";

export function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        </>
        
    )
}