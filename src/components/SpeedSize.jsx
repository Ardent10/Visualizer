import React from 'react';

const SpeedSize = () => {
  return (
    <div class="flex" id="input">
        <div class='p-2 mr-2 text-white flex flex-col'>
        <span id="size" >Size</span>
        <input id="arr_sz" class='bg-#9a905d' type="range"/>
        </div> 

        <div class='p-2 mr-2 text-white flex flex-col'>
        <span id="speed">Speed</span>
        <input id="speed_input" type="range"/>
        </div>   
    </div>
  )
}

export default SpeedSize