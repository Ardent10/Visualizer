import React from 'react';

const Bars = ({ height, color }) => {
    console.log(height,color);
    // const roundedHeight = Math.floor(height/10);
  return (
        <div class={`bg-gradient-to-r from-cyan-400 to-blue-500 w-4 flex mx-px`} style={{height: `${height}px` }}/>
  );
};

export default Bars;
