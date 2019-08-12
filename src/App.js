import React, { Component } from 'react'
import classes from './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Navbar from './components/UI/Navbar/Navbar'
import Home from './components/Home/Home'
import StartHere from './components/StartHere/StartHere';
import About from './components/About/About';
import Books from './components/Books/Books';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

class App extends Component {

    state = {
        navigation: [
            {id: 1, path: '/start-here', component: StartHere},
            {id: 2, path: '/about', component: About},
            {id: 3, path: '/books', component: Books},
            {id: 4, path: '/blog', component: Blog},
            {id: 5, path: '/contact', component: Contact},
        ]
    }

    render () {

        const navRoutes = this.state.navigation.map(nav => {
            return <Route 
                        key={nav.id}
                        path={nav.path}
                        component={nav.component}/>
        })

        return (
            <div className={classes.App}>
                <Router>
                    <header>
                        <Navbar />
                    </header>
                    
                    <Route path="/" exact component={Home}/>
                    {navRoutes}
                </Router>
            </div>
        )
    }
}

export default App
