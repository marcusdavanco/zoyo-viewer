import React from 'react'

const Canvas = props => {

    return (
        <div className="window-content">
                    <div className="pane checker">
                        <img className={props.style} src={props.image} />
                    </div>
                </div>
    )
}

export default Canvas