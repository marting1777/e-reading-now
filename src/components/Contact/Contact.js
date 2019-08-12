import React, { Component } from 'react'
import classes from './Contact.css'

import Title from '../UI/Title/Title'
import Container from '../UI/Container/Container'

class Contact extends Component {

    state = {
        text: 'Contact'
    }

    render () {
        return (
            <Container>
                <div className={classes.Contact}>
                    <Title title={this.state.text}/>
                </div>
            </Container>
        )
    }
}

export default Contact