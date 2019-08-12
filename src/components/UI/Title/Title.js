import React from 'react'
import classes from './Title.css'

const title = props => {
    return (
        <h1 className={classes.Title}>{props.title}</h1>
    )
}

export default title