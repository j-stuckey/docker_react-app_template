import React, { Component } from 'react';
import Routes from '../routes/index';
import AppContainer from '../containers/AppContainer';

// Redux-actions might be useful as well. Check it out:
// https://github.com/redux-utilities/redux-actions/blob/master/docs/introduction/Tutorial.md

class App extends Component {
    render() {
        return (
            <AppContainer>
                <Routes />
            </AppContainer>
        );
    }
}

export default App;
