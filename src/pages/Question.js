import React, {Component} from 'react';
import {connect} from "react-redux";

class Question extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.match.params.id}
            </div>
        );
    }
}


function mapStateToProps({authedUser, users, questions}, {match}) {
    return{
        id: match.params.id,
        notFound: !Object.keys(questions).includes(match.params.id),
        answered: Object.keys(users[authedUser].answers).includes(match.params.id) && !Object.keys(questions)
            .filter(key => !Object.keys(users[authedUser].answers).includes(key)).includes(match.params.id),
        poll: questions[match.params.id],
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(Question);
