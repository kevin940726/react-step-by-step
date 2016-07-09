/* import React, obviously */
import React from 'react';
/* import css for styling,
 * it will automatically inject to the page by the power of webpack,
 * you don't have to worry about it now. */
import '../css/todo.global.css';

/* create a simple Hello World example component
 * using pure function render */
const TodoApp = () => (
	<div>react todo</div>
);

/* export your component to your router */
export default TodoApp;
