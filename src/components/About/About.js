import React, { Component } from 'react'
import classes from './About.css'

import Title from '../UI/Title/Title'
import Container from '../UI/Container/Container'

class About extends Component {

    state = {
        text: 'About'
    }

    render () {
        return (
            <Container>
                <div className={classes.About}>
                    <Title title={this.state.text}/>
                </div>
            </Container>
        )
    }
}

export default About