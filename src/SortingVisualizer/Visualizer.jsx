import React,{ useState} from 'react';
import { Nav, Title,Complexity,SpeedSize ,CodeEditor,Canvas,Algobtn,Footer } from '../components';
import {bubbleSort,insertionSort,mergeSort,quickSort,selectionSort,heapSort} from "../Algorithms/sortingUtils";
import generateArray from "../utils/ArrayGenerator";


const Visualizer = () => {
  
    const [array,setArray] = useState(generateArray);
    const [Algorithm,setAlgorithm] = useState(bubbleSort);
    

    const generatedArray = generateArray();
    const heightMapper = () =>{setArray(generatedArray);}
    // console.log(array);

    
    const algoSelector = (e) =>{
        const algorithmSelected = e.target.value;
        setAlgorithm(algorithmSelected);
        // console.log(algorithmSelected);
    }
    
    
    // Classes   
    const optionClass = 'tracking-wider border-2 rounded bg-gradient-to-r from-green-400 to-blue-500'
    const btnClass = "tracking-wider transition all ease delay-100 p-3 m-2 px-6 text-white rounded hover:rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-red-500 hover:to-purple-500";
    
    return (
    <div class="bg-[#000000] h-full">
        

        <Title/>
        {/* <Nav/>  */}
        <nav>
        <div class="justify-between flex p-2 mx-8">
        <div class="flex flex-row pr-4 bg-gradient-to-r from-green-400 to-blue-500 rounded">
            <h3 class='text-white p-5 pr-2 text-xl tracking-wider'>Algorithm: </h3>

            <select class='mx-1 w-40 h-7 m-5 border-solid border-2 rounded' onChange={algoSelector}>
                <option value={bubbleSort} class={optionClass}>Bubble Sort</option>
                <option value={insertionSort} class={optionClass}>Insertion Sort</option>
                <option value={selectionSort} class={optionClass}>Selection Sort</option>
                <option value={quickSort} class={optionClass}>Quick Sort</option>
                <option value={mergeSort} class={optionClass}>Merge Sort</option>
                <option value={heapSort} class={optionClass}>Heap Sort</option>
            </select>

            </div>
            <div class="" id="newArray">
                <button type="button" class={btnClass} onClick={heightMapper}>New Array</button>
                <button type="button" class={btnClass}>Run</button>
            </div>
           <SpeedSize addClass={btnClass}/>
            
        </div>
    </nav>

        {/* <Complexity/> */}
     <div class='flex flex-row'>
        <CodeEditor value={Algorithm}/>
        <Canvas array={array} complexity={Algorithm}/>
     </div>   


       {/* <Footer/>  */}
    </div>

  )
}

export default Visualizer;