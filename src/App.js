import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {handleInitialData} from './state/shared/sharedActions';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import NewQuestion from './pages/NewQuestion';
import Leaderboard from './pages/Leaderboard';
import QuestionDetail from './pages/QuestionDetail';
import {Spinner} from 'react-bootstrap';
import Login from './pages/Login';


class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <Router>
                {this.props.loading === false ? <div>
                    <Route path="/" component={Navigation}/>
                    {this.props.loggedIn === true ? <div className="App">
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/leaderboard" component={Leaderboard}/>
                        <Route exact path="/add" component={NewQuestion}/>
                        <Route path="/questions/:id" component={QuestionDetail}/>
                    </div> : <div className="App">
                        <Login/>
                    </div>}
                </div> : <div className="App">
                    <Spinner animation="border" style={{marginTop: '15rem'}}/>
                </div>}

            </Router>);
    }

}

function mapStateToProps({authedUser, users}) {
    return {
        loggedIn: authedUser !== null, loading: Object.keys(users).length < 1
    };
}


export default connect(mapStateToProps)(App);
