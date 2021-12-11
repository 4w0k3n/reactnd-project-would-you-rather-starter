import React, {Component} from 'react';
import {Badge, Button, Card, Container, Figure, ListGroup, Row} from "react-bootstrap";
import {connect} from "react-redux";

class QuestionItem extends Component {
    render() {
        return (
            <Container >
                <Row className="justify-content-md-center">
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-center"
                    style={{width: '80%'}}
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Subheading</div>
                        Cras justo odio
                    </div>
                    <Badge variant="primary" pill>
                        14
                    </Badge>
                </ListGroup.Item>
                </Row>
            </Container>
        );
    }
}

export default connect()(QuestionItem);
