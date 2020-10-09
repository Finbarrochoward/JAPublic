import React, { Component, useLayoutEffect, useState } from 'react'
import NameForm from './QuestionForm'
import Navbar from './Navbar'
import QuestionForm from './QuestionForm'
import { FormCard } from './FormCard'
import './Home.css';
// import ProgressBar from 'react-bootstrap/ProgressBar';
// import "bootstrap/dist/css/bootstrap.min.css";
import { SidebarData } from './SidebarData';
// import NavMenu from './NavMenu';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numFormsCards: 8,
        }
        this.generateFormCards = this.generateFormCards.bind(this);
    }

    generateFormCards(n) {
        return [...Array(n)].map((val, i) => <div className="form-box" key={i}>
            <FormCard />
        </div>)
    }


    render() {
        const formCardList = this.generateFormCards(this.state.numFormsCards);

        console.log(SidebarData);
        return (
            <div className="page">
                <div className="nav-container">
                    <Navbar />
                    {/* <NavMenu /> */}
                </div>
                {/* <NavMenu /> */}
                <div className="form-box">
                    {formCardList}
                </div>
            </div>
        )
    }
}
