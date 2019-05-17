import React from 'react';
import styles from './styles/AppContainer.module.css';

export default class AppContainer extends React.Component {

    render(){
        return (<div className={styles.AppContainer}>
            {this.props.children}
        </div>);
    }
}