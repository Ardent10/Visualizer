import React from 'react';

const Bars = ({ height, color,id,array }) => {
    // console.log(height,color,id,array.length);
    const width = (50/array.length)*4;
    // console.log(width);
  return (
        <div id={id} class={`transition-all bg-gradient-to-r from-cyan-400 to-blue-500 flex mx-px`} style={{height: `${height}px`,width:`${width}rem` }}/>
  );
};

export default Bars;
