import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/config/routes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(Routes, document.getElementById('root'));
registerServiceWorker();
 
