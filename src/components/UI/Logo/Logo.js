import React from 'react'
import classes from './Logo.css'
import Aux from '../../../hoc/Auxiliar/Auxiliar'

const logo = props => {
    return (
        <Aux>
            <img 
                className={classes.Logo} 
                src={props.imageUrl} 
                alt={props.imageAlt} />
        </Aux>
    )
}

export default logo