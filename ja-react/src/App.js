import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home';

function App() {
    return (
        <Router>
            <Home />
            <Switch>
                <Route path="/" exact />
            </Switch>
        </Router>
    );
}

export default App;
