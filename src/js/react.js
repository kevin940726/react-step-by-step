/* eslint-disable react/no-multi-comp */
import React from 'react';
import '../css/todo.global.css';

/* copy paste the mockup into the component,
 * convert all `class` into `className` (because JSX) */
const TodoApp = () => (
	<div className="box">
		<div className="tabs is-centered">
			<ul>
				<li className="is-active"><a>All</a></li>
				<li><a>Pending</a></li>
				<li><a>Done</a></li>
			</ul>
		</div>

		<div className="content">
			<p className="control">
				<label className="checkbox">
					<input type="checkbox" checked />
					Work it harder.
					<span className="icon is-small">
						<i className="fa fa-times"></i>
					</span>
				</label>
			</p>

			<p className="control">
				<label className="checkbox">
					<input type="checkbox" />
					Make it better.
					<span className="icon is-small">
						<i className="fa fa-times"></i>
					</span>
				</label>
			</p>

			<p className="control">
				<label className="checkbox">
					<input type="checkbox" />
					Do it faster.
					<span className="icon is-small">
						<i className="fa fa-times"></i>
					</span>
				</label>
			</p>

			<p className="control">
				<label className="checkbox">
					<input type="checkbox" />
					Makes us stronger.
					<span className="icon is-small">
						<i className="fa fa-times"></i>
					</span>
				</label>
			</p>
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

export default TodoApp;
