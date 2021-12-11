import React, {Component} from 'react';
import {connect} from "react-redux";
import {Badge, Card, Col, Container, Figure, Row, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {handleSaveAnswer} from "../state/shared/sharedActions";

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
                        <span className='text-muted' style={{fontSize: '10px'}}>{new Date(this.props.poll.timestamp).toLocaleString()}</span>
                    </Figure>
                </Row>
                <Row className="justify-content-md-center">
                    <Card style={{width: '50%'}}>
                        <Card.Body>
                            <Card.Title style={{margin: '1rem'}}>Would you rather...</Card.Title>
                                <Row>
                                    <Col><button className='btn btn-lg btn-outline-primary'  style={{margin: '1rem'}} onClick={event => {this.handleAnswer(event, 'optionOne')}}>{this.props.poll.optionOne.text}</button></Col>
                                </Row>
                                <Row>
                                    <Col><button className='btn btn-lg btn-outline-primary'  style={{margin: '1rem'}} onClick={event => {this.handleAnswer(event, 'optionTwo')}}>{this.props.poll.optionTwo.text}</button></Col>
                                </Row>
                                <Row>
                                    <Col><Button as={Link} variant="outline-dark"  style={{margin: '1rem'}} to={'/'}>GO BACK</Button></Col>
                                </Row>
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
        poll: questions[id],
        questions,
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(Poll);
