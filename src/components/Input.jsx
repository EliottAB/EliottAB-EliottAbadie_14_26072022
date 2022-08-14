import React from "react";
import { useState } from "react"
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "../css/pages/home.css"

export const Input = React.memo(({type, label, rules, options, inputInfos, setInfos})=>{
    
    const [inputError, setInputError] = useState({error: false, message: " "})
    
    function handleInput(value, setError, rules){
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
                error = true
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

        if (error) {
            setInfos({error: true, value: value})
        }
        if(!error){
            setInfos({error: false, value: value})
        }
    }
    
    function getComponent(){
        if (type === "text" || type === "number") {
            return(
                <TextField 
                    label={label}
                    variant="standard"
                    sx={{ width: "100%", maxWidth: 200}}
                    InputProps={{ inputProps: type === "number" ? { inputMode: 'numeric', pattern: "[0-9]{5}" } : {} }}
                    required
                    error={inputError.error}
                    helperText={inputError.message}
                    onChange={(e) => handleInput(e.target.value, setInputError, rules)}
                />
                )
            }
        if (type === "date") {
            return(
                <DatePicker
                    label={label}
                    value={inputInfos.value}
                    onChange={(e) => {
                        handleInput(e, setInputError, rules)
                    }}
                    renderInput={(params) => <TextField 
                        {...params}
                        error={inputError.error}
                        helperText={inputError.message}
                        required
                    />}
                />
            )
        }
        if (type === "complete") {
            return(
                <Autocomplete
                    disablePortal
                    options={options}
                    sx={{ width: "100%", maxWidth: 300}}
                    onChange={(e) => {
                        handleInput(e.target.textContent, setInputError)
                    }}
                    renderInput={(params) => <TextField 
                        {...params}
                        label={label}
                        required
                        error={inputError.error}
                        helperText={inputError.message}
                        />
                    }
                />
            )
        }
    }

    return(
        getComponent()
    )
})