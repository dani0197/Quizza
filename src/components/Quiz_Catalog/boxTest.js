import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Quiz from '../Quiz/Quiz'

@inject('store')
@observer
class BoxTest extends Component {

    quizzes = () => {
        let allQuizzes = this.props.store.quizzes
        if (allQuizzes) {
            return (
                allQuizzes.map(q => {
                    console.log(q)
                    return (
                        <button type="button" id="buttonModal1" data-toggle="modal" data-target="#myModal1">
                            <div className="service-item second-service">
                                <div className="icon"></div>
                                <div>
                                    <h4> {q.title} </h4>
                                    <p> {q.desc} </p>
                                </div>
                            </div>
                        </button>
                    )
                })
            )
        }
    }

    render() {

        return (
            <div id="about" className="page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h4> Our Quizzes </h4>
                                <div className="line-dec"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            {this.quizzes()}

                            <div className="modal fade" id="myModal1" role="dialog">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                            <h4 className="modal-title" > add a new quiz </h4>
                                        </div>
                                        <div className="modal-body">
                                            <div className="container">
                                                <p>hello there</p>
                                                <Quiz />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoxTest;