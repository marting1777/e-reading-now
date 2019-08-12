import React, { Component } from 'react'
import classes from './Navbar.css'

import { Link } from 'react-router-dom'

class Navbar extends Component {

    state = {
        navigation: [
            {id: 1, route: '/', text: 'Home'},
            {id: 2, route: '/start-here', text: 'Start Here'},
            {id: 3, route: '/about', text: 'About'},
            {id: 4, route: '/books', text: 'Books'},
            {id: 5, route: '/blog', text: 'Blog'},
            {id: 6, route: '/contact', text: 'Contact'},
        ]
    }

    render () {
        const navItems = this.state.navigation.map(item => {
            return <li key={item.id}><Link to={item.route}>{item.text}</Link></li>
        })
        return (
            <div className={classes.Navbar}>
                <nav className={classes.Nav}>
                    <ul>
                        {navItems}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar