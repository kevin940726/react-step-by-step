import $ from 'jquery';
import '../css/todo.global.css';

const main = () => {
	// handle add new todo
	$('form').submit(e => {
		e.preventDefault();

		$('.content').append(
			`<p class="control">
			  <label class="checkbox">
			    <input type="checkbox">
			    ${$('#input-todo').val()}
				<span class="icon is-small">
				  <i class="fa fa-times"></i>
				</span>
			  </label>
			</p>`
		);

		$('#input-todo').val('');

		// instant filter on input
		const curFilter = $('.tabs li.is-active').index();

		if (curFilter === 2) { // done
			// hide new todo if we are in the `done` tab
			$('.content > .control:last-child').hide();
		}
	});

	// handle tab filter
	$('.tabs li').click(function () {
		$('.tabs li').removeClass('is-active');
		$(this).addClass('is-active');

		const selected = $(this).index();
		const allTodos = $('.content > .control');
		const checkedTodos = allTodos.filter(function () {
			return $(this).has('input:checked').length;
		});

		if (selected === 0) { // all
			allTodos.show();
		} else if (selected === 1) { // pending
			allTodos.show();
			checkedTodos.hide();
		} else if (selected === 2) { // done
			allTodos.hide();
			checkedTodos.show();
		}
	});

	// instant filter on check.
	// use `on` because we need to handle the checkbox
	//   that are dynamically added.
	$('.content').on('change', 'input[type="checkbox"]', function () {
		const curFilter = $('.tabs li.is-active').index();

		if (curFilter === 1) { // pending
			// hide checked todo if we are in the `pending` tab
			if (this.checked) {
				$(this).parents('.control').hide();
			}
		} else if (curFilter === 2) { // done
			// hide unchecked todo if we are in the `done` tab
			if (!this.checked) {
				$(this).parents('.control').hide();
			}
		}
	});

	// delete todo, use `on` too for dynamically added todos.
	$('.content').on('click', '.checkbox .icon', function () {
		$(this).parents('.control').remove();
	});
};

export default main;
