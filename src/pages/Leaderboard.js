import React, {Component} from 'react';
import {Badge, Container, Figure, Row, Table} from 'react-bootstrap';
import {connect} from 'react-redux';

class Leaderboard extends Component {
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Badge bg="secondary" style={{fontSize: 38}}> Leaderboard</Badge>
                </Row>
                <Row className="justify-content-md-center">
                    <Table striped bordered hover style={{width: '50%', marginTop: '5rem'}}>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Answered</th>
                            <th>Created</th>
                            <th>Score</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.sortedUserIds.map((user, index) => (<tr key={user}>
                                <td>{index + 1}</td>
                                <td>{<Figure>
                                    <Figure.Image
                                        width={90}
                                        height={90}
                                        src={this.props.users[user].avatarURL}
                                    />
                                    <Figure.Caption>
                                        @{user}
                                    </Figure.Caption>
                                </Figure>}
                                </td>
                                <td>{Object.keys(this.props.users[user].answers).length}</td>
                                <td>{this.props.users[user].questions.length}</td>
                                <td>{(Object.keys(this.props.users[user].answers).length) + (this.props.users[user].questions.length)}</td>
                            </tr>))}
                        </tbody>
                    </Table>
                </Row>
            </Container>);
    }
}

function mapStateToProps({authedUser, users, questions}) {
    return {
        authedUser, users, questions, sortedUserIds: Object.keys(users)
            .sort((a, b) => ((Object.keys(users[b].answers).length + users[b].questions.length)) - (Object.keys(users[a].answers).length + users[a].questions.length))
    };
}

export default connect(mapStateToProps)(Leaderboard);
