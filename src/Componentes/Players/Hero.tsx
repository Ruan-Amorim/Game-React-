import useEventListener from 'use-event-listener';
import React from 'react';
import { SIZE_1_BLOCK } from '../Sizes';

const initialPosition = {
  x: 10,
  y: 10
};

const Hero = () => {
  const [positionState, updatePositionState] = React.useState(initialPosition);
  
  useEventListener('keydown', (event) => {
    if (event.key === 'w') {
      updatePositionState({ x: positionState.x, y: positionState.y + 1})
    }else if (event.key === 'a') {
      updatePositionState({ x: positionState.x - 1, y: positionState.y})
    }if (event.key === 's') {
      updatePositionState({ x: positionState.x, y: positionState.y - 1})
    }if (event.key === 'd') {
      updatePositionState({ x: positionState.x + 1, y: positionState.y})
    }
  })
  const faca = 1;
  const up = () => {
    if (faca == 1){
      updatePositionState({ x: positionState.x, y: positionState.y + 1})
    }else{}
  };
  const down = () => {
    if (faca == 1){
      updatePositionState({ x: positionState.x, y: positionState.y - 1})
    }else{}
  };
  const right = () => {
    if (faca == 1){
      updatePositionState({ x: positionState.x + 1, y: positionState.y})
    }else{}
  };
  const left = () => {
    if (faca == 1){
      updatePositionState({ x: positionState.x - 1, y: positionState.y})
    }else{}
  };
  
  return (
    <>
    <div style={{
       position: 'absolute',
       width: SIZE_1_BLOCK,
       height: SIZE_1_BLOCK,
       paddingTop: 13,
       
       left: SIZE_1_BLOCK * positionState.x,
       bottom: SIZE_1_BLOCK * positionState.y,
       
       backgroundImage: "url(./midia/HERO.png)",
       backgroundPosition: "left bottom",
       animation: "heroAnimation 0.9s steps(4) infinite",
       zIndex: 10,
    }} />
    
    <div className="container">
      <div className="controls">
        <div className="move-buttons">
          <button onClick={up} className="arrow-button up">&#9650;</button>
          <button onClick={down} className="arrow-button down">&#9660;</button>
          <button onClick={left} className="arrow-button left">&#9668;</button>
          <button onClick={right} className="arrow-button right">&#9658;</button>
        </div>
      </div>
      <div className="action-buttons">
        <button className="attack-button">1</button>
        <button className="attack-button">2</button>
        <button className="attack-button">3</button>
      </div>
    </div>
    </>
  );
};
export default Hero;