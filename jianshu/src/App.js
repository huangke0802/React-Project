import React from 'react';
import Header from './common/header/index'
import { Iconfont } from './statics/iconfont/iconfont';
import { GlobalStyle } from './style.js';
import { Provider } from 'react-redux';
import store from './store'

function App() {
	return (
		<div className="App">
			<Provider store={ store }>
				<Iconfont />
				<GlobalStyle />
				<Header />
			</Provider>
		</div>
	);
}

export default App;
