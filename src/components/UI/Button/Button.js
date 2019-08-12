import React from 'react'
import './Button.css'

const button = props => {
    return (
        <button className={props.clase}>
            {props.children}
        </button>
    )
}

export default button