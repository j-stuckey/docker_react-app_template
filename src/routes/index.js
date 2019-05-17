/* eslint-disable no-unused-expressions */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LandingPage } from '../components/LandingPage';

const Routes = () => (
    <Router>
        <Route path="/" component={LandingPage} />
    </Router>
);

export default Routes;
