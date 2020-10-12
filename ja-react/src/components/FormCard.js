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
