import React from "react";
import { Fragment } from "react"
import { Logo } from "../components/Logo";
import "../css/pages/home.css"
import BACKGROUND from "../assets/background.webp"
import { Header } from "../components/Header";
import { FormCreate } from "../components/FormCreate";

export function Home(){

    return(
        <Fragment>
            <img src={BACKGROUND} alt="" className="backgroundImage"/>
            <Header page="home"/>
            <main className="homemain">
                <Logo></Logo>
                <FormCreate/>
            </main>
        </Fragment>
    )

}