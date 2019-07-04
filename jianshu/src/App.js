import React from 'react';
import Header from './common/header/index'
import {Iconfont} from './statics/iconfont/iconfont';
import {GlobalStyle} from './style.js';

function App() {
	return (
		<div className="App">
			<Iconfont />
			<GlobalStyle />
			<Header />
		</div>
	);
}

export default App;
