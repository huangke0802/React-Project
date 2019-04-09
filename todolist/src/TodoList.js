import React, {
	Component, Fragment
} from 'react';

import TodoItem from './TodoItem'
import './todoList.css'

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			list: [],
			inputValue: ""
		};

		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.delete = this.delete.bind(this)
	}

	handleInputChange(e) {
		this.setState({
			inputValue: e.target.value
		})
	}

	handleBtnClick() {
		this.setState({
			list: [...this.state.list, this.state.inputValue],
			inputValue: ""
		})
	}

	getItem() {
		return (
			this.state.list.map((item, idx) => {
				return <TodoItem content={ item } key={ idx } index={ idx } delete={ this.delete } />
			})
		)
	}

	//React中父组件向子组件传参使用属性的方式；子组件通过this.props.xxx获取
	//子组件如果想和父组件通讯，需要调用父组件传过来的方法

	delete(index) {
		const list = [...this.state.list];
		list.splice(index, 1);
		this.setState({
			list
		})
	}

	render() {
		return (
			//相当于vue中的template标签
			<Fragment>
				<div>
					<input value={ this.state.inputValue } onChange={ this.handleInputChange } />
					<button onClick={ this.handleBtnClick } className="btn"> add </button>
				</div>
				<ul>{ this.getItem() }</ul>
			</Fragment>
		);
	}
}

export default TodoList;