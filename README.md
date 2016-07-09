## Step 4
> In this step: add todo event handler, check and remove

Create our event handler by making corresponding function in our component. Be sure to bind them in the `constructor()` or we will not be able to access them in the `render()` function.

We create a new function in the element event handler for each todo, and pass the corresponding id to the function. Though it may affect the performance, but let's not worry about it now.

In each event function, we call the `setState` method to replace the current state with our new state. State cannot be directly modified, in other words, `this.state.todos = newTodos` is forbidden. We have to call the `setState()` function in order to change our state.

It is highly recommended that we use the _functional programming_ way (aka higher-order function) to modify our state. Simply said, we should not call any function that will modify the original state (i.e. `push()`, `pop()`), instead, we should always return a new state after we made any modification.

Now, our app can check / uncheck the todo, and also removing them. In the next step, we will learn how to add a new one.
