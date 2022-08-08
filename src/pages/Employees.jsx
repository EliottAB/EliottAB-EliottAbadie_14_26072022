import { Fragment } from "react";
import BACKGROUND from "../assets/background.webp"
import { Header } from "../components/Header";
import "../css/pages/employees.css"

export function Employees(){

    return(
        <Fragment>
            <img src={BACKGROUND} alt="" className="backgroundImage"/>
            <Header/>
            <main className="employeesmain">
            </main>
        </Fragment>
    )

}