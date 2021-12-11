import React, {Component} from 'react';
import {Card, Figure, Button, Container} from "react-bootstrap";
import {connect} from "react-redux";
import {setAuthedUserActionCreator} from "../state/authedUser/authedUserActions";


class Login extends Component {
    render() {
        return (
            <Container>
                <div style={{marginTop: '5rem'}}>
                    <Card>
                        <Card.Title><h1>Choose your character!</h1></Card.Title>
                        <div>
                            {Object.keys(this.props.users).map(userId => (
                                <span key={userId} style={{marginLeft: '3rem', marginRight: '3rem'}}>
                        <Figure as={Button} variant='outline-dark' style={{marginBottom: '3rem'}}
                                onClick={(e) => this.handleLogin(e, userId)}>
                            <Figure.Image
                                width={180}
                                height={180}
                                alt="171x180"
                                src={this.props.users[userId].avatarURL}
                            />
                            <Figure.Caption>
                                {this.props.users[userId].name}
                            </Figure.Caption>
                        </Figure>
                    </span>
                            ))}
                        </div>
                    </Card>
                </div>
            </Container>


        );
    }

    handleLogin(e, userId) {
        e.preventDefault();
        this.props.dispatch(setAuthedUserActionCreator(userId));
    }
}


function mapStateToProps({users}) {
    return {
        loading: users === null,
        users
    }
}

export default connect(mapStateToProps)(Login);
