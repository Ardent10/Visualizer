import { createSlice } from "@reduxjs/toolkit";
import generateArray from "../../utils/ArrayGenerator";

const initialArray = generateArray(75);


export const arraySlice = createSlice({
    name: "Array",
    initialState: {
        array: initialArray,
        sizeofArray: initialArray.length,

    },

    reducers:{
      generateNewArray: (state,action)=>{
        state.array = action.payload.generatedArray;
      },
      changeSize: (state,action)=>{
        state.sizeofArray = action.payload.size;
      }, 
    }
})

export const {generateNewArray,changeSize} = arraySlice.actions;
export default arraySlice.reducer;