import React from 'react';
import Slider from '@mui/material/Slider';

const SpeedSize = ({array}) => {

  console.log(array.length)
  
  const btnClass = "tracking-wider w-40 p-2 m-1 text-xl text-white flex flex-col tracking-wider px-6 text-white rounded-lg bg-gradient-to-r from-green-400 to-blue-500";
  return (
    <div class="flex" id="input">
        <div class={btnClass}>
        <span id="size">Size</span>
          <Slider
          defaultValue={array.length}
          // value={array.length}
          min={10}
          max={100}
          
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        </div> 

        <div class={btnClass}>
        <span id="speed">Speed</span>
          <Slider
          defaultValue={50}
          min={10}
          max={100}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        </div>   
    </div>
  )
}

export default SpeedSize