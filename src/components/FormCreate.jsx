import React, { useState } from "react";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { departments, states } from "../formDatas";
import { Input } from "../components/Input.jsx";
import { useDispatch } from "react-redux"
import { createEmployee } from "../redux/store";
import { Modale } from "classic-modale";
import "../css/components/formcreate.css"

export function FormCreate(){

    const [firstName, setFirstName] = useState({error: false, value: ""})
    const [lastName, setLastName] = useState({error: false, value: ""})
    const [birthDate, setBirthDate] = useState({error: false, value: new Date()})
    const [startDate, setStartDate] = useState({error: false, value: new Date()})
    const [city, setCity] = useState({error: false, value: ""})
    const [street, setStreet] = useState({error: false, value: ""})
    const [state, setState] = useState({error: false, value: null})
    const [zip, setZip] = useState({error: false, value: ""})
    const [department, setDepartment] = useState({error: false, value: null})
    const [modaleOpen, setModaleOpen] = useState(false)
    
    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        if (!(firstName.error || lastName.error || birthDate.error || city.error ||street.error)) {
            dispatch(createEmployee({
                firstName: firstName.value,
                lastName: lastName.value,
                birthDate: birthDate.value,
                startDate: startDate.value,
                city: city.value,
                street: street.value,
                state: state.value,
                zip: zip.value,
                department: department.value
            }))
            setModaleOpen(true)
        }
    }

    return(
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <Input label="First Name" type="text" rules="text" inputInfos={firstName} setInfos={setFirstName}/>
            <Input label="Last Name" type="text" rules="text" inputInfos={lastName} setInfos={setLastName}/>

            <LocalizationProvider dateAdapter={AdapterMoment}>
                <Input type="date" label="Date of Birth" rules="birthdate" inputInfos={birthDate} setInfos={setBirthDate}/>
                <Input type="date" label="Start Date" inputInfos={startDate} setInfos={setStartDate}/>
            </LocalizationProvider>

            <fieldset className="address">
                <legend>Address</legend>
                <Input type="text" label="City" rules="address" inputInfos={city} setInfos={setCity}/>
                <Input type="text" label="Street" rules="address" inputInfos={street} setInfos={setStreet}/>
                <Input type="complete" label="State" options={states} inputInfos={state} setInfos={setState}/>
                <Input type="number" label="Zip Code" inputInfos={zip} setInfos={setZip}/>
            </fieldset>
            <Input type="complete" label="Department" options={departments} inputInfos={department} setInfos={setDepartment}/>
            <button className="savebutton" onClick={()=>test()}>Save</button>
            <Modale backgroundShadow opened={modaleOpen} setOpen={setModaleOpen} text="Employee successfully created !"/>
        </form>
    )
}