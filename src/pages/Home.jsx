import React from "react";
import { Fragment, useState, useMemo } from "react"
import { Logo } from "../components/Logo"
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { departments, states } from "../formDatas";
import "../css/pages/home.css"
import BACKGROUND from "../assets/background.jpg"
import { Header } from "../components/Header";

function PureComponent(props){
    const pureInput = useMemo(()=>{
        return(
            props.component
        )
    }, [props.listen])
    return pureInput
}

export const Home = React.memo(()=> {

    
    const [firstName, changeFirstName] = useState("")
    const [firstNameError, setFirstNameError] = useState({error: false, message: " "})

    const [lastName, changeLastName] = useState("")
    const [lastNameError, setLastNameError] = useState({error: false, message: " "})
    
    const [birthdate, changeBirthDate] = useState(new Date());
    const [birthdateError, setBirthDateError] = useState({error: false, message: " "})
    
    const [startdate, changeStartDate] = useState(new Date());
    const [startdateError, setStartDateError] = useState({error: false, message: " "})
    
    const [city, changeCity] = useState("");
    const [cityError, setCityError] = useState({error: false, message: " "})
    
    const [street, changeStreet] = useState("");
    const [streetError, setStreetError] = useState({error: false, message: " "})

    const [state, changeState] = useState("");
    const [stateError, setStateError] = useState({error: false, message: " "})

    const [zipcode, changeZipcode] = useState("");
    const [zipcodeError, setZipcodeError] = useState({error: false, message: " "})

    const [department, changeDepartment] = useState("");
    const [departmentError, setDepartmentError] = useState({error: false, message: " "})
    
    function handleInput(change, value, setError, rules){
        change(value)
        let error = false
        if (rules === "text") {
            if (value.length > 0 && value.length < 3) {
                setError({error: true, message: "Must have more than 2 letters"})
                error = true
            }
            if(value.match(/[^A-Za-zÀ-ÿ-]/)){
                setError({error: true, message: "Must only include letters"})
                error = true
            }
            if(error === false){
                setError({error: false, message: " "})
            }
        }

        if (rules === "birthdate") {
            if(value > new Date()){
                setError({error: true, message: "Negative birth date"})
            }else{
                setError({error: false, message: " "})
            }
        }
        
        if (rules === "address") {
            if(value.match(/[^A-Za-zÀ-ÿ- ]/)){
                setError({error: true, message: "Bad character"})
                error = true
            }else{
                setError({error: false, message: " "})
            }
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        if (!
            (firstNameError.error ||
            lastNameError.error ||
            cityError.error ||
            streetError.error ||
            stateError.error ||
            zipcodeError.error ||
            departmentError.error ||
            birthdateError.error ||
            startdateError.error)
        ) {
            console.log("ok")
        }
    }

    return(
        <Fragment>
            <img src={BACKGROUND} alt="" className="backgroundImage"/>
            <Header page="home"/>
            <main className="homemain">
                <Logo></Logo>
                <form onSubmit={(e)=>{handleSubmit(e)}}>
                    <PureComponent
                        component={
                            <TextField 
                                id="standard-basic" 
                                label="First Name" 
                                variant="standard" 
                                required
                                error={firstNameError.error}
                                helperText={firstNameError.message}
                                value={firstName}
                                onChange={(e) => handleInput(changeFirstName, e.target.value, setFirstNameError, "text")}
                            />
                        }
                        listen={firstName}
                    />
                    <PureComponent
                        component={
                            <TextField 
                                id="standard-basic" 
                                label="Last Name" 
                                variant="standard" 
                                required
                                error={lastNameError.error}
                                helperText={lastNameError.message}
                                value={lastName}
                                onChange={(e) => handleInput(changeLastName, e.target.value, setLastNameError, "text")}
                            />
                        }
                        listen={lastName}
                    />
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <PureComponent
                            component={
                                <DatePicker
                                    label="Date of Birth"
                                    value={birthdate}
                                    onChange={(e) => {
                                        handleInput(changeBirthDate, e, setBirthDateError, "birthdate")
                                    }}
                                    renderInput={(params) => <TextField 
                                        {...params} 
                                        error={birthdateError.error}
                                        helperText={birthdateError.message}
                                        required
                                    />}
                                />
                            }
                            listen={birthdate}
                        />
                        <PureComponent
                            component={
                                <DatePicker
                                    label="Start Date"
                                    value={startdate}
                                    onChange={(e) => {
                                        handleInput(changeStartDate, e, setStartDateError)
                                    }}
                                    renderInput={(params) => <TextField 
                                        {...params} 
                                        error={startdateError.error}
                                        helperText={startdateError.message}
                                        required
                                    />}
                                />
                            }
                            listen={startdate}
                        />
                    </LocalizationProvider>
                    <fieldset className="address">
                        <legend>Address</legend>
                        <PureComponent
                            component={
                                <TextField 
                                    id="standard-basic" 
                                    label="City" 
                                    variant="standard"
                                    error={cityError.error}
                                    helperText={cityError.message}
                                    required
                                    value={city}
                                    onChange={(e) => {
                                        handleInput(changeCity, e.target.value, setCityError, "address")
                                    }}
                                />
                            }
                            listen={city}
                        />
                        <PureComponent
                            component={
                                <TextField 
                                    id="standard-basic" 
                                    label="Street" 
                                    variant="standard" 
                                    error={streetError.error}
                                    helperText={streetError.message}
                                    required
                                    value={street}
                                    onChange={(e) => {
                                        handleInput(changeStreet, e.target.value, setStreetError, "address")
                                    }}
                                />
                            }
                            listen={street}
                        />
                        <PureComponent
                            component={
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={states}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField 
                                        {...params}
                                        label="State"
                                        required
                                        error={stateError.error}
                                        helperText={stateError.message}
                                        value={state}
                                        onChange={(e) => {
                                            handleInput(changeState, e.target.value, setStateError)
                                        }}
                                        />
                                    }
                                />
                            }
                            listen={state}
                        />
                        <PureComponent
                            component={
                                <TextField 
                                    id="standard-basic" 
                                    label="Zip code" 
                                    variant="standard" 
                                    type="number"
                                    required
                                    error={zipcodeError.error}
                                    helperText={zipcodeError.message}
                                    value={zipcode}
                                    onChange={(e) => {
                                        handleInput(changeZipcode, e.target.value, setZipcodeError)
                                    }}
                                />
                            }
                            listen={zipcode}
                        />

                    </fieldset>
                    <PureComponent
                            component={
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={departments}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField 
                                        {...params}
                                        label="Department"
                                        required
                                        error={departmentError.error}
                                        helperText={departmentError.message}
                                        value={department}
                                        onChange={(e) => {
                                            handleInput(changeDepartment, e.target.value, setDepartmentError)
                                        }}
                                        />
                                    }
                                />
                            }
                            listen={department}
                        />
                    <button className="savebutton">Save</button>
                </form>
            </main>
        </Fragment>
    )

})