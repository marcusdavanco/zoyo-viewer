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
      fileNames: null,
      curFileName: null
    };
  }

  componentDidMount() {
    this.readDir('https://danbooru.donmai.us/data/'); //'~/Pictures'
    window.addEventListener('keydown', this.onKeyDown);
  }

  async readDir(path) {
    this.setState({ fileNames: null, curFileName: null });
    this.setState({ dirPath: path });
    
    //fs code
    let files = await div.arrayFromStream(div.fs.src(`${path}/*`));

    for (let f of files) {
      let isImgFile = f.basename.endsWith('.jpg');

      console.log('===> File name:', f.basename);
      console.log('===> Is directory?', f.isDirectory());
      console.log('===> Is image file?', isImgFile);

      if (isImgFile) {
        console.log('===> Contents:', await div.bufFromStream(f.contents));
      }
    }
    //end of fs code

    await new Promise(resolve => setTimeout(resolve, 2000));
    this.setState({
      fileNames: ['__atago_kantai_collection_drawn_by_dd_ijigendd__de5f02bc2a2c68221ea60baefba1dad2.png',
        '__jervis_and_zuihou_kantai_collection_drawn_by_amano_kouki__44c7dc4a9e4fd338c25b127c1b89b797.png',
        '__remilia_scarlet_touhou_drawn_by_nenobi_nenorium__ffdc94588bd327b0ed402bec63428e7e.jpg',
        '__tokai_teio_umamusume_drawn_by_ohshit__736e2bd99703015e8b714e0e4af02381.png',
        '__iws_2000_girls_frontline_drawn_by_shailiar__a36f03f5200fbec35fa48e1a284bf5c8.jpg',
      ]
    });

    this.setState(prevState => ({ curFileName: prevState.fileNames[0] }));

  }

  slideshowLoop = (value) => {
    let newValue = value;
    let maxValue = this.state.fileNames.length - 1;

    if (newValue > maxValue) {
      newValue = 0;
    }
    if (newValue < 0) {
      newValue = maxValue;
    }

    return newValue;
  }

  viewNext = () => {
    let nextIndex = this.state.fileNames.indexOf(this.state.curFileName);
    nextIndex = this.slideshowLoop(nextIndex + 1);

    this.setState({ curFileName: this.state.fileNames[nextIndex] });
  }

  viewPrev = () => {
    let nextIndex = this.state.fileNames.indexOf(this.state.curFileName);
    nextIndex = this.slideshowLoop(nextIndex - 1);

    this.setState({ curFileName: this.state.fileNames[nextIndex] });
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
          this.state.curFileName === null ?
            <WindowHeader title={`...(${this.state.dirPath}) - Photos`} /> :
            <WindowHeader title={`${this.state.curFileName}(${this.state.dirPath}) - Photos`} />
        }
        {
          !this.state.curFileName ?
            <Canvas style={'loading'} image={spinner} /> :
            <Canvas style={'figure'} image={this.state.dirPath + this.state.curFileName} />
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
