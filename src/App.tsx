import React from 'react';
import './App.css';
import Masmorra from './Componentes/Mapas/Masmorra';
import Hero from './Componentes/Players/Hero'
import DemonLevel1 from './Componentes/Monsters/DemonLevel1';
import DemonLevel2 from './Componentes/Monsters/DemonLevel2';
import Trap from './Componentes/Objetos/Trap';
import Chest from './Componentes/Objetos/Chest';


function App() {
  
  return (
    <div className="App">
      <Masmorra>
      <Trap />
      <DemonLevel1 x={3} y={1} />
      <DemonLevel1 x={10} y={3} />
      <DemonLevel2 x={14} y={8} />
      <DemonLevel2 x={5} y={5} />
      <Hero />
      </Masmorra>
    </div>
  );
}
export default App;