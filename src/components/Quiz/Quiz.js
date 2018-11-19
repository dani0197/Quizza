import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { observable, action } from "mobx";
import Questions from './Questions';
import Result from '../Results/Result';
import '../../css/quiz.css';

@inject('store')
@observer
class Quiz extends Component {

    @observable userAnswers = [];
    @observable finalResult = null;

    @action addAnswer = (answer) => this.userAnswers.push(answer)

    @action calcFinalResult = () => {
        let greatestOccurring = { val: this.userAnswers[0], occ: 0 };

        for (let i = 0; i < this.userAnswers.length; i++) {
            let count = 1;
            for (let j = i + 1; j < this.userAnswers.length; j++) if (this.userAnswers[j] === this.userAnswers[i]) count++;
            if (count > greatestOccurring.occ) greatestOccurring = { val: this.userAnswers[i], occ: count }
        }

        this.finalResult = greatestOccurring.val;
    }

    getResult = () => {
        let result = this.props.store.quiz.results[this.finalResult-1]
        this.props.store.saveUserResults(result.score)
        return result;
    }

    componentDidMount() {
        this.props.store.getCurrentQuizz("5bec8be1b5cd3a3114693f2f")
    }

    showQuiz(quiz) {
        return (
            <div className="quiz">
                <h3>{quiz.title}</h3>
                <br />
                {this.finalResult ? <Result result={this.getResult}/> : <Questions addAnswer={this.addAnswer} endQuiz={this.calcFinalResult}/> }
            </div>
        )
    }

    render() {
        const quiz = this.props.store.quiz
        return quiz ? this.showQuiz(quiz) : null
    }
}

export default Quiz;