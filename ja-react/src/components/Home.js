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
            formCardQuestions: [[{
                question: "Business Name",
                questionSignature: "busName",
                type: "text",
                values: []
            },
            {
                question: "Business Email Address",
                questionSignature: "busEmail",
                type: "text",
                values: []
            },
            {
                question: "Business Phone Number",
                questionSignature: "busPhone",
                type: "text",
                values: []
            },
            {
                question: "How is information obtained?",
                questionSignature: "infoObtained",
                type: "select",
                values: ["Interviews", "Correspondence", "Telephone", "Fascimile", "Email", "Website", "Media and publications", "Cookies", "Other publicly available sources"]
            }],
            [{
                question: "First Name",
                questionSignature: "firstName",
                type: "text",
                values: []
            },
            {
                question: "Personal Email Address",
                questionSignature: "personalEmail",
                type: "text",
                values: []
            },
            {
                question: "Personal Phone Number",
                questionSignature: "personalPhone",
                type: "text",
                values: []
            },
            {
                question: "How is information obtained?",
                questionSignature: "infoObtained",
                type: "select",
                values: ["Interviews", "Correspondence", "Telephone", "Fascimile", "Email", "Website", "Media and publications", "Cookies", "Other publicly available sources"]
            }]
        ]
        }
        this.generateFormCards = this.generateFormCards.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleMultiDropdownChange = this.handleMultiDropdownChange.bind(this);
    }

    generateFormCards() {
        // console.log(this.state.formCardQuestions);
        return [...Array(this.state.formCardQuestions.length)].map((val, i) => <div className="form-box" key={i}>
            <FormCard formCardQuestions={this.state.formCardQuestions[i]} onChange={this.handleChange} onMultiChange={this.handleMultiDropdownChange}/>
        </div>)
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
        console.log(this.state);
    }

    handleMultiDropdownChange(key, value) {
        console.log(key);
        console.log(value.value)
        this.setState({'multiValue': value.value});
    }

    render() {
        const formCardList = this.generateFormCards();
        return (
            <div className="page">
                <div className="nav-container">
                    <Navbar />
                </div>                
                <div className="form-box">
                    {formCardList}
                </div>
            </div>
        )
    }
}
