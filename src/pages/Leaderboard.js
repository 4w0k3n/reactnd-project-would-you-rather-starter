import React, {Component} from 'react';
import {Badge, Container, Row} from "react-bootstrap";

class Leaderboard extends Component {
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Badge bg='secondary' style={{fontSize: 38}}> Leaderboard</Badge>
                </Row>
            </Container>
        );
    }
}

export default Leaderboard;
