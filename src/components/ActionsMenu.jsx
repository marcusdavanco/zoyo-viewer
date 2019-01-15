import React from 'react'

import IconBtn from './IconBtn';

const ActionsMenu = props => {

    return (
        <footer className="toolbar toolbar-footer zoyo-footer">
            <div style={{ display: 'flex' }}>
                {props.onClick.map((button) => <IconBtn onClick={button.fn} image={button.image} key={button.id} />)}
            </div>
        </footer>
    )
}

export default ActionsMenu