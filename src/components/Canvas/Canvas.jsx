import React from 'react';
import Bars from './Bars';
import ValueMapper from '../../utils/ValueMapper';
import Complexity from '../Complexity';

const Canvas = ({array,points,TimeComplexity,SpaceComplexity}) => {

    const minBarHeight = 5;
    const maxBarHeight = 100;
    const minVal = array.lenght>0?Math.min(...array) : 10;
    const maxVal = array.lenght>0? Math.max(...array): 80;

    const heightMapper = ValueMapper(minVal,maxVal,minBarHeight,maxBarHeight)
    // console.log(heightMapper);

    return (
      <div class="w-4/5 bg-gradient-to-r from-green-400 to-blue-500 flex">
        <div class='bg-white w-9/12 px-2 h-[87%] my-10 ml-10 rounded drop-shadow-2xl flex'>
          {array.map((h, index) => (
            <Bars key={index} height={h} color={"blue"} />
          ))}
        </div>

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


    </div>
  );
};

export default Canvas;
