import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import OnionHater from './components/OnionHater';

ReactDOM.render(<OnionHater />, document.getElementById('root'));
registerServiceWorker();
