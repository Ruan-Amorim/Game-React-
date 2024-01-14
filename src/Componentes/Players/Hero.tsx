import useEventListener from 'use-event-listener';
import React, { useState, useEffect } from 'react';
import { SIZE_1_BLOCK } from '../Sizes';
import useHeroMoviment from '../../Hooks/UseHeroMoviment/Index';

const initialPosition = {
  x: 10,
  y: 9
};

const Hero = () => {
  const {up, down, left, right, positionState, direcao} = useHeroMoviment(initialPosition);
  
  
  useEffect(() => {
    window.scroll({ top: window.scrollY + 298, behavior: 'smooth' });
  }, []); // O array vazio [] garante que este efeito ocorra apenas uma vez, equivalente ao componentDidMount
  
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
       transform: `scaleX(${direcao === 'RIGHT' ? 1 : -1})` ,
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
      </div>*
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