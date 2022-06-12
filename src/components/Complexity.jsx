import React,{useState} from 'react'

const Complexity = ({complexity}) => {
   
   const [TimeComplexity,setTimeComplexity] = useState('Θ(N^2)'); 
   const [SpaceComplexity,setSpaceComplexity] = useState('O(1)'); 
   
   if(complexity.includes('BubbleSort')){
        setTimeComplexity('Θ(N^2)')
        setSpaceComplexity('O(1)')
   }
   else if('HeapSort'){
        setTimeComplexity('Θ(N^2)')
        setSpaceComplexity('O(1)')
   }
   else if('SelectionSort'){
        setTimeComplexity('Θ(N^2)')
        setSpaceComplexity('O(1)')
   }
   else if('MergeSort'){
        setTimeComplexity('Θ(N^2)')
        setSpaceComplexity('O(1)')
   }
   else if('QuickSort'){
        setTimeComplexity('Θ(N^2)')
        setSpaceComplexity('O(1)')
   }
   else if('InsertionSort'){
        setTimeComplexity('Θ(N^2)')
        setSpaceComplexity('O(1)')
   }





  return (
    <div>
        <div class='bg-[#272822] text-white w-[170px]  h-[40%] my-10 ml-5 rounded drop-shadow-2xl flex flex-col'>
          <div class='p-8 mt-8'>
            <h1 class='mb-5'>Time Complexity: </h1>
            <h1 class='mb-5'>{TimeComplexity}</h1>
          </div>
        </div>
        <div class='bg-[#272822] text-white w-[170px]  h-[40%] ml-5 my-10 rounded drop-shadow-2xl flex flex-col'>
           <div class='p-8 mt-8'>
            <h1 class='mb-5'>Space Complexity: </h1>
            <h1 class='mb-5'>{SpaceComplexity}</h1>
           </div>
        </div>
        </div> 
  )
}

export default Complexity;