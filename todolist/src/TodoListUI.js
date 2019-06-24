/* UI组件负责渲染 */
import React, {
	Component
} from 'react';
import {
	Input,
	Button,
	List
} from 'antd';

//无状态组件
const TodoListUI = (props) => {
	return (
		<div style={ { width: "500px", margin: "0 auto" } }>
			<div style={ { "textAlign": 'center' } }>
				<Input placeholder="To do Something"
					value={ props.inputValue }
					style={ { width: "422px", margin: "10px auto" } }
					onChange={ props.handleInputChange }
				/>
				<Button type="primary" style={ { marginLeft: '12px' } } onClick={ props.handleSubmit }>提交</Button>
			</div>
			<List
				size="small"
				bordered
				dataSource={ props.list }
				renderItem={ (item, index) => (<List.Item onClick={ (index) => { props.handleItemDelete(index) } } >{ item }</List.Item>) }
			/>
		</div>
	)
}

// class TodoListUI extends Component {
// 	render() {
// 		return (
// 			<div style={ { width: "500px", margin: "0 auto" } }>
// 				<div style={ { "textAlign": 'center' } }>
// 					<Input placeholder="To do Something"
// 						value={ this.props.inputValue }
// 						style={ { width: "422px", margin: "10px auto" } }
// 						onChange={ this.props.handleInputChange }
// 					/>
// 					<Button type="primary" style={ { marginLeft: '12px' } } onClick={ this.props.handleSubmit }>提交</Button>
// 				</div>
// 				<List
// 					size="small"
// 					bordered
// 					dataSource={ this.props.list }
// 					renderItem={ (item, index) => (<List.Item onClick={ (index) => {this.props.handleItemDelete(index)} } >{ item }</List.Item>) }
// 				/>
// 			</div>
// 		)
// 	}
// }
export default TodoListUI