import React from 'react';
import { SIZE_1_BLOCK } from '../Sizes';

const DemonLevel1 = () => {
  return (
    <div style={{
      position: 'absolute',
      width: SIZE_1_BLOCK,
      height: SIZE_1_BLOCK,
      paddingTop: 13,
      
      bottom: 6 * 48,
      left: 5 * 48,
      
      backgroundImage: " url(./midia/MINI-DEMON.png)",
      backgroundPosition: "left bottom",
      animation: "heroAnimation 0.9s steps(4) infinite",
      zIndex: 1,
    }}/>
  );
}
export default DemonLevel1;