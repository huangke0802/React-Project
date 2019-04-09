import React , {Component} from 'react'


class TodoItem extends Component {
	constructor(props){
		super(props)
		this.handleDelete = this.handleDelete.bind(this);
	}

	//子组件如果想和父组件通讯，需要调用父组件传过来的方法

	handleDelete() {
		const {index} = this.props;
		this.props.delete(index)
	}


	render() {
		 return (
				<li>
					<span>{this.props.content}</span>
					<button onClick={this.handleDelete}>删除</button>
				</li>
			)
	}
}

export default TodoItem;