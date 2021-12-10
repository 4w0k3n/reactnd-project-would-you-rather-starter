import React, {Component} from "react";
import './App.css';
import {connect} from "react-redux";
import {handleInitialData} from "./state/shared/sharedActions";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import NewQuestion from "./pages/NewQuestion";
import Leaderboard from "./pages/Leaderboard";


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render(){
        return (
            <div className="App">
                <Router>
                    <Route path="/" component={Navigation}/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/leaderboard" component={Leaderboard}/>
                    <Route exact path="/new" component={NewQuestion}/>
                </Router>
            </div>
        );
    }

}

export default connect()(App);
