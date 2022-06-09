import React from 'react';
import Algobtn from './Algobtn';

const nav = () => {
   const btnClass = "transition all ease delay-100 p-3 m-2 text-white rounded hover:rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-red-500 hover:to-purple-500";

  return (
    <nav>
        <div class="justify-around flex p-2 mx-8">
            <Algobtn/>
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
            <div class="" id="newArray">
                <button type="button" class={btnClass}>New Array</button>
            </div>
            
        </div>
    </nav>
  )
}

export default nav;