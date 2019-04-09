import React, {
	Component,
} from 'react';

import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
// import { CHANG_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'

class TodoList_2 extends Component {

	constructor(props) {
		super(props);
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
		//这里绑定了随便的方法，这样就可以更新state中的数据
		store.subscribe(this.handleStoreChange);
	}

	render() {
		return (
			<div style={ { width: "500px", margin: "0 auto" } }>
				<div style={ { "textAlign": 'center' } }>
					<Input placeholder="To do Something"
						value={ this.state.inputValue }
						style={ { width: "422px", margin: "10px auto" } }
						onChange={ this.handleInputChange }
					/>
					<Button type="primary" style={ { marginLeft: '12px' } } onClick={ this.handleSubmit }>提交</Button>
				</div>
				<List
					size="small"
					bordered
					dataSource={ this.state.list }
					renderItem={ (item, index) => (<List.Item onClick={ this.handleItemDelete.bind(this, index) } >{ item }</List.Item>) }
				/>
			</div>
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

}

export default TodoList_2