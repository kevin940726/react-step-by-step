/* eslint-disable react/no-multi-comp */
import React from 'react';
import { generate } from 'shortid';
import '../css/todo.global.css';

const Tabs = ({ filter, handleTabClick }) => (
	<div className="tabs is-centered">
		<ul>
			<li
				className={filter === 'all' ?
					'is-active' : ''}
				onClick={() => handleTabClick('all')}
			><a>All</a></li>
			<li
				className={filter === 'pending' ?
					'is-active' : ''}
				onClick={() => handleTabClick('pending')}
			><a>Pending</a></li>
			<li
				className={filter === 'done' ?
					'is-active' : ''}
				onClick={() => handleTabClick('done')}
			><a>Done</a></li>
		</ul>
	</div>
);

const Todos = ({ todos, filter, handleCheck, handleRemove }) => (
	<div className="content">
		{todos.filter(todo => {
			if (filter === 'all') {
				return true;
			} else if (filter === 'pending') {
				return !todo.isChecked;
			} else if (filter === 'done') {
				return todo.isChecked;
			}
			return true;
		}).map(todo => (
			<p key={todo.id} className="control">
				<label className="checkbox">
					<input
						type="checkbox"
						checked={todo.isChecked}
						onChange={e => handleCheck(e, todo.id)}
					/>
					{todo.text}
					<span
						className="icon is-small"
						onClick={e => handleRemove(e, todo.id)}
					>
						<i className="fa fa-times"></i>
					</span>
				</label>
			</p>
		))}
	</div>
);

class AddTodo extends React.Component {
	constructor(props) {
		super(props);

		this.state = { value: '' };

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		this.setState({ value: '' });

		this.props.handleSubmit(this.state.value);
	}
	handleChange(e) {
		this.setState({ value: e.target.value });
	}

	render() {
		return (
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
		);
	}
}

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
			filter: 'all',
		};

		this.handleTabClick = this.handleTabClick.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleTabClick(filter) {
		this.setState({ filter });
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
	handleSubmit(value) {
		this.setState({
			todos: [
				...this.state.todos,
				{ id: generate(), text: value, isChecked: false },
			],
		});
	}

	render() {
		return (
			<div className="box">
				<Tabs
					filter={this.state.filter}
					handleTabClick={this.handleTabClick}
				/>

				<Todos
					todos={this.state.todos}
					filter={this.state.filter}
					handleCheck={this.handleCheck}
					handleRemove={this.handleRemove}
				/>

				<AddTodo handleSubmit={this.handleSubmit} />
			</div>
		);
	}
}

export default TodoApp;
