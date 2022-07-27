import { configureStore, createSlice } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  }

const employeesSlice = createSlice({
    name: "employees",
    initialState: {
        firstName: "",
        lastName: "",
        birthDate: "",
        startDate: "",
        adress: "",
        departement: ""
    },
    reducers:{
        createEmployee: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.birthDate = action.payload.birthDate
            state.startDate = action.payload.startDate
            state.adress = action.payload.adress
            state.departement = action.payload.departement
        }
    }
})

const persistedReducer = persistReducer(persistConfig, employeesSlice.reducer)

export const { createEmployee } = employeesSlice.actions

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
})

export const persistor = persistStore(store)