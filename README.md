## Step 2
> In this step: copy paste the layout, fix JSX (class to className)

Because we already have a simple mockup of the app we are going to build, we can simply copy the html in `src/views/vanilla.ejs` and paste them into your component.

Note that the weird html code in your js is not actually html, they are **JSX**. You can read the basic of JSX in [JSX in Depth](https://facebook.github.io/react/docs/jsx-in-depth.html). Simply putting, JSX is just like html, but with a little differences, like `class` to `className` and `for` to `htmlFor`.

JSX also support javascript in it (because it is also a javascript file obviously). Place your javascript code in the braces `{}` and it's all done.

On this point, your app won't do a thing if you click on it. Because we haven't add any event handler to your component yet. Go on to the next step to learn how to do so.
