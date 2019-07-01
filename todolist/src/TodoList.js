import React from 'react';
import {connect} from 'react-redux';


const TodoList = (props) => {
	const {inputValue, changeInputValue, handleClick, list, handleDelete} = props;
	return (
		<div>
			<div>
				<input type="text" value={inputValue} onChange={changeInputValue} />
				<button onClick={handleClick}>提交</button>
			</div>
			<ul>
				{
					list.map((item, index) => {
						return <li key={index} onClick={() => handleDelete(index)}>{item}</li>
					})
				}
			</ul>

		</div>
	)
}

// class TodoList extends Component {

// 	// constructor(props) {
// 	// 	super(props);
// 	// 	this.state = store.getState();

// 	// }

// 	render() {
// 		const {inputValue, changeInputValue, handleClick, list, handleDelete} = this.props;
// 		return (
// 			<div>
// 				<div>
// 					<input type="text" value={inputValue} onChange={changeInputValue} />
// 					<button onClick={handleClick}>提交</button>
// 				</div>
// 				<ul>
// 					{
// 						list.map((item, index) => {
// 							return <li key={index} onClick={() => handleDelete(index)}>{item}</li>
// 						})
// 					}
// 				</ul>

// 			</div>
// 		)
// 	}

	
// }


const mapStateToProps = (state) => {
	return {
		inputValue : state.inputValue,
		list : state.list
	}
}

const  mapDispatchToProps = (dispatch) => {
	return {
		changeInputValue(e) {
			// console.log(e.target.value)
			const action ={
				type : "change_input_value",
				value : e.target.value
			}
			dispatch(action);
		},
		handleClick(){
			const action = {
				type : 'add_item'
			}
			dispatch(action)
		},
		handleDelete(i){
			const action = {
				type : 'delete_item',
				index : i,
			}
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);