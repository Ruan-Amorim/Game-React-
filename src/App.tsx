import React, { useEffect } from 'react';
import './App.css';
import Hero from './Componentes/Players/Hero';
import Masmorra from './Componentes/Mapas/Masmorra';
import DemonLevel1 from './Componentes/Monsters/DemonLevel1';
import DemonLevel2 from './Componentes/Monsters/DemonLevel2';
import Controle from './Componentes/Botao';
import Trap from './Componentes/Objetos/Trap';
import Chest from './Componentes/Objetos/Chest';


function App() {
  return (
    <div className="App">
     <Masmorra>
     
      <Hero />
      <DemonLevel1 />
      <DemonLevel2 />
      <Trap />
      <Chest />
      
      <Controle />
     </Masmorra>
    </div>
  );
}

export default App;