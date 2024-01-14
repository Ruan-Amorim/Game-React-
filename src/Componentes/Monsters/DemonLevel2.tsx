import React from 'react';
import { SIZE_MUNDO } from '../Sizes';
import { SIZE_1_BLOCK } from '../Sizes';
import useEnemyMoviment from '../../Hooks/UseEnemyMoviment/Index';

const DemonLevel2 = (props) => {
  const moviment = useEnemyMoviment({ x: props.x, y: props.y });
  return (
    <div style={{
      position: 'absolute',
      width: 2 * SIZE_1_BLOCK,
      height: 2 * SIZE_1_BLOCK,
      
      left: SIZE_1_BLOCK * moviment.positionState.x,
       bottom: SIZE_1_BLOCK * moviment.positionState.y,
      
      backgroundImage: " url(./midia/DEMON.png)",
      animation: "Demons 1s steps(4) infinite",
      transform: `scaleX(${moviment.direcao === 'RIGHT' ? 1 : -1})` ,
      zIndex: 2,
    }}
    />
    )
}
export default DemonLevel2;