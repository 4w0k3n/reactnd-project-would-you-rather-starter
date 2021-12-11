import React, {Component} from 'react';
import {Badge, Container, Row} from "react-bootstrap";

class NewQuestion extends Component {
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Badge bg='secondary' style={{fontSize: 38}}> New Question</Badge>
                </Row>
            </Container>
        );
    }
}

export default NewQuestion;
