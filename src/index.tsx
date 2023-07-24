import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const elem = document.getElementById('root');

if (elem) {
	const root = ReactDOM.createRoot(elem);
	
	root.render(
		<React.StrictMode>
			<Provider store={store}>
				<HashRouter>
					<App />
				</HashRouter>
			</Provider>
		</React.StrictMode>
	);
}
