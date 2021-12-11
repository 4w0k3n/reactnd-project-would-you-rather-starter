import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Badge, Container, ListGroup, Row, Tab, Tabs} from 'react-bootstrap';
import QuestionListItem from '../components/QuestionListItem';


class Home extends Component {
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Badge bg="secondary" style={{fontSize: 38}}> Would you rather...</Badge>
                </Row>
                <Container>
                    <Row>
                        <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example" className="mb-3"
                              style={{marginTop: '1rem'}}>
                            <Tab eventKey="unanswered" title="Unanswered">
                                <ListGroup as="ol">
                                    {this.props.sorted.map(q => (this.props.unansweredQuestions.includes(q) && (
                                        <QuestionListItem key={q} question={q}/>)))}
                                </ListGroup>
                            </Tab>
                            <Tab eventKey="answered" title="Answered">
                                {this.props.sorted.map(q => (this.props.answeredQuestions.includes(q) && (
                                    <QuestionListItem key={q} question={q}/>)))}
                            </Tab>
                        </Tabs>
                    </Row>
                </Container>
            </Container>);
    }
}

function mapStateToProps({authedUser, questions, users}) {
    return {
        sorted: Object.keys(questions).sort((a, b) => (questions[b].timestamp - questions[a].timestamp)),
        answeredQuestions: Object.keys(users[authedUser].answers),
        unansweredQuestions: Object.keys(questions).filter(key => !Object.keys(users[authedUser].answers).includes(key))
    };
}

export default connect(mapStateToProps)(Home);
