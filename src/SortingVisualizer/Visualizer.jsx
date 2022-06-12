import React,{ useState} from 'react';
import { Nav, Title,Complexity,SpeedSize ,CodeEditor,Canvas,Algobtn,Footer } from '../components';
import {bubbleSort,insertionSort,mergeSort,quickSort,selectionSort} from "../Algorithms/sortingUtils";
import generateArray from "../utils/ArrayGenerator";


const Visualizer = () => {
  
    const [array,setArray] = useState(generateArray);
    const [Algorithm,setAlgorithm] = useState(selectionSort);
    

    const generatedArray = generateArray();
    const heightMapper = () =>{setArray(generatedArray);}
    // console.log(array);

       
   
    const btnClass = "transition all ease delay-100 p-3 m-2 px-6 text-white rounded hover:rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-red-500 hover:to-purple-500";
    return (
    <div class="bg-[#000000] h-full">
        

        <Title/>
        {/* <Nav/>  */}
        <nav>
        <div class="justify-between flex p-2 mx-8">
            <Algobtn/>
            <div class="" id="newArray">
                <button type="button" class={btnClass} onClick={heightMapper}>New Array</button>
                <button type="button" class={btnClass}>play</button>
            </div>
           <SpeedSize/>
            
        </div>
    </nav>

        {/* <Complexity/> */}
     <div class='flex flex-row'>
        <CodeEditor value={Algorithm}/>
        <Canvas array={array}/>
     </div>   


       {/* <Footer/>  */}
    </div>

  )
}

export default Visualizer;