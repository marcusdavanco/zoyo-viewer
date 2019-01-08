import React from 'react'

import IconBtn from './IconBtn';



import goprevious from '../icons/go-previous.svg'
import gonext from '../icons/go-next.svg'
import objectrotateright from '../icons/object-rotate-right.svg'
import objectfliphorizontal from '../icons/object-flip-horizontal.svg'
import imagecrop from '../icons/image-crop.svg'
import objectstraighten from '../icons/object-straighten.svg'
import imageredeye from '../icons/image-red-eye.svg'
import imageadjust from '../icons/image-adjust.svg'
import imageautoadjust from '../icons/image-auto-adjust.svg'
    

const ActionsMenu = props => {    
    
    return (
        <footer className="toolbar toolbar-footer zoyo-footer">
            <div style={{display: 'flex'}}>
                <div className="space-between-icons">
                    <IconBtn onClick={props.onClick[0]} image={goprevious} /> 
                    <IconBtn onClick={props.onClick[1]} image={gonext} /> 
                </div>
                <div className="space-between-icons">
                    <IconBtn image={objectrotateright} />
                    <IconBtn image={objectfliphorizontal} />
                </div>
                <div className="space-between-icons">
                    <IconBtn image={imagecrop} />
                    <IconBtn image={objectstraighten} />
                </div>
                <div>
                    <IconBtn image={imageredeye} />
                    <IconBtn image={imageadjust}/>
                    <IconBtn image={imageautoadjust}/>
                </div>
            </div>
        </footer>
    )
}

export default ActionsMenu