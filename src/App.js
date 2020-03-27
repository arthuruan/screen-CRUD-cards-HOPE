import React from 'react';
import CardList from './components/CardList';

import './styles/app.css';
import './styles/global.css';
import './styles/sidebar.css';

import nouser from './icons/nouser.png';

function App() {
  return (
    <div id="app">
      <aside>
        <img src={nouser}/>
        <font>Olá, Arthur Ruan</font>
        <button>SAIR</button>
      </aside>

      <CardList />

    </div>
  );
}

export default App;
