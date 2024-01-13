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
      <DemonLevel1 />
      <DemonLevel2 />
      <Hero />
      </Masmorra>
    </div>
  );
}
export default App;