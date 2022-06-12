import React from 'react';
import Bars from './Bars';
import ValueMapper from '../../utils/ValueMapper';
import Complexity from '../Complexity';

const Canvas = ({array,points,complexity}) => {

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

        <Complexity complexity={complexity}/>


    </div>
  );
};

export default Canvas;
