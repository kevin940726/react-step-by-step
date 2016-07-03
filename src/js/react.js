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
