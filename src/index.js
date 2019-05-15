import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import 'normalize.css';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
