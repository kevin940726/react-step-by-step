## Step 7
> In this step: split into components, manage their own state

Component, component..., We have talked about components from the beginning, but we have only one root component containing everything so far. Splitting them into multiple smaller components can make the code even more easy to reason about, because we can make each component manage their own state and make them reusable across pages or even projects.

In this case, we split our TODO app into three sub-components: `Tabs`, `Todos`, and `AddTodo`. We can pass the state and event handler function as props to each sub-component.

Not so fast, take another look at the `AddTodo` component, not only did we split it into a individual component, we also make it a class. Why? Remember why do we need to create a class instead of a pure function? We want to manage the state in the component, the `value` is no longer needed in our root component's state. As it only stay relevant inside the `AddTodo` component, we don't need to expose it outside the component. It is also the best practice to manage only the relevant state inside your component, so your components can be as independent as possible.
