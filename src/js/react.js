/* eslint-disable react/no-multi-comp */
import React from 'react';
import '../css/todo.global.css';

/* convert your component to a component class to manage the state */
class TodoApp extends React.Component {
	/* add a constructor to your component,
	 * this function will initialize the setup */
	constructor() {
		/* call super() to make `this` local,
		 * quite fixed usage, just remember to do it */
		super();

		/* set up the initial state of your component,
		 * your state must be a object */
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
					{/* map through your state and create a list of component from it,
						* React will automatically render all of the items in it */}
					{this.state.todos.map(todo => (
						/* each of your item must contain a `key` attribute,
						 * and the value of it must be unique,
						 * in here, we simply assign it to the id of each todo */
						<p key={todo.id} className="control">
							<label className="checkbox">
								<input
									type="checkbox"
									checked={todo.isChecked}
								/>
								{todo.text}
								<span className="icon is-small">
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
