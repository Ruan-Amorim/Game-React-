import useEventListener from 'use-event-listener';
import useInterval from '@use-it/interval';
import { useState } from 'react';
import { EDirecao } from '../../Componentes/Sizes';

function useEnemyMoviment(initialPosition) {
  
  const [positionState, updatePositionState] = useState(initialPosition);
const [direcao, updateDirecaoState] = useState('RIGHT');
  
  useInterval(function move() {
    var random = Math.floor(Math.random() * 4);
   var directionArray = Object.values(EDirecao);
   const randomDirecao = directionArray[random];
    
    if (randomDirecao === EDirecao.UP && positionState.y < 18) {
      updatePositionState({ x: positionState.x, y: positionState.y + 1})
    }else if (randomDirecao === EDirecao.LEFT && positionState.x > 0) {
      updatePositionState({ x: positionState.x - 1, y: positionState.y})
      updateDirecaoState('LEFT');
    }if (randomDirecao === EDirecao.DOWN && positionState.y > 1) {
      updatePositionState({ x: positionState.x, y: positionState.y - 1})
    }if (randomDirecao === EDirecao.RIGHT && positionState.x < 19) {
      updatePositionState({ x: positionState.x + 1, y: positionState.y})
      updateDirecaoState('RIGHT');}
  
  }, 2000);
  
  return {
    positionState: positionState,
    direcao: direcao,
  }
};
export default useEnemyMoviment;