import React from 'react';
import Bars from './Bars';
import ValueMapper from '../../utils/ValueMapper';

const Canvas = ({array,points}) => {

    const minBarHeight = 5;
    const maxBarHeight = 100;
    const minVal = array.lenght>0?Math.min(...array) : 10;
    const maxVal = array.lenght>0? Math.max(...array): 80;

    const heightMapper = ValueMapper(minVal,maxVal,minBarHeight,maxBarHeight)
    // console.log(heightMapper);

    return (
      <div class="w-4/5 bg-gradient-to-r from-green-400 to-blue-500">
        <div class='bg-white w-11/12 px-2 h-[87%] m-10 rounded drop-shadow-2xl flex'>
          {array.map((h, index) => (
            <Bars key={index} height={h} color={"blue"} />
          ))}
        </div>
    </div>
  );
};

export default Canvas;
