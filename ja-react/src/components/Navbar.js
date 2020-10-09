import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import {SidebarData} from './SidebarData'

export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scrolled: '',
            active: false
        }
        this.scrollProgress = this.scrollProgress.bind(this);
        this.setActive = this.setActive.bind(this);
    }

    scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = `${scrollPx / winHeightPx * 100}%`;

        console.log(scrolled);

        this.setState({
            scrolled: scrolled
        });
    };

    setActive() {
        this.setState({
            active: !this.state.active
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollProgress);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollProgress);
    }

    render() {

        const progressBarStyle = {
            height: "5px",
            background: "#e91e63",
            width: this.state.scrolled
        };
        return (
            <div>
                <nav className="navbar">
                    <div className="navbar-logo">
                        <Link to='/' className='navbar-logo link'>
                            Juris Automatica</Link>
                    </div>
                    <div className="navbar-menu">
                        <i className="fas fa-ellipsis-h" onClick={this.setActive}></i>
                    </div>
                    <div className="empty"></div>
                </nav>
                <div style={progressBarStyle} className="progress-bar"></div>
                <div className={this.state.active ? "nav-menu active" : "nav-menu"}>
                    <i className="fas fa-ellipsis-h exit-logo" onClick={this.setActive}></i>
                    <ul>
                        {SidebarData.map((item, index) => {
                            return <li key={index} className={item.cName}><a href={item.path}>{item.title}</a></li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
