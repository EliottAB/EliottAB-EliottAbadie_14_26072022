import { Fragment, useState } from "react"
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

export function Home(){

    const [startdate, changeStartDate] = useState(new Date());
    const [birthdate, changeBirthDate] = useState(new Date());
    const [firstName, changeFirstName] = useState("")
    const [firstNameError, setFirstNameError] = useState({error: false, message: ""})

    function handleInput(change, value, setError){
        change(value)
        if (value.length < 3) {
            setError({error: true, message: "should have more than 2 letters"})
        }else{
            setError({error: false, message: ""})
        }
    }

    return(
        <Fragment>
            <img src={BACKGROUND} alt="" className="backgroundImage"/>
            <Header page="home"/>
            <main>
                <Logo></Logo>
                <form>
                    <TextField 
                        id="standard-basic" 
                        label="First Name" 
                        variant="standard" 
                        required
                        error={firstNameError.error}
                        helperText={firstNameError.message}
                        value={firstName}
                        onChange={(e) => handleInput(changeFirstName, e.target.value, setFirstNameError)}
                    />
                    <TextField 
                        id="standard-basic" 
                        label="Last Name" 
                        variant="standard" 
                        required
                    />
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                            label="Date of Birth"
                            value={birthdate}
                            onChange={(newValue) => {
                            changeBirthDate(newValue);
                            }}
                            renderInput={(params) => <TextField 
                                {...params} 
                                error 
                                helperText="pl"
                                required
                            />}
                        />
                        <DatePicker
                            label="Start Date"
                            value={startdate}
                            onChange={(newValue) => {
                            changeStartDate(newValue);
                            }}
                            renderInput={(params) => <TextField 
                                {...params} 
                                required
                            />}
                        />
                    </LocalizationProvider>
                    <fieldset className="address">
                        <legend>Address</legend>
                        <TextField 
                            id="standard-basic" 
                            label="City" 
                            variant="standard" 
                            required
                        />
                        <TextField 
                            id="standard-basic" 
                            label="Street" 
                            variant="standard" 
                            required
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={states}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="State" required/>}
                        />
                        <TextField 
                            id="standard-basic" 
                            label="Zip code" 
                            variant="standard" 
                            required
                            type="number"
                        />
                    </fieldset>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={departments}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Department" required/>}
                    />
                    <button className="savebutton">Save</button>
                </form>
            </main>
        </Fragment>
    )

}