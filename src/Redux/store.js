import { configureStore } from "@reduxjs/toolkit";
import arrayReducer from "./Reducers/arrayReducer";


export default configureStore({
    reducer:{
        array: arrayReducer,
        
    }
})