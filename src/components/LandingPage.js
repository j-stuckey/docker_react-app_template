import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/LandingPage.module.css';

export class LandingPage extends Component {
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
