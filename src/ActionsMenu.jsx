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

const ActionsMenu = props => {
    return (
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
                                <img className="icon" src={imageadjust} />
                            </button>
                            <button className="invisible-buttons">
                                <img className="icon" src={imageautoadjust} />
                            </button>
                        </div>
                    </div>
                </footer>
    )
}

export default ActionsMenu