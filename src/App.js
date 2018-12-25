import React, { Component } from 'react';
import './App.css';

import WindowHeader from './WindowHeader';
import Canvas from './Canvas';
import ActionsMenu from './ActionsMenu';

class App extends Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/photon/0.1.2-alpha/css/photon.css" />
        <div className="window" style={{height: '100vh'}}>
          <WindowHeader />
          <Canvas />
          <ActionsMenu />
        </div>
      </div>
    );
  }
}

export default App;
