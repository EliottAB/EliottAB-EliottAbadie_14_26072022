import { Fragment } from "react"
import { Header } from "../components/Header"

export function Home(){

    return(
        <Fragment>
            <Header/>
            <main>
                <form>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname"/>
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname"/>
                    <label htmlFor="birthdate">Date of Birth</label>
                    <input type="text" id="birthdate"/>
                    <label htmlFor="startdate">Start Date</label>
                    <input type="text" id="startdate"/>
                    <fieldset>
                        <legend>Address</legend>
                        <label htmlFor="street">Street</label>
                        <input type="text" id="street"/>
                        <label htmlFor="city">City</label>
                        <input type="text" id="city"/>
                    </fieldset>
                </form>
            </main>
        </Fragment>
    )

}