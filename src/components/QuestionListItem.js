import React, {Component} from 'react';
import {Badge, Button, Container, Figure, ListGroup, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import question from "../pages/QuestionDetail";

class QuestionListItem extends Component {
    render() {
        return (
            <Container >
                <Row className="justify-content-md-center">
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-center"
                    style={{width: '60%', margin: '0.2rem'}}
                >
                    <Figure>
                        <Figure.Image
                            width={100}
                            height={180}
                            src={this.props.users[this.props.poll.author].avatarURL}
                        />
                        <Figure.Caption>
                            @{this.props.poll.author}
                        </Figure.Caption>
                        <span className='text-muted' style={{fontSize: '10px'}}>{new Date(this.props.poll.timestamp).toLocaleString()}</span>
                    </Figure>
                    <div className="ms-5 me-auto">
                        <div className="fw-bold"> Would you rather...</div>
                    </div>
                    <div className="mb-0 me-auto">
                        <div className="fw fst-italic" style={{marginBottom: '2rem'}}>  ...{this.props.poll.optionOne.text}</div>
                        <div className="fw fst-italic" style={{marginTop: '2rem'}}> ...{this.props.poll.optionTwo.text}</div>
                    </div>
                    <Badge as={Link} variant="primary" pill to={`/questions/${this.props.question}`}> View Poll
                    </Badge>
                </ListGroup.Item>
                </Row>
            </Container>
        );
    }
}


function mapStateToProps({users, questions}, {question}) {
    return{
        poll: questions[question],
        users,
    }
}

export default connect(mapStateToProps)(QuestionListItem);
