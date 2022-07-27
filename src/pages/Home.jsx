import { Fragment, useState } from "react"
import { Header } from "../components/Header"
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { states } from "../states";

export function Home(){

    const [selectedDate, handleDateChange] = useState(new Date());

    return(
        <Fragment>
            <Header/>
            <main>
                <form>
                    <TextField id="standard-basic" label="First Name" variant="standard" />
                    <TextField id="standard-basic" label="Last Name" variant="standard" />
                    <TextField id="standard-basic" type="date" label="Date of Birth" variant="standard" />
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                            label="Basic example"
                            value={selectedDate}
                            onChange={(newValue) => {
                            handleDateChange(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={states}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="State" />}
                    />
                </form>
            </main>
        </Fragment>
    )

}