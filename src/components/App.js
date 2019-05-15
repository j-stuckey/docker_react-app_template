import React, { Component } from 'react';

import styles from './styles/App.module.css';

class App extends Component {

	render() {

        return (
            <div className={styles.AppContainer}>
				<section className={styles.LeftSection}>
				</section>
				<section className={styles.RightSection}>
					<p>Hello, world!</p>
				</section>
            </div>
        );
    }
}

export default App;
