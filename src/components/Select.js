import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {handleSaveAnswer} from '../state/shared/sharedActions';

class MyComponent extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <button className="btn btn-lg btn-outline-primary"
                                style={{margin: '1rem'}} onClick={event => {
                            this.handleAnswer(event, 'optionOne');
                        }}>... {this.props.poll.optionOne.text}</button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button className="btn btn-lg btn-outline-primary"
                                style={{margin: '1rem'}} onClick={event => {
                            this.handleAnswer(event, 'optionTwo');
                        }}>... {this.props.poll.optionTwo.text}</button>
                    </Col>
                </Row>
                <Row>
                    <Col><Button as={Link} variant="outline-dark" style={{margin: '1rem'}}
                                 to={'/'}>GO BACK</Button></Col>
                </Row>
            </div>
        );
    }
    handleAnswer(event, answer) {
        event.preventDefault();
        this.props.dispatch(handleSaveAnswer(this.props.authedUser, this.props.id, answer));
    }
}


function mapStateToProps({questions, authedUser, users}, {id}) {
    return {
        authedUser, users,
        poll: questions[id]
    }
}

export default connect(mapStateToProps)(MyComponent);
