import React from 'react';
import '../App.css';


const Controle = () => {
  return (
    <div className="container">
      <div className="controls">
        <div className="move-buttons">
          <button  className="arrow-button up">&#9650;</button>
          <button  className="arrow-button down">&#9660;</button>
          <button className="arrow-button left">&#9668;</button>
          <button className="arrow-button right">&#9658;</button>
        </div>
      </div>
      <div className="action-buttons">
        <button className="attack-button">1</button>
        <button className="attack-button">2</button>
        <button className="attack-button">3</button>
      </div>
    </div>
  );
};

export default Controle;