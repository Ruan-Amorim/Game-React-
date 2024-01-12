import React from 'react';

const Hero = () => {
  return (
    <div style={{
       position: 'absolute',
       width: 48,
       height: 48,
       paddingTop: 13,
       
       left: 48,
       bottom: 48,
       
       backgroundImage: "url(./midia/HERO.png)",
       backgroundPosition: "left bottom",
       animation: "heroAnimation 0.9s steps(4) infinite",
       zIndex: 10,
    }}/>
  )
}
export default Hero;