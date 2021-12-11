import React, {Component} from 'react';
import {connect} from "react-redux";
import {Badge, Container, ListGroup, Row, Tab, Tabs} from "react-bootstrap";
import QuestionItem from "../components/QuestionItem";


class Home extends Component {
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Badge bg='secondary' style={{fontSize: 38}}> Would you rather</Badge>
                </Row>
                <Container>
                    <Row>
                        <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="unanswered" title="Unanswered">
                                <ListGroup as="ol">
                                {this.props.unansweredQuestions.map(q => (
                                        <QuestionItem/>
                                    ))}
                                </ListGroup>
                            </Tab>
                            <Tab eventKey="answered" title="Answered">
                                {this.props.answeredQuestions.map(q => (
                                        <QuestionItem/>
                                    ))}
                            </Tab>
                        </Tabs>
                    </Row>
                </Container>
            </Container>
        );
    }
}

function mapStateToProps({authedUser, questions, users}) {
    return {
        authedUser, questions,
        answeredQuestions: Object.keys(users[authedUser].answers),
        unansweredQuestions: Object.keys(questions).filter(key => !Object.keys(users[authedUser].answers).includes(key))
    }
}

export default connect(mapStateToProps)(Home);
