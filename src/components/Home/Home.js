import React, { Component } from 'react'
import classes from './Home.css'

import Container from '../UI/Container/Container'
import Title from '../UI/Title/Title'

class Home extends Component {

    state = {
        title: 'Let me share with you a book review driven website!'
    }

    render () {
        return (
            <Container>
                <div className={classes.Home}>
                    <Title title={this.state.title}/>
                </div>
            </Container>
        )
    }
}

export default Home