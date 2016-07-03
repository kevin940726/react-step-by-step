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

page('/vanilla', routingCallback('vanilla'), () => {
	require.ensure([], require => require('./js/vanilla'));
});
page('/react', routingCallback('react'), () => {
	require.ensure([], require => require('./js/react'));
});
page('*', routingCallback('404'), noop);
page.start();

// offline plugin install
install();
