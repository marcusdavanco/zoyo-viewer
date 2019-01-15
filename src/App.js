import React, { Component } from 'react';
import './App.css';

//Components
import div from './divosMock';
import WindowHeader from './components/WindowHeader';
import Canvas from './components/Canvas';
import ActionsMenu from './components/ActionsMenu';

//src images
import spinner from './icons/spinner.svg';
import goprevious from './icons/go-previous.svg'
import gonext from './icons/go-next.svg'
import objectrotateright from './icons/object-rotate-right.svg'
import objectfliphorizontal from './icons/object-flip-horizontal.svg'
import imagecrop from './icons/image-crop.svg'
import objectstraighten from './icons/object-straighten.svg'
import imageredeye from './icons/image-red-eye.svg'
import imageadjust from './icons/image-adjust.svg'
import imageautoadjust from './icons/image-auto-adjust.svg'


class App extends Component {
  constructor() {
    super();
    this.state = {
      dirPath: null,
      Files: null,
      curFile: null
    };
  }

  componentDidMount() {
    this.readDir('~/Pictures'); //'https://danbooru.donmai.us/data/'
    window.addEventListener('keydown', this.onKeyDown);
  }

  async readDir(path) {
    this.setState({ Files: null, curFile: null });
    this.setState({ dirPath: path });
    
    //fs code
    const loadedFiles = [];
    let files = await div.arrayFromStream(div.fs.src(`${path}/*`));

    for (let f of files) {
      let isImgFile = f.basename.endsWith('.jpg');

      console.log('===> File name:', f.basename);
      console.log('===> Is directory?', f.isDirectory());
      console.log('===> Is image file?', isImgFile);

      if (isImgFile) {
        console.log('===> Contents:', await div.bufFromStream(f.contents));
        loadedFiles.push(f);
      }
    }
    //end of fs code

    await new Promise(resolve => setTimeout(resolve, 2000));
    this.setState({
      Files: loadedFiles
    });

    this.setState(prevState => ({ curFile: prevState.Files[0] }));

  }

  slideshowLoop = (value) => {
    let newValue = value;
    let maxValue = this.state.Files.length - 1;

    if (newValue > maxValue) {
      newValue = 0;
    }
    if (newValue < 0) {
      newValue = maxValue;
    }

    return newValue;
  }

  viewNext = () => {
    let nextIndex = this.state.Files.indexOf(this.state.curFile);
    nextIndex = this.slideshowLoop(nextIndex + 1);

    this.setState({ curFile: this.state.Files[nextIndex] });
  }

  viewPrev = () => {
    let nextIndex = this.state.Files.indexOf(this.state.curFile);
    nextIndex = this.slideshowLoop(nextIndex - 1);

    this.setState({ curFile: this.state.Files[nextIndex] });
  }

  onKeyDown = e => {
    if (e.key === 'ArrowRight') this.viewNext();
    else if (e.key === 'ArrowLeft') this.viewPrev();
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

  componentWillMount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  render() {
    return (
      <div className="window" style={{ height: '100vh' }}>
        {
          this.state.curFile === null ?
            <WindowHeader title={`...(${this.state.dirPath}) - Photos`} /> :
            <WindowHeader title={`${this.state.curFile.basename}(${this.state.dirPath}) - Photos`} />
        }
        {
          !this.state.curFile ?
            <Canvas style={'loading'} image={spinner} /> :
            <Canvas style={'figure'} image={this.state.dirPath + this.state.curFile} />
        }
        <ActionsMenu onClick={[
          {
            image: goprevious,
            fn: this.viewPrev,
            id: 0
          },
          {
            image: gonext,
            fn: this.viewNext,
            id: 1
          },
          {
            image: objectrotateright,
            fn: null,
            id: 2
          },
          {
            image: objectfliphorizontal,
            fn: null,
            id: 3
          },
          {
            image: imagecrop,
            fn: null, 
            id: 4
          },
          {
            image: objectstraighten,
            fn: null,
            id: 5
          },
          {
            image: imageredeye,
            fn: null,
            id: 6
          },
          {
            image: imageadjust,
            fn: null,
            id: 7
          },
          {
            image: imageautoadjust,
            fn: null,
            id: 8
          }
        ]} />
      </div>
    );
  }
}

export default App;
