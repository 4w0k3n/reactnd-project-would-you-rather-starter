import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Badge, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Poll from '../components/Poll';

class QuestionDetail extends Component {
    render() {
        return (
            <Container>
                {this.props.notFound ? (<h1 style={{marginTop: '15rem'}}>
                        404: 'Question not found' <br/> Click <Badge as={Link} variant="primary" pill
                                                                     to={`/`}> here</Badge> to return.
                    </h1>) : (<Poll id={this.props.id}/>)}
            </Container>);
    }
}


function mapStateToProps({questions}, {match}) {
    return {
        id: match.params.id, notFound: !Object.keys(questions).includes(match.params.id)
    };
}

export default connect(mapStateToProps)(QuestionDetail);
