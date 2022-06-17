import { createSlice } from "@reduxjs/toolkit";
import generateArray from "../../utils/ArrayGenerator";
import bubbleSort from "../../Algorithms/bubbleSort";

const initialArray = generateArray(75);


export const arraySlice = createSlice({
    name: "Array",
    initialState: {
        array: initialArray,
        size: initialArray.length,
        speed: 50,
        algorithm: bubbleSort,
        timeComplexity: 'Θ(N^2)',
        spaceComplexity: 'O(1)',

    },

    reducers:{
      generateNewArray: (state,action)=>{
        state.array = action.payload.generatedArray;
      },
      changeSize: (state,action)=>{
        state.size = action.payload.size;
      },
      changeSpeed: (state,action)=>{
        state.speed = action.payload.speed
      },
      changeAlgorithm: (state,action)=>{
        state.algorithm = action.payload.selectedAlgorithm;
      },
      changeTimeComplexity: (state,action)=>{
        state.timeComplexity = action.payload.timeComplexity;
      }, 
      changeSpaceComplexity: (state,action)=>{
        state.spaceComplexity = action.payload.spaceComplexity;
      }, 


    }
})

export const {
  generateNewArray,
  changeSize,
  changeSpeed,
  changeAlgorithm,
  changeTimeComplexity,
  changeSpaceComplexity

} = arraySlice.actions;
export default arraySlice.reducer;