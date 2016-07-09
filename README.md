## Step 8
> In this step: load todos asynchronously

We are almost done! Now that we have made our TODO app work as expected, we want to do a bonus to load the initial todos asynchronously via API.

The best practice is to place our fetching api inside the `componentDidMount()` function. It's a lifecycle function of React component, which will fire immediately after the component is ready and mount. The fetching takes some time so we will need to first feed a empty or fake array to state so that the component would not crash.

Refresh the browser and you will first see a blank todos list and follow by four todos loaded from our fake server. This is only the R part of the basic CRUD database operation. You can also implement other operation if you like following the same logic.

And..., that's it! You have finished the simple TODO app using React. Now that you have known the basis of React, start building your own web app with React! As your project goes bigger and bigger, you might notice that the state management becomes difficult to communicate between components, here comes [Redux](https://github.com/reactjs/redux). If you want to make a modern single page application, you might also want to look at [react-router](https://github.com/reactjs/react-router). There are more and more libraries like that in the React ecosystem. Learn them only if you need them, otherwise just make it simple by only using React itself.
