import React from 'react';
import './App.css';
import FirstFloorMap from './components/Floor';


const App: React.FC = () => {


  return (
    <div>
      <header className="app-header">
        <h1 className="header-title">Mapa centra</h1>
      </header>
      <FirstFloorMap />
    </div>
  );
}

export default App;
