import React, { Component } from 'react'
import classes from './Books.css'

import Title from '../UI/Title/Title'
import Container from '../UI/Container/Container'

class Books extends Component {

    state = {
        text: 'Books'
    }

    render () {
        return (
            <Container>
                <div className={classes.Books}>
                    <Title title={this.state.text}/>
                </div>
            </Container>
        )
    }
}

export default Books