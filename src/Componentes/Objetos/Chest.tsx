import React from 'react';
import { SIZE_1_BLOCK } from '../Sizes';

const Chest = () => {
  return (
    <div style={{
      position: 'absolute',
      width: SIZE_1_BLOCK,
      height: SIZE_1_BLOCK,
      
      bottom: 5 * 48,
      left: 16 * 48,
      transform: "rotate(181deg)",
      backgroundImage: " url(./midia/CHEST.png)",
      backgroundPosition: "left bottom",
      animation: "Chest 0.9s steps(3) infinite",
      zIndex: 1,
    }}/>
  );
}
export default Chest;
