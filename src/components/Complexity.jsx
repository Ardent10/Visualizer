import React,{useEffect, useState} from 'react'

const Complexity = ({complexity}) => {
//    console.log(complexity);

   const [TimeComplexity,setTimeComplexity] = useState(complexity); 
   const [SpaceComplexity,setSpaceComplexity] = useState(complexity); 
   
   

    

          if(complexity.includes('BubbleSort')){
               console.log(complexity.includes('bubble'))
               setTimeComplexity('Θ(N^2)')
               setSpaceComplexity('O(1)')
          }
          else if(complexity.includes('HeapSort')){
               setTimeComplexity('Θ(NLogN)')
               setSpaceComplexity('O(1)')
          }
          else if(complexity.includes('SelectionSort')){
               setTimeComplexity('Θ(N^2)')
               setSpaceComplexity('O(1)')
          }
          else if(complexity.includes('MergeSort')){
               setTimeComplexity('Θ(NLogN)')
               setSpaceComplexity('O(N)')
          }
          else if(complexity.includes('QuickSort')){
               setTimeComplexity('Θ(NLogN)')
               setSpaceComplexity('O(N)')
          }
          else if(complexity.includes('InsertionSort')){
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