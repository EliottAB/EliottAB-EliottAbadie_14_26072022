import React, { useState } from "react";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { departments, states } from "../formDatas";
import "../css/pages/home.css"
import { Input } from "../components/Input.jsx";

export function FormCreate(){

    const [firstNameError, setFirstNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [birthDateError, setBirthDateError] = useState(false)
    const [cityError, setCityError] = useState(false)
    const [streetError, setStreetError] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        if (!(firstNameError || lastNameError || birthDateError || cityError || streetError)) {
            //include function to open modale
            console.log("ok")
        }
    }

    return(
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <Input label="First Name" type="text" rules="text" checkError={setFirstNameError}/>
            <Input label="Last Name" type="text" rules="text" checkError={setLastNameError}/>

            <LocalizationProvider dateAdapter={AdapterMoment}>
                <Input type="date" label="Date of Birth" rules="birthdate" checkError={setBirthDateError}/>
                <Input type="date" label="Start Date"/>
            </LocalizationProvider>

            <fieldset className="address">
                <legend>Address</legend>
                <Input type="text" label="City" rules="address" checkError={setCityError}/>
                <Input type="text" label="Street" rules="address" checkError={setStreetError}/>
                <Input type="complete" label="State" options={states}/>
                <Input type="number" label="Zip Code"/>
            </fieldset>
            <Input type="complete" label="Department" options={departments}/>
            <button className="savebutton">Save</button>
        </form>
    )
}