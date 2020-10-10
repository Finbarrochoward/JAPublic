import React, { Component } from 'react';
import './QuestionForm.css';
import axios from 'axios';
import download from 'downloadjs';

export class QuestionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // busName = '',
            // busEmail = '',
            // busPhone = ''
        };
        // this.form = React.createRef(null);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.generateQuestions = this.generateQuestions.bind(this);
    }


    handleChange(event) {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = this.state;
        const options = {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };

        axios.post('/test', {data})
            .then(res => {
                console.log(res)
                download(res.data, 'PrivacyPolict-test.txt');
                // window.location.assign(res.data);
            })
    }

    generateQuestions(questionsArray) {
        // Generates the questions specified in the FormCard, in the form of inputs and labels
        return questionsArray.map((question, index) => (
            <div key={index} className="question-div">
                <label className="label">{question.question}</label>
                {question.type === "select" ? <select multiple>
                    {question.values.map(
                        (val, index) => (<option key={index} value={index}>{val}</option>)
                    )}</select>
                    : <input type={question.type} onChange={this.handleChange} className="input-style" name={question.question}></input>}
            </div>
        ));
    }

    render() {
        const qs = this.generateQuestions(this.props.questions);
        return (
            <form onSubmit={this.handleSubmit} className="nameForm" ref={this.form}>
                {qs}
                <button type="submit" className="next-btn"><i className="fas fa-arrow-circle-right"></i></button>
            </form>
        );
    }
}
