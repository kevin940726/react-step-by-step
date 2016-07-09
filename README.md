## Step 6
> In this step: filter tab event and map to todos

Just like before, we make the tabs filter work by creating `handleTabClick()` function. Note that unlike jQuery, we no longer need to control the `is-active` class in our click handler. Instead, we already have the `filter` in our state, so we can simply toggle whether to show the `is-active` class directly in render function with it.

The state and props are the data of the component, we can control what to show in the UI only by them. The event handler simply change state, so the data-flow is straight-forward and easy to reason about. We can easily find where and when the state changed and what will be rendered to the UI.

Take some time to think about the data-flow of React. Once you make sure that you understand the logic of it, move on to the next step.
