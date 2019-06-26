import React, {
	Component,
} from 'react';

import 'antd/dist/antd.css';

import store from './store';
// import axios from 'axios';

import {
	getInputChangeAction,
	getAddItemAction,
	getDeleteItemAction,
	getInitList
} from './store/actionCreators'
import TodoListUI from './TodoListUI';

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		//这里绑定了随便的方法，这样就可以更新state中的数据
		store.subscribe(this.handleStoreChange);
	}

	render() {
		return (
			<TodoListUI
				inputValue={ this.state.inputValue }
				list={ this.state.list }
				handleInputChange={ this.handleInputChange }
				handleSubmit={ this.handleSubmit }
				handleItemDelete={ this.handleItemDelete }
			/>
		)
	}

	handleInputChange(e) {
		// const action = {
		// 	type: CHANG_INPUT_VALUE,
		// 	value: e.target.value
		// }

		const action = getInputChangeAction(e.target.value);
		store.dispatch(action);
	}

	handleStoreChange() {
		//当我感知到store发生变化时，将store中的数据覆盖现在的state中的数据；
		this.setState(store.getState());
	}

	handleSubmit() {
		// const action = {
		// 	type: ADD_TODO_ITEM,
		// }

		const action = getAddItemAction();

		store.dispatch(action)
	}

	handleItemDelete(index) {
		// const action = {
		// 	type: DELETE_TODO_ITEM,
		// 	index
		// }
		const action = getDeleteItemAction(index)
		store.dispatch(action)
	}

	componentDidMount() {
		const action = getInitList();
		store.dispatch(action);
		// axios.get('https://www.easy-mock.com/mock/5d10eb44b674851c27217ece/example/list.json').then((res) => {
    //   const data = res.data.data;
    //   const action = initListAction(data);
		// 	store.dispatch(action)
    // })
	}

}

export default TodoList