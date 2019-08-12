import React from 'react'
import classes from './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Navbar from './components/UI/Navbar/Navbar'
import Home from './components/Home/Home'
import StartHere from './components/StartHere/StartHere';

function App() {
    return (
        <div className={classes.App}>
            <Router>
                <header>
                    <Navbar />
                </header>
                
                <Route path="/" exact component={Home}/>
                <Route path="/start-here" component={StartHere}/>
            </Router>
        </div>
    )
}

export default App
