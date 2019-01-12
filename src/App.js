import React, { Component } from 'react';
import './App.css';

import WindowHeader from './components/WindowHeader';
import Canvas from './components/Canvas';
import ActionsMenu from './components/ActionsMenu';
import spinner from './icons/spinner.svg';

class App extends Component {
  constructor() {
    super()
    this.state = {
      dirPath: '~/Pictures',
      fileNames: null,
      curFileName: '__atago_kantai_collection_drawn_by_dd_ijigendd__de5f02bc2a2c68221ea60baefba1dad2.png',
      arrayIndex: 0,
      isLoading: true
    }
  }

  componentDidMount() {
    this.readDir('https://danbooru.donmai.us/data/') //'~Pictures'
    window.addEventListener('keydown', this.keyHandling)
  }

  async readDir(path) {
    this.setState({ fileNames: '...', curFileName: '...' });
    this.setState({ dirPath: path });
    await new Promise(resolve => setTimeout(resolve, 2000));
    this.setState({
      isLoading: false,
      fileNames: ['__atago_kantai_collection_drawn_by_dd_ijigendd__de5f02bc2a2c68221ea60baefba1dad2.png',
        '__jervis_and_zuihou_kantai_collection_drawn_by_amano_kouki__44c7dc4a9e4fd338c25b127c1b89b797.png',
        '__remilia_scarlet_touhou_drawn_by_nenobi_nenorium__ffdc94588bd327b0ed402bec63428e7e.jpg',
        '__tokai_teio_umamusume_drawn_by_ohshit__736e2bd99703015e8b714e0e4af02381.png',
        '__iws_2000_girls_frontline_drawn_by_shailiar__a36f03f5200fbec35fa48e1a284bf5c8.jpg',
      ]
    });
    this.setState(prevState => { return ({ curFileName: prevState.fileNames[this.state.arrayIndex] }) }, () => console.log(this.state));
    ;

  }

  loopValue = (value) => {
    let newvalue = value
    if(newvalue > this.state.fileNames.length - 1) {
      newvalue = 0;
    }
    if(newvalue < 0) {
      newvalue = this.state.fileNames.length - 1
    }
    
    return newvalue
  }

 viewNext = () => {
  console.log('next')
  
  let nextIndex = this.state.arrayIndex
  nextIndex = this.loopValue(nextIndex+1)
  
  this.setState({ arrayIndex: nextIndex , curFileName: this.state.fileNames[nextIndex]})
}

viewPrev = () => {
  console.log('prev')
  
  let nextIndex = this.state.arrayIndex
  nextIndex = this.loopValue(nextIndex-1)
  
  this.setState({ arrayIndex: nextIndex , curFileName: this.state.fileNames[nextIndex]})  
}

keyHandling = e => {
  if(e.key === 'ArrowRight'){
    this.viewNext();
  }
  else if(e.key === 'ArrowLeft'){
    this.viewPrev();
  }
}

/*WIP
rotateCw = () => {


mirror = () => {

}

crop = () => {

}

straighten = () => {

}

redeye = () => {

}

imageAdjust = () => {

}

autoAdjust = () => {

}
*/

    render() {
      return (
        <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/photon/0.1.2-alpha/css/photon.css" />

          <div className="window" style={{ height: '100vh' }}>
            <WindowHeader title={this.state.curFileName + '(' + this.state.dirPath + ')' + ' - Photos'} />
            {this.state.isLoading?<Canvas style={'loading'} image={spinner}/> : <Canvas style={'figure'} image={this.state.dirPath + this.state.curFileName}/>}
            <ActionsMenu onClick={[this.viewPrev, this.viewNext]} />
          </div>

        </div>
      );
    }
  }

  export default App;
