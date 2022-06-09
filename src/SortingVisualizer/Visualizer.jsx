import React from 'react';
import { Nav, Title,Complexity,CodeEditor,Canvas } from '../components';


const Visualizer = () => {
  

    return (
    <div class="bg-[#000000] h-full">
        

        <Title/>
        <Nav/> 
        {/* <Complexity/> */}
        <CodeEditor/>
        <Canvas/>



    </div>



  )
}

export default Visualizer;