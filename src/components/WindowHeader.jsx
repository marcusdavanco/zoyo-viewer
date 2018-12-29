import React from 'react'

const WindowHeader = props => {
    return (
        <div>
            <header className=" toolbar toolbar-header" >
                    <div className='title'>
                        <p><strong>
                           {props.title}
                        </strong></p>
                    </div>
                </header >
        </div>
    )
}

export default WindowHeader