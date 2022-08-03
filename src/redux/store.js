import { configureStore, createSlice } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from 'redux-persist';
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
  }

const employeesSlice = createSlice({
    name: "employees",
    initialState: {
        employees: []
    },
    reducers:{
        createEmployee: (state, action) => {
            let employee = {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                birthDate: action.payload.birthDate,
                startDate: action.payload.startDate,
                adress: action.payload.adress,
                department: action.payload.department,
            }
            state.employees.push(employee)
        }
    }
})

const persistedReducer = persistReducer(persistConfig, employeesSlice.reducer)

export const { createEmployee } = employeesSlice.actions

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [],
})

export const persistor = persistStore(store)