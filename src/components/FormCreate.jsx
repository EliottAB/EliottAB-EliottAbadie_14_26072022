import React from "react";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { departments, states } from "../formDatas";
import "../css/pages/home.css"
import { Input } from "../components/Input.jsx";

export function FormCreate(){

    function handleSubmit(e){
        e.preventDefault()
        if (true) {
            console.log("ok")
        }
    }

    return(
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <Input label="First Name" type="text" rules="text"/>
            <Input label="Last Name" type="text" rules="text"/>

            <LocalizationProvider dateAdapter={AdapterMoment}>
                <Input type="date" label="Date of Birth" rules="birthdate"/>
                <Input type="date" label="Start Date"/>
            </LocalizationProvider>

            <fieldset className="address">
                <legend>Address</legend>
                <Input type="text" label="City" rules="address"/>
                <Input type="text" label="Street" rules="address"/>
                <Input type="complete" label="State" options={states}/>
                <Input type="number" label="Zip Code"/>
            </fieldset>
            <Input type="complete" label="Department" options={departments}/>
            <button className="savebutton">Save</button>
        </form>
    )
}