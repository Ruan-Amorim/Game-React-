import useEventListener from 'use-event-listener';
import { useState } from 'react';
import { EDirecao } from '../../Componentes/Sizes';

function useHeroMoviment(initialPosition) {
  const [positionState, updatePositionState] = useState(initialPosition);
const [direcao, updateDirecaoState] = useState('RIGHT');
  
  useEventListener('keydown', (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === EDirecao.UP) {
      updatePositionState({ x: positionState.x, y: positionState.y + 1})
    }else if (event.key === EDirecao.LEFT) {
      updatePositionState({ x: positionState.x - 1, y: positionState.y})
      updateDirecaoState('LEFT');
    }if (event.key === EDirecao.DOWN) {
      updatePositionState({ x: positionState.x, y: positionState.y - 1})
    }if (event.key === EDirecao.RIGHT) {
      updatePositionState({ x: positionState.x + 1, y: positionState.y})
      updateDirecaoState('RIGHT');
    }
  });
  
  const [faca, setFaca] = useState<number>(10);
 
  const up = () => {
    if (positionState.y < 18) {
      updatePositionState({ x: positionState.x, y: positionState.y + 1})
     setFaca((prevFaca) => prevFaca + 1); }
     if (faca > 6){
      const currentPosition = window.scrollY;
          window.scroll({ top: currentPosition - 48, behavior: 'smooth' });
    }else{}
  };
  const down = () => {
      if (positionState.y > 1) {
      updatePositionState({ x: positionState.x, y: positionState.y - 1});
        setFaca((prevFaca) => prevFaca - 1);}
          if (faca < 17){
            const currentPosition = window.scrollY;
          window.scroll({ top: currentPosition + 48, behavior: 'smooth' });
          }
  };
  const right = () => {
    if ( positionState.x < 19) {
      updatePositionState({ x: positionState.x + 1, y: positionState.y})
      updateDirecaoState('RIGHT');}else{}
  };
  const left = () => {
    if (positionState.x > 0) {
      updatePositionState({ x: positionState.x - 1, y: positionState.y})
      updateDirecaoState('LEFT');}else{}
  };
  
  return {
    positionState: positionState,
    direcao: direcao,
    up: up,
    down: down,
    left: left,
    right: right,
  }
};
export default useHeroMoviment;