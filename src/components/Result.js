import React, {Component} from 'react';
import {Button, Col, ProgressBar, Row} from 'react-bootstrap';
import {MdOutlineWhereToVote} from 'react-icons/all';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Result extends Component {
    render() {
        return (
            <div>
                <Row>
                    <span className="text-muted"
                          style={{marginTop: '1rem'}}>... {this.props.poll.optionOne.text}
                        {this.props.answered && this.props.answeredOption === 'optionOne' &&
                            <span className="text-success">
                                <MdOutlineWhereToVote
                                    style={{marginLeft: 20, fontSize: '30px'}}/>
                            </span>}
                    </span>
                </Row>
                <Row>
                    <Col> <ProgressBar animated
                                       now={(((this.props.questions[this.props.id].optionOne.votes.length)
                                           / (this.props.questions[this.props.id].optionOne.votes.length
                                               + this.props.questions[this.props.id].optionTwo.votes.length)) * 100)}
                                       style={{margin: '1rem', fontSize: '15px'}}/>
                    </Col>
                </Row>
                <Row style={{marginTop: '-1rem'}}><Col>
                    <span className='text-muted small'>{this.props.questions[this.props.id].optionOne.votes.length + ' vote(s) (' +
                        (((this.props.questions[this.props.id].optionOne.votes.length)
                            / (this.props.questions[this.props.id].optionOne.votes.length
                                + this.props.questions[this.props.id].optionTwo.votes.length)) * 100) + ')%'}</span>
                </Col></Row>
                <Row>
                    <span className="text-muted"
                          style={{marginTop: '5rem'}}>... {this.props.poll.optionTwo.text}
                        {this.props.answered && this.props.answeredOption === 'optionTwo' &&
                            <span className="text-success">
                                <MdOutlineWhereToVote
                                    style={{marginLeft: 20, fontSize: '30px'}}/>
                            </span>}
                    </span>
                </Row>
                <Row>
                    <Col> <ProgressBar animated
                                       now={((this.props.questions[this.props.id].optionTwo.votes.length)
                                           / (this.props.questions[this.props.id].optionOne.votes.length
                                               + this.props.questions[this.props.id].optionTwo.votes.length)) * 100}
                                       style={{margin: '1rem', fontSize: '15px'}}/>
                    </Col>
                </Row>
                <Row style={{marginTop: '-1rem'}}><Col>
                    <span className='text-muted small'>{this.props.questions[this.props.id].optionTwo.votes.length + ' vote(s) (' +
                        ((this.props.questions[this.props.id].optionTwo.votes.length)
                            / (this.props.questions[this.props.id].optionOne.votes.length
                                + this.props.questions[this.props.id].optionTwo.votes.length)) * 100 + ')%'
                    }</span>
                </Col></Row>
                <Row>
                    <Col>
                        {this.props.answered && this.props.answeredOption === 'optionOne' && (
                            <p style={{marginTop: '5rem'}}>You have answered
                                like {((this.props.questions[this.props.id].optionTwo.votes.length)
                                    / (this.props.questions[this.props.id].optionOne.votes.length
                                        + this.props.questions[this.props.id].optionTwo.votes.length)) * 100} %.
                            </p>)}
                        {this.props.answered && this.props.answeredOption === 'optionTwo' && (
                            <p style={{marginTop: '2rem'}}>You have answered
                                like {((this.props.questions[this.props.id].optionTwo.votes.length)
                                    / (this.props.questions[this.props.id].optionOne.votes.length
                                        + this.props.questions[this.props.id].optionTwo.votes.length)) * 100} %.
                            </p>)}
                    </Col>
                </Row>
                <Row>
                    <Col><Button as={Link} variant="outline-dark" style={{margin: '1rem'}}
                                 to={'/'}>GO BACK</Button></Col>
                </Row>
            </div>
        );
    }
}


function mapStateToProps({questions, users, authedUser}, {id}) {
    return{
        questions, users, authedUser,
        answeredOption: users[authedUser].answers[id],
        poll: questions[id],
    }
}

export default connect(mapStateToProps)(Result);
