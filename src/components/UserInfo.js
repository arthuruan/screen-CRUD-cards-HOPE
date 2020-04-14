import React from 'react';
import CardList from './CardList.js';

import '../styles/app.css';
import '../styles/global.css';
import '../styles/sidebar.css';

import nouser from '../icons/nouser.png';

export default function UserInfo() {
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