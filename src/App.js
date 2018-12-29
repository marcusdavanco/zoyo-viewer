import React, { Component } from 'react';
import './App.css';

import WindowHeader from './components/WindowHeader';
import Canvas from './components/Canvas';
import ActionsMenu from './components/ActionsMenu';

const state = {dirPath:null, filenames:null, curFileName:null}

class App extends Component {
  render() {
    return (
      <div>
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/photon/0.1.2-alpha/css/photon.css" />
        <div className="window" style={{height: '100vh'}}>
          <WindowHeader title= '__atago_kantai_collection_drawn_by_dd_ijigendd__de5f02bc2a2c68221ea60baefba1dad2.png(~/Pictures) - Photos' />
          <Canvas />
          <ActionsMenu />
        </div>

      </div>
    );
  }
}

export default App;
