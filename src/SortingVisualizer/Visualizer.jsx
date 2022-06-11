import React,{useEffect, useState} from 'react';
import { Nav, Title,Complexity,SpeedSize ,CodeEditor,Canvas,Algobtn } from '../components';


const Visualizer = () => {
  
    const [array,setArray] = useState([]);
    
    
        
    var randomArray = [];
    
    var initialArray =[];
    for(let i = 0; i<55; i++) {
        initialArray.push(Math.floor(Math.random()*500+1))
    }
    const heightMapper = () =>{
            
            for(let i = 0; i<55; i++) {
                randomArray.push(Math.floor(Math.random()*500+1))
            }
            setArray(randomArray);
        }
        // console.log(randomArray);

    
   
   
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
                <button type="button" class={btnClass}>Play</button>
            </div>
           <SpeedSize/>
            
        </div>
    </nav>

        {/* <Complexity/> */}
     <div class='flex flex-row'>
        <CodeEditor/>
        <Canvas array={array.length>0?array:initialArray}/>
     </div>   



    </div>

  )
}

export default Visualizer;