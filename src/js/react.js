/* eslint-disable react/no-multi-comp */
import React from 'react';
import { generate } from 'shortid';
import '../css/todo.global.css';

const Tab = ({ text, isActive, onClick }) => (
	<li
		className={isActive ? 'is-active' : ''}
		onClick={onClick}
	><a>{text}</a></li>
);

const Tabs = ({ filter, handleTabClick }) => (
	<div className="tabs is-centered">
		<ul>
			<Tab
				text="All"
				isActive={filter === 'all'}
				onClick={() => handleTabClick('all')}
			/>
			<Tab
				text="Pending"
				isActive={filter === 'pending'}
				onClick={() => handleTabClick('pending')}
			/>
			<Tab
				text="Done"
				isActive={filter === 'done'}
				onClick={() => handleTabClick('done')}
			/>
		</ul>
	</div>
);

const Todo = ({ isChecked, text, handleCheck, handleRemove }) => (
	<p className="control">
		<label className="checkbox">
			<input
				type="checkbox"
				checked={isChecked}
				onChange={handleCheck}
			/>
			{text}
			<span
				className="icon is-small"
				onClick={handleRemove}
			>
				<i className="fa fa-times"></i>
			</span>
		</label>
	</p>
);

const Todos = ({ todos, filter, handleCheck, handleRemove }) => (
	<div className="content">
		{todos.length ?
			todos.map(todo => (
				<Todo
					key={todo.id}
					{...todo}
					handleCheck={e => handleCheck(e, todo.id)}
					handleRemove={e => handleRemove(e, todo.id)}
				/>
			)) :
			(() => {
				if (filter === 'all') {
					return 'No todos at all.';
				} else if (filter === 'pending') {
					return 'All done!';
				} else if (filter === 'done') {
					return 'Do something please...';
				}
				return 'Loading...';
			})()
		}
	</div>
);

class AddTodo extends React.Component {
	constructor() {
		super();

		this.state = { value: '' };

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();

		this.props.handleSubmit(this.state.value);

		this.setState({ value: '' });
	}
	onChange(e) {
		this.setState({ value: e.target.value });
	}

	render() {
		return (
			<form className="control" onSubmit={this.onSubmit}>
				<input
					id="input-todo"
					className="input"
					type="text"
					placeholder="Add some todos..."
					value={this.state.value}
					onChange={this.onChange}
				/>
			</form>
		);
	}
}


class TodoApp extends React.Component {
	constructor() {
		super();

		this.state = {
			todos: [],
			filter: 'all',
			loading: true,
		};

		this.handleTabClick = this.handleTabClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
	}
	componentDidMount() {
		fetch('http://10.0.1.132:8001/todos')
			.then(res => res.json())
			.then(todos => {
				this.setState({ todos, loading: false });
			});
	}

	handleTabClick(filter) {
		this.setState({ filter });
	}
	handleSubmit(value) {
		this.setState({
			todos: [
				...this.state.todos,
				{ id: generate(), text: value, isChecked: false },
			],
		});
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

	render() {
		return (
			<div className="box">
				<Tabs
					filter={this.state.filter}
					handleTabClick={this.handleTabClick}
				/>
				<Todos
					todos={this.state.todos
						.filter(todo => {
							if (this.state.filter === 'all') {
								return true;
							} else if (this.state.filter === 'pending') {
								return !todo.isChecked;
							} else if (this.state.filter === 'done') {
								return todo.isChecked;
							}
							return true;
						})
					}
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
