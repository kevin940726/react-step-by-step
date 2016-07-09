## Step 5
> In this step: add form input and submit event

Adding a submit event is just like how we did before, simply add a new function and it is all done.

The `<input />` with `value={this.state.value}` and `onChange` is more tricky. the `onChange` statement is pretty straight-forward, we set the state whenever the value changed. But how about the `value` statement?

Turns out that we have to learn the data-flow of a React form component. React is **on-way binding**, which means that the `value` of the input is bind to the value `this.state.value`. whenever the state changed, the value of the input would change too.

So the data-flow is something like this:
1. user type in the input box
2. fire the `onChange` event, set the state of `value` (at this point, the input box value haven't changed yet)
3. `state.value` changed, map to the input box `value`, changed the actual value of the input box


Form can be tricky in React, but once you understand the data-flow of it, you can get the full power of the one-way binding data-flow. If you encounter any problem, go read the awesome [official doc](https://facebook.github.io/react/docs/forms.html).

Try adding some todos in your app now, you will see a new todo as expected.
