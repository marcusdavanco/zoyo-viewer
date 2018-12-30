import React, { Component } from 'react';
import './App.css';

import WindowHeader from './components/WindowHeader';
import Canvas from './components/Canvas';
import ActionsMenu from './components/ActionsMenu';

class App extends Component {
  constructor() {
    super()
    this.state = { dirPath: '~/Pictures', filenames: null, curFileName: '__atago_kantai_collection_drawn_by_dd_ijigendd__de5f02bc2a2c68221ea60baefba1dad2.png' }
  }
  
  /*WIP
  componentDidMount(){
    this.readDir('~/Pictures') //Executes when a window is opened?
  }

  async readDir(path){
  }

  viewNext(){

  }

  viewPrev(){

  }
*/

  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/photon/0.1.2-alpha/css/photon.css" />

        <div className="window" style={{ height: '100vh' }}>
          <WindowHeader title={this.state.curFileName + '(' + this.state.dirPath + ')' + ' - Photos'} />
          <Canvas image={'https://danbooru.donmai.us/data/__atago_kantai_collection_drawn_by_dd_ijigendd__de5f02bc2a2c68221ea60baefba1dad2.png'} /> {/*this.state.dirPath + this.state.curFileName*/}
          <ActionsMenu />
        </div>

      </div>
    );
  }
}

export default App;
