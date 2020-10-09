import React, { Component } from 'react';
import './QuestionForm.css';

export class QuestionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '22',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.generateQuestions = this.generateQuestions.bind(this);
    }

    componentDidMount() {
        // const options = {
        //     method: 'POST',
        //     body: JSON.stringify({cash: "poo"}),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // };

        // fetch('/test', options)
        //     .then(res => res.json())
        //     .then(res => alert(res));
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        // const nameString = this.props.questions.map((question) => this.state.[question]).join(' ');
        // console.log(nameString)
        // alert("A name was submitted" + nameString);
        // console.log(this.props.questions)
        event.preventDefault();
        console.log(event.target);
        // const options = {
        //     method: 'POST',
        //     body: JSON.stringify(event),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // };

        // fetch('/test', options)
        //     .then(res => res.json())
        //     .then(res => alert(res));
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
            <form onSubmit={this.handleSubmit} className="nameForm">
                {qs}
                <button type="submit" className="next-btn"><i className="fas fa-arrow-circle-right"></i></button>
            </form>
        );
    }
}
