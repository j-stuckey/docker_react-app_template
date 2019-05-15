import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/App.module.css'; // CSS Modules

// Redux-actions might be useful as well. Check it out:
// https://github.com/redux-utilities/redux-actions/blob/master/docs/introduction/Tutorial.md

class App extends Component {
    render() {
        return (
            <div className={styles.AppContainer}>
                <section className={styles.LeftSection}>
                    <Link to="/about">About</Link>
                </section>
                <section className={styles.RightSection}>
                    <p>Hello, world!</p>
                    <p>
                        This starter kit should come equipped with Redux,
                        Redux-Thunk, React Router and CSS Modules. 
                    </p>
                </section>
            </div>
        );
    }
}

export default App;
