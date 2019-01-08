import React from 'react'

const IconBtn = props => {
    return (
        <button onClick={props.onClick} className='invisible-buttons'>
            <img className='icon' src={props.image} />
        </button>
    )
}

export default IconBtn