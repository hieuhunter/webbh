import 'react-multi-carousel/lib/styles.css';
import './App.css';
import { Provider } from 'react-redux';
import store from 'redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from 'Router';
import React from 'react';

function App() {
	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
}

export default App;
