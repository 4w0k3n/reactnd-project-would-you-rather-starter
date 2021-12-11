import React, {Component} from 'react';
import {Badge, Button, Col, Container, Form, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {handleSaveQuestion} from '../state/shared/sharedActions';


class NewQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionOne: '', optionTwo: ''
        };
    }

    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Row>
                        <Badge bg="secondary" style={{fontSize: 38}}> Create a new Question: Complete the
                            sentence</Badge>
                    </Row>
                </Container>
                <Container>
                    <Row style={{marginTop: '5rem'}}>
                        <h1 style={{marginBottom: '2rem'}}>Would you rather...</h1>
                        <Form>
                            <Row>
                                <Col>
                                    <label htmlFor="optionOne">Option One</label>
                                    <Form.Control
                                        id="optionOne"
                                        label="Option One"
                                        type="text"
                                        value={this.state.optionOne}
                                        onChange={e => {
                                            this.handleOptionOneInput(e, e.target.value);
                                        }}
                                    />
                                </Col>
                                or
                                <Col>
                                    <label htmlFor="optionTwo">Option Two</label>
                                    <Form.Control
                                        id="optionTwo"
                                        label="Option One"
                                        type="text"
                                        value={this.state.optionTwo}
                                        onChange={e => {
                                            this.handleOptionTwoInput(e, e.target.value);
                                        }}
                                    />
                                </Col>
                            </Row>
                        </Form>
                        <div style={{marginTop: '2rem'}}>
                            <Button variant="outline-primary" style={{margin: '2rem'}}
                                    onClick={e => this.handleCreateQuestion(e)}>Create</Button>
                            <Button variant="outline-danger" as={Link} style={{margin: '2rem'}} to={'/'}>Cancel</Button>
                        </div>
                    </Row>
                </Container>
            </div>

        );
    }

    handleOptionOneInput(e, value) {
        e.preventDefault();
        this.setState({
            optionOne: value
        });

    }

    handleOptionTwoInput(e, value) {
        e.preventDefault();
        this.setState({
            optionTwo: value
        });
    }

    handleCreateQuestion(e) {
        e.preventDefault();
        let question = {
            optionOneText: this.state.optionOne, optionTwoText: this.state.optionTwo, author: this.props.authedUser

        };
        this.props.dispatch(handleSaveQuestion(question));
        this.props.history.push('/');
    }
}


function mapStateToProps({authedUser}) {
    return {
        authedUser
    };
}

export default connect(mapStateToProps)(NewQuestion);
