/* eslint-disable react/no-multi-comp */
import React from 'react';
import { generate } from 'shortid';
import '../css/todo.global.css';

class TodoApp extends React.Component {
	constructor() {
		super();

		this.state = {
			todos: [
				{
					id: '1',
					text: 'Work it harder.',
					isChecked: true,
				},
				{
					id: '2',
					text: 'Make it better.',
					isChecked: false,
				},
				{
					id: '3',
					text: 'Do it faster.',
					isChecked: false,
				},
				{
					id: '4',
					text: 'Makes us stronger.',
					isChecked: false,
				},
			],
			value: '',
		};

		this.handleCheck = this.handleCheck.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleCheck(e, id) {
		const newTodos = this.state.todos.slice();
		newTodos.find(todo => todo.id === id).isChecked = e.target.checked;

		this.setState({
			todos: newTodos,
		});
	}
	handleRemove(e, id) {
		e.stopPropagation();

		this.setState({
			todos: this.state.todos.filter(todo => todo.id !== id),
		});
	}
	handleSubmit(e) {
		e.preventDefault();

		this.setState({
			todos: [
				...this.state.todos,
				{ id: generate(), text: this.state.value, isChecked: false },
			],
			value: '',
		});
	}
	handleChange(e) {
		this.setState({ value: e.target.value });
	}

	render() {
		return (
			<div className="box">
				<div className="tabs is-centered">
					<ul>
						<li className="is-active"><a>All</a></li>
						<li><a>Pending</a></li>
						<li><a>Done</a></li>
					</ul>
				</div>

				<div className="content">
					{this.state.todos.map(todo => (
						<p key={todo.id} className="control">
							<label className="checkbox">
								<input
									type="checkbox"
									checked={todo.isChecked}
									onChange={e => this.handleCheck(e, todo.id)}
								/>
								{todo.text}
								<span
									className="icon is-small"
									onClick={e => this.handleRemove(e, todo.id)}
								>
									<i className="fa fa-times"></i>
								</span>
							</label>
						</p>
					))}
				</div>

				<form className="control" onSubmit={this.handleSubmit}>
					<input
						id="input-todo"
						className="input"
						type="text"
						placeholder="Add some todos..."
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</form>
			</div>
		);
	}
}

export default TodoApp;
