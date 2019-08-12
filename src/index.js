import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

const app = (
	<Router>
		<App />
	</Router>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
