import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import store from './store/index'
import { HashRouter as Router } from "react-router-dom";
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
	<Router>
		<App />
	</Router>
	</Provider>
);