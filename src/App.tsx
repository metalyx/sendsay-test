import React from 'react';
import './App.scss';
import Calculator from './components/calculator/Calculator';
import DropZone from './components/drop-zone/DropZone';
import Switch from './components/switch/Switch';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>

        <Calculator />

        <div className='wrapper__left-column'>

          <div className='switch__wrapper'>
            <Switch />
          </div>

          <DropZone />

        </div>
      </div>
    </div>
  );
}

export default App;
