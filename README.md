## Step 3
> In this step: put duplicate todos into state and map through them

There are some duplicate parts in our code, before we do anything we should get rid of them.

First put our todos in the component `state`, every component can have a state, and the state is just an object, which can be modified by using `setState()`. If your data shouldn't be modified at all, you can simply pass them through `props`. We should always know the difference and usage between state and props, read [the doc](https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html) if you are confused.

In order to create a state inside the component, we have to first rewrite our component to a class that extends `React.Component`.

React component can be written in two forms: **pure function** or **react class**. Pure function simply take the props as argument and return the JSX. While react class has multiple lifecycle function and a render function doing the same thing as pure function does, and you can manage state in it.

If you don't know which you are going to choose when creating a component, just choose pure function and switch to react class whenever you need more of it.

Read the source code and comments and go on to the next step.
