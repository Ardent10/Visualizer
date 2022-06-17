import React,{ useEffect, useState} from 'react';
import Slider from '@mui/material/Slider';
import { Nav, Title,Complexity,SpeedSize ,CodeEditor,Canvas,Algobtn,Footer } from '../components';
import {bubbleSort,insertionSort,mergeSort,quickSort,selectionSort,heapSort} from "../Algorithms/sortingUtils";
import generateArray from "../utils/ArrayGenerator";
import { generateNewArray,changeSize } from '../Redux/Reducers/arrayReducer';
import { useSelector,useDispatch } from 'react-redux';





const Visualizer = () => {
  
    var generatedArray = useSelector(state=>state.array.array);
    const [array,setArray] = useState(generatedArray);

    const [Algorithm,setAlgorithm] = useState(bubbleSort);
    const [TimeComplexity,setTimeComplexity] = useState('Θ(N^2)')
    const [SpaceComplexity,setSpaceComplexity] = useState('O(1)')
    
    
    const dispath = useDispatch();

    const heightMapper = () =>{
        generatedArray = generateArray(75);
        const size = generatedArray.length;

        dispath(generateNewArray({generatedArray}));
        dispath(changeSize({size}));
        setArray(generatedArray);
    }

    
    const algoSelector = (e) =>{
        const algorithmSelected = e.target.value;
        setAlgorithm(algorithmSelected);

        if(algorithmSelected.includes('BubbleSort')){
            setTimeComplexity('Θ(N^2)')
            setSpaceComplexity('O(1)')
       }
       else if(algorithmSelected.includes('HeapSort')){
            setTimeComplexity('Θ(NLogN)')
            setSpaceComplexity('O(1)')
       }
       else if(algorithmSelected.includes('SelectionSort')){
            setTimeComplexity('Θ(N^2)')
            setSpaceComplexity('O(1)')
       }
       else if(algorithmSelected.includes('MergeSort')){
            setTimeComplexity('Θ(NLogN)')
            setSpaceComplexity('O(N)')
       }
       else if(algorithmSelected.includes('QuickSort')){
            setTimeComplexity('Θ(NLogN)')
            setSpaceComplexity('O(N)')
       }
       else if(algorithmSelected.includes('InsertionSort')){
            setTimeComplexity('Θ(N^2)')
            setSpaceComplexity('O(1)')
       }

    }
    
    const changeArraySize = (e)=>{
        const newArraySize = e.target.value; 
        generatedArray = generateArray(newArraySize);
        const size = generatedArray.length;

        dispath(generateNewArray({generatedArray}));
        dispath(changeSize({size}));
        setArray(generatedArray);

        // console.log(newArraySize);
    }

    const changeSpeed = (e)=>{
        const speed = e.target.value;
        console.log("New Speed",speed );
    }


    
    // Classes   
    const speedSizeClass = "tracking-wider text-center w-40 p-2 m-1 text-xl text-white flex flex-col tracking-wider px-6 text-white rounded-lg bg-gradient-to-r from-green-400 to-blue-500";
    const optionClass = 'tracking-wider border-2 rounded bg-gradient-to-r from-green-400 to-blue-500'
    const btnClass = "tracking-wider transition all ease delay-100 p-5 m-2 px-6 text-white text-xl rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-red-500 hover:to-purple-500";
    
    return (
    <div className="bg-[#000000] h-full">
        

        <Title/>
        {/* <Nav/>  */}
        <nav>
        <div className="justify-between flex p-2 mx-8">
        <div class="flex flex-row pr-4 m-2 bg-gradient-to-r from-green-400 to-blue-500 rounded">
            <h3 className='text-white p-5 pr-2 text-xl tracking-wider'>Algorithm: </h3>

            <select class='mx-1 w-40 h-7 m-5 border-solid border-2 rounded' onChange={algoSelector}>
                <option value={bubbleSort} id='1' className={optionClass}>Bubble Sort</option>
                <option value={insertionSort} id='2' className={optionClass}>Insertion Sort</option>
                <option value={selectionSort} id='3' className={optionClass}>Selection Sort</option>
                <option value={quickSort} id='4' className={optionClass}>Quick Sort</option>
                <option value={mergeSort} id='5' class={optionClass}>Merge Sort</option>
                <option value={heapSort} id='6' className={optionClass}>Heap Sort</option>
            </select>

        </div>
            <div class="" id="newArray">
                <button type="button" class={btnClass} onClick={heightMapper}>New Array</button>
                <button type="button" class={btnClass}>Run</button>
            </div>
           

           {/* <SpeedSize array = {array}/> */}

            <div class="flex" id="input">
                <div class={speedSizeClass}>
                <span id="size">Size</span>
                <Slider
                defaultValue={array.length}
                // value={array.length}
                min={10}
                max={150}
                onChange={changeArraySize}
                aria-label="Small"
                valueLabelDisplay="auto"
                />
                </div> 

                <div class={speedSizeClass}>
                <span id="speed">Speed</span>
                <Slider
                defaultValue={50}
                min={10}
                max={100}
                onChange={changeSpeed}
                aria-label="Small"
                valueLabelDisplay="auto"
                />
            </div>   
    </div>

            
        </div>
    </nav>

        {/* <Complexity/> */}
     <div class='flex flex-row'>
        <CodeEditor value={Algorithm}/>
        <Canvas array={array} TimeComplexity={TimeComplexity} SpaceComplexity={SpaceComplexity}/>
     </div>   


       <Footer/> 
    </div>

  )
}

export default Visualizer;