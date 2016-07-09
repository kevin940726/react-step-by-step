/* eslint-disable react/no-multi-comp */
import React from 'react';
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
		};

		/* bind your function to this component,
		 * quite fixed usage, just remember to do it after you create a function */
		this.handleCheck = this.handleCheck.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
	}

	/* create a check event handler for every todo,
	 * it will fire whenever user check / uncheck the checkbox */
	handleCheck(e, id) {
		/* create a clone of the todos array,
		 * it's a good practice to never modify the state,
		 * you can do this any other way though (functional programming is recommended) */
		const newTodos = this.state.todos.slice();
		newTodos.find(todo => todo.id === id).isChecked = e.target.checked;

		/* set the state by calling this.setState(),
		 * it will replace the current state with the new one */
		this.setState({
			todos: newTodos,
		});
	}
	/* same as handleCheck(), handle remove of each todo */
	handleRemove(e, id) {
		e.stopPropagation();

		/* this time we do this in a functional programming way,
		 * filter will return a new array with only items that satisfy the function,
		 * in this case, it will return a new array without the particular todo */
		this.setState({
			todos: this.state.todos.filter(todo => todo.id !== id),
		});
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
								{/* inject a onChange or onClick event listener to the element,
									* pass the id to the function to map to every todos */}
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

				<form className="control">
					<input
						id="input-todo"
						className="input"
						type="text"
						placeholder="Add some todos..."
					/>
				</form>
			</div>
		);
	}
}

export default TodoApp;
