/* eslint-disable global-require */
import page from 'page';
import { install } from 'offline-plugin/runtime';
import 'sanitize.css/sanitize.css';
import 'bulma/css/bulma.css';
import './style.global.css';

const routingCallback = (view, data = {}) => (ctx, next) => {
	require.ensure([], require => {
		const module = require(`./views/${view}.ejs`);
		document.getElementById('view').innerHTML = module(data);
		next(ctx);
	});
};

const noop = () => {};

page('/', routingCallback('home'), noop);
page('/vanilla', routingCallback('vanilla'), () => {
	require.ensure([], require => {
		const $ = require('jquery');
		const main = require('./js/vanilla').default;
		$(document).ready(main);
	});
});
page('/react', routingCallback('react'), () => {
	require.ensure([], require => {
		const React = require('react');
		const { render } = require('react-dom');
		const TodoApp = require('./js/react').default;
		render(
			<TodoApp />,
			document.getElementById('root')
		);
	});
});
page('*', routingCallback('home'), noop);
page.start();

// offline plugin install
install();
