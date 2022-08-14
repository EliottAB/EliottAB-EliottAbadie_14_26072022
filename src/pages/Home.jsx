import React from "react";
import { Fragment } from "react"
import LOGO from "../assets/logo.webp"
import "../css/pages/home.css"
import BACKGROUND from "../assets/background.webp"
import { Header } from "../components/Header";
import { FormCreate } from "../components/FormCreate";

export function Home(){

    return(
        <Fragment>
            <img src={BACKGROUND} alt="background" className="backgroundImage"/>
            <Header page="home"/>
            <main className="homemain">
                <div className="hrnetlogo">
                    <h1 className="hrneth1">HRnet</h1>
                    <img className="logoback" src={LOGO} alt="HRnet logo" draggable="false" />
                </div>
                <FormCreate/>
            </main>
        </Fragment>
    )

}