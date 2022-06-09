import React from 'react';
import Bars from './Bars';
import ValueMapper from '../../utils/ValueMapper';

const Canvas= ({ array, points }) => {
  const minBarHeight = 5;
  const maxBarHeight = 100;

  const minVal = Math.min(...array);
  const maxVal = Math.max(...array);

  const heightMapper = ValueMapper(
    [minVal, maxVal],
    [minBarHeight, maxBarHeight]
  );


  return (
    <div class="">
      {array.map((nr, index) => (
        <Bars key={nr} height={heightMapper(nr) + '%'} color={points[index]} />
      ))}
    </div>
  );
};

export default Canvas;
