import React, { Component } from 'react'
import { QuestionForm } from './QuestionForm';
import './FormCard.css';

export class FormCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
    }

    render() {
        return (<div className="box">
            <QuestionForm questions={this.props.formCardQuestions} onChange={this.props.onChange} onMultiChange={this.props.onMultiChange}/>
        </div>
        );
    }


}
