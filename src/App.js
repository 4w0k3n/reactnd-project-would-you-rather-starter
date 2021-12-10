import React, {Component} from "react";
import './App.css';
import {connect} from "react-redux";
import {handleInitialData} from "./state/shared/sharedActions";


class App extends React.Component{
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render(){
        return (
            <div className="App">
                APP
            </div>
        );
    }

}

export default connect()(App);
