import React, { Component, Fragment } from "react";
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false
		}

		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		return (
			<Fragment>
				<div className={ this.state.show ? 'show' : 'hide' }>显示</div>
				<button onClick={ this.handleClick }>点击</button>
			</Fragment>
		);

	}

	handleClick() {
		this.setState({
			show: !this.state.show
		})
	}
}

export default App;