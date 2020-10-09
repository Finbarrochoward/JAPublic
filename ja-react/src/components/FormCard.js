import React, { Component } from 'react'
import { QuestionForm } from './QuestionForm';
import './FormCard.css';

export class FormCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            questions: [{
                question: "Business Name",
                type: "text",
                values: []
            },
            {
                question: "Business Email Address",
                type: "text",
                values: []
            },
            {
                question: "Business Phone Number",
                type: "text",
                values: []
            },
            {
                question: "How is information obtained?",
                type: "select",
                values: ["Interviews", "Correspondence", "Telephone", "Fascimile", "Email", "Website", "Media and publications", "Cookies", "Other publicly available sources"]
            }
        ]
        };
    }

    render() {
        console.log(this.state.questions)
        return (<div className="box">
            <QuestionForm questions={this.state.questions} />
        </div>
        );
    }


}
