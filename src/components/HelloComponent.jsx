import React from 'react'

HelloComponent.defaultProps = {
    name : "[Sorry] No Name"
}
export default function HelloComponent(props) {
    
    return (
        <div>
            <h1>Try to say : {props.name}</h1>
        </div>
    )
}
