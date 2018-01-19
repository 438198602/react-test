import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.styl';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
