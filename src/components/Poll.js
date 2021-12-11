import React, {Component} from 'react';
import {connect} from "react-redux";
import {Card, Col, Container, Figure, Row, Button, ProgressBar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {handleSaveAnswer} from "../state/shared/sharedActions";
import {MdOutlineWhereToVote} from "react-icons/all";

class Poll extends Component {
    render() {
        console.log(this.props);
        return (
            <Container>
                <Row className="justify-content-md-center" style={{marginTop: '5rem'}}>
                    <Figure>
                        <Figure.Image
                            width={200}
                            height={200}
                            src={this.props.users[this.props.poll.author].avatarURL}
                        />
                        <Figure.Caption>
                            @{this.props.poll.author} wants to know...
                        </Figure.Caption>
                        <span className='text-muted'
                              style={{fontSize: '10px'}}>{new Date(this.props.poll.timestamp).toLocaleString()}</span>
                    </Figure>
                </Row>
                <Row className="justify-content-md-center">
                    <Card style={{width: '50%'}}>
                        <Card.Body>
                            <Card.Title style={{margin: '1rem'}}>Would you rather...</Card.Title>
                            {!this.props.answered ?
                                (<div>
                                        <Row>
                                            <Col>
                                                <button className='btn btn-lg btn-outline-primary'
                                                        style={{margin: '1rem'}} onClick={event => {
                                                    this.handleAnswer(event, 'optionOne')
                                                }}>{this.props.poll.optionOne.text}</button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <button className='btn btn-lg btn-outline-primary'
                                                        style={{margin: '1rem'}} onClick={event => {
                                                    this.handleAnswer(event, 'optionTwo')
                                                }}>{this.props.poll.optionTwo.text}</button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col><Button as={Link} variant="outline-dark" style={{margin: '1rem'}}
                                                         to={'/'}>GO BACK</Button></Col>
                                        </Row>
                                    </div>
                                ) :
                                (
                                    <div>
                                        <Row>
                                            <span className='text-muted'
                                                  style={{marginTop: '2rem'}}>{this.props.poll.optionOne.text}
                                                {this.props.answered && this.props.answeredOption === 'optionOne' &&
                                                    <span className='text-success'>
                                                        <MdOutlineWhereToVote
                                                            style={{marginLeft: 20, fontSize: '30px'}}/>
                                                    </span>
                                                }
                                            </span>
                                        </Row>
                                        <Row>
                                            <Col> <ProgressBar animated
                                                               label={this.props.questions[this.props.id].optionOne.votes.length + ` vote(s)`}
                                                               now={((this.props.questions[this.props.id].optionOne.votes.length)
                                                                   / (this.props.questions[this.props.id].optionOne.votes.length
                                                                       + this.props.questions[this.props.id].optionTwo.votes.length)) * 100}
                                                               style={{margin: '1rem', fontSize: '15px'}}/> </Col>
                                        </Row>
                                        <Row>
                                            <span className='text-muted'
                                                  style={{marginTop: '2rem'}}>{this.props.poll.optionTwo.text}
                                                {this.props.answered && this.props.answeredOption === 'optionTwo' &&
                                                    <span className='text-success'>
                                                        <MdOutlineWhereToVote
                                                            style={{marginLeft: 20, fontSize: '30px'}}/>
                                                    </span>
                                                }
                                            </span>
                                        </Row>
                                        <Row>
                                            <Col> <ProgressBar animated
                                                               label={this.props.questions[this.props.id].optionTwo.votes.length + ` vote(s)`}
                                                               now={((this.props.questions[this.props.id].optionTwo.votes.length)
                                                                   / (this.props.questions[this.props.id].optionOne.votes.length
                                                                       + this.props.questions[this.props.id].optionTwo.votes.length)) * 100}
                                                               style={{margin: '1rem', fontSize: '15px'}}/> </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                {this.props.answered && this.props.answeredOption === 'optionOne' &&
                                                    (
                                                        <p style={{marginTop: '2rem'}}>You have answered
                                                            like {((this.props.questions[this.props.id].optionTwo.votes.length)
                                                                / (this.props.questions[this.props.id].optionOne.votes.length
                                                                    + this.props.questions[this.props.id].optionTwo.votes.length)) * 100} %.
                                                        </p>
                                                    )
                                                }
                                                {this.props.answered && this.props.answeredOption === 'optionTwo' &&
                                                    (
                                                        <p style={{marginTop: '2rem'}}>You have answered
                                                            like {((this.props.questions[this.props.id].optionTwo.votes.length)
                                                                / (this.props.questions[this.props.id].optionOne.votes.length
                                                                    + this.props.questions[this.props.id].optionTwo.votes.length)) * 100} %.
                                                        </p>
                                                    )
                                                }
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col><Button as={Link} variant="outline-dark" style={{margin: '1rem'}}
                                                         to={'/'}>GO BACK</Button></Col>
                                        </Row>
                                    </div>
                                )
                            }
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        );
    }

    handleAnswer(event, answer) {
        event.preventDefault();
        this.props.dispatch(handleSaveAnswer(this.props.authedUser, this.props.id, answer));
    }
}

function mapStateToProps({authedUser, questions, users}, {id}) {
    return {
        answered: Object.keys(users[authedUser].answers).includes(id) && !Object.keys(questions)
            .filter(key => !Object.keys(users[authedUser].answers).includes(key)).includes(id),
        answeredOption: users[authedUser].answers[id],
        poll: questions[id],
        questions,
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(Poll);
