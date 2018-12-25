import React from 'react'

import goprevious from './icons/go-previous.svg'
import gonext from './icons/go-next.svg'
import objectrotateright from './icons/object-rotate-right.svg'
import objectfliphorizontal from './icons/object-flip-horizontal.svg'
import imagecrop from './icons/image-crop.svg'
import objectstraighten from './icons/object-straighten.svg'
import imageredeye from './icons/image-red-eye.svg'
import imageadjust from './icons/image-adjust.svg'
import imageautoadjust from './icons/image-auto-adjust.svg'

const Site = props => {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/photon/0.1.2-alpha/css/photon.css" />
            <div className="window" style={{height: '100vh'}}>
                < header className=" toolbar toolbar-header" >
                    <div className='title'>
                        <p><strong>
                            __atago_kantai_collection_drawn_by_dd_ijigendd__de5f02bc2a2c68221ea60baefba1dad2.png(~/Pictures) -
                            Photos
            </strong>
                        </p>
                    </div>
                </header >
                <div className="window-content">
                    <div className="pane checker">
                        <img className="figure" src="https://danbooru.donmai.us/data/__atago_kantai_collection_drawn_by_dd_ijigendd__de5f02bc2a2c68221ea60baefba1dad2.png" />
                    </div>
                </div>
                <footer className="toolbar toolbar-footer zoyo-footer">
                    <div style={{display: 'flex'}}>
                        <div className="space-between-icons">
                            <button className="invisible-buttons">
                                <img className="icon" src={goprevious} />
                            </button>
                            <button className="invisible-buttons">
                                <img className="icon" src={gonext} />
                            </button>
                        </div>
                        <div className="space-between-icons">
                            <button className="invisible-buttons">
                                <img className="icon" src={objectrotateright} />
                            </button>
                            <button className="invisible-buttons">
                                <img className="icon" src={objectfliphorizontal} />
                            </button>
                        </div>

                        <div className="space-between-icons">
                            <button className="invisible-buttons">
                                <img className="icon" src={imagecrop} />
                            </button>
                            <button className="invisible-buttons">
                                <img className="icon" src={objectstraighten} />
                            </button>
                        </div>
                        <div>
                            <button className="invisible-buttons">
                                <img className="icon" src={imageredeye} />
                            </button>
                            <button className="invisible-buttons">
                                <img className="icon" src={imageadjust.svg} />
                            </button>
                            <button className="invisible-buttons">
                                <img className="icon" src={imageautoadjust} />
                            </button>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    )
}

export default Site