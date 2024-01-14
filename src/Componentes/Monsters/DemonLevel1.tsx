import React from 'react';
import { SIZE_1_BLOCK } from '../Sizes';
import useEnemyMoviment from '../../Hooks/UseEnemyMoviment/Index';

const DemonLevel1 = (props) => {
  const moviment = useEnemyMoviment({ x: props.x, y: props.y });
  
  return (
    <div style={{
      position: 'absolute',
      width: SIZE_1_BLOCK,
      height: SIZE_1_BLOCK,
      paddingTop: 13,
      
      left: SIZE_1_BLOCK * moviment.positionState.x,
       bottom: SIZE_1_BLOCK * moviment.positionState.y,
      
      backgroundImage: " url(./midia/MINI-DEMON.png)",
      backgroundPosition: "left bottom",
      animation: "heroAnimation 0.9s steps(4) infinite",
      transform: `scaleX(${moviment.direcao === 'RIGHT' ? 1 : -1})` ,
      zIndex: 1,
    }}/>
  );
}
export default DemonLevel1;