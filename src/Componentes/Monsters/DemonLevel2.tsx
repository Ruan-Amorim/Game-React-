import React from 'react';
import { SIZE_MUNDO } from '../Sizes';
import { SIZE_1_BLOCK } from '../Sizes';
const DemonLevel2 = () => {
  return (
    <div style={{
      position: 'absolute',
      width: 2 * SIZE_1_BLOCK,
      height: 2 * SIZE_1_BLOCK,
      
      bottom: 3 * 48,
      left: 3 * 48,
      
      backgroundImage: " url(./midia/DEMON.png)",
      animation: "Demons 1s steps(4) infinite",
      zIndex: 2,
    }}
    />
    )
}
export default DemonLevel2;