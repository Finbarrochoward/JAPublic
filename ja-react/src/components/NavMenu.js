import React from 'react'
import './NavMenu.css';
import { SidebarData } from "./SidebarData";

export default class NavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            active: false
        };
        this.setActive = this.setActive.bind(this);
    }

    setActive() {
        this.setState({
            active: !this.state.active
        });
    }



    render() {
        return (
        <div className={this.state.active ? "nav-menu active" : "nav-menu"}>
            <i className="fas fa-ellipsis-h exit-logo" onClick={this.setActive}></i>
            <ul>
                {SidebarData.map((item, index) => {
                    return <li key={index} className={item.cName}><a href={item.path}>{item.title}</a></li>
                })}
            </ul>
        </div>
        );
    }
}