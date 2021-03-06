import React, { Component } from 'react'
import classes from './Blog.css'

import Title from '../UI/Title/Title'
import Container from '../UI/Container/Container'

class Blog extends Component {

    state = {
        text: 'Blog'
    }

    render () {
        return (
            <Container>
                <div className={classes.Blog}>
                    <Title title={this.state.text}/>
                </div>
            </Container>
        )
    }
}

export default Blog