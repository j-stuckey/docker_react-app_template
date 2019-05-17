import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from '../containers/AppContainer';

import styles from './styles/LandingPage.module.css';

export class LandingPage extends Component {
    render() {
        return (
            <AppContainer>
                <p>Hello, world!</p>
                <p>
                    This starter kit should come equipped with Redux,
                    Redux-Thunk, React Router and CSS Modules.
                </p>
            </AppContainer>
        );
    }
}
