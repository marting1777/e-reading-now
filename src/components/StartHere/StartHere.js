import React, { Component } from 'react'
import classes from './StartHere.css'

import Title from '../UI/Title/Title'
import Container from '../UI/Container/Container'

class StartHere extends Component {

    state = {
        text: 'Welcome to E-Reading-Now'
    }

    render () {
        return (
            <Container>
                <div className={classes.StartHere}>
                    <Title title={this.state.text}/>
                </div>
            </Container>
        )
    }
}

export default StartHere