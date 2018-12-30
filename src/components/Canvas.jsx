import React from 'react'

const Canvas = props => {
    return (
        <div className="window-content">
                    <div className="pane checker">
                        <img className="figure" src={props.image} />
                    </div>
                </div>
    )
}

export default Canvas