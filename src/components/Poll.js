import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Container, Figure, Row} from 'react-bootstrap';
import Select from './Select';
import Result from './Result';

class Poll extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center" style={{marginTop: '2rem'}}>
                    <Figure>
                        <Figure.Image
                            width={200}
                            height={200}
                            src={this.props.users[this.props.poll.author].avatarURL}
                        />
                        <Figure.Caption>
                            @{this.props.poll.author} wants to know...
                        </Figure.Caption>
                        <span className="text-muted"
                              style={{fontSize: '10px'}}>{new Date(this.props.poll.timestamp).toLocaleString()}</span>
                    </Figure>
                </Row>
                <Row className="justify-content-md-center">
                    <Card style={{width: '50%'}}>
                        <Card.Body>
                            <Card.Title style={{margin: '1rem', marginBottom: '2rem'}}><h1>Would you rather...</h1></Card.Title>
                            {!this.props.answered ? (<Select id={this.props.id}/>) : (<Result id = {this.props.id} answered = {this.props.answered}/>)}
                        </Card.Body>
                    </Card>
                </Row>
            </Container>);
    }
}

function mapStateToProps({authedUser, questions, users}, {id}) {
    return {
        poll: questions[id],
        answered: Object.keys(users[authedUser].answers).includes(id) && !Object.keys(questions)
            .filter(key => !Object.keys(users[authedUser].answers).includes(key)).includes(id),
        questions,
        authedUser,
        users
    };
}

export default connect(mapStateToProps)(Poll);
