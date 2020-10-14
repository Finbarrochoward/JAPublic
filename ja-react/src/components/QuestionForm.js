import React, { Component } from 'react';
import './QuestionForm.css';
import axios from 'axios';
import download from 'downloadjs';
import {Dropdown} from 'semantic-ui-react'

export class QuestionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        // this.form = React.createRef(null);
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.generateQuestions = this.generateQuestions.bind(this);
        this.generateOptions = this.generateOptions.bind(this);
        // this.handleMultiDropdownChange = this.handleMultiDropdownChange.bind(this);
    }


    // handleChange(event) {
    //     const name = event.target.name;
    //     this.setState({ [name]: event.target.value });
    // }

    // handleMultiDropdownChange(key, value) {
    //     console.log(key);
    //     console.log(value.value)
    //     this.setState({'multiValue': value.value});
    // }

    async handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        // const data = new FormData(this.state);
        const data = this.state;
        const options = {
            method: 'POST',
            body: data,
            headers: {
                // 'Content-Type': 'multipart/form-data',
                'Content-Type': 'application/json'
            }
        };

        await axios.post('/postPrivPol', data)
            .then(res => {
                console.log(res)
                download(new Blob([res.data]), 'PrivPolTest.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
                // download('/test/PrivPolTest.docx');
                // window.location.assign(res.data);
            })
    }

    generateQuestions(questionsArray) {
        return questionsArray.map((question, index) => (
            <div key={index} className="question-div">
                <label className="label">{question.question}</label>
                {question.type === "select" ? <Dropdown onChange={this.props.onMultiChange} className="multi-dropdown" placeholder="Enter" fluid multiple selection options={this.generateOptions(question.values)}/>
                    : <input type={question.type} onChange={this.props.onChange} className="input-style" name={question.questionSignature}></input>}
            </div>
        ));
    }

    generateOptions(optionsList) {
        return optionsList.map((option, index) => 
            ({
                key: index,
                value: option.toLowerCase(),
                text: option
            })
        )
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
