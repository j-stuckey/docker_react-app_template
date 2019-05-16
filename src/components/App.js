import React, { Component, Fragment } from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { LandingPage } from './LandingPage';

// Redux-actions might be useful as well. Check it out:
// https://github.com/redux-utilities/redux-actions/blob/master/docs/introduction/Tutorial.md

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path="/" component={LandingPage} />
                </Router>
            </div>
        );
    }
}

export default App;
