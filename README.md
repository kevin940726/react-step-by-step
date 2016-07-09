# React step-by-step
React step-by-step tutorial of building a TODO app with best practice in 8 simple steps.

## About this tutorial and pre-requirement
> **tl;dr**: Knowing the basic of **jQuery**, **ES6**, and **npm**. **None of them are required knowledge**, but they may help you to understand.

This tutorial is mainly for those who are already familiar with basic vanilla js or jQuery, and can build a simple TODO app with that.

This repo will teach you how to build a TODO app from scratch using React and ES6 with best practice. The tutorial will guide you step-by-step using git with a UI-friendly command line program, please follow the instruction or you might break the git system.

Note that this tutorial is just a walkthrough of building a simple TODO app, it doesn't cover all of the React API and you may not find it useful if you haven't heard of React at all. To have a deeper look of what and how React can do, make sure to check out their [official doc](https://facebook.github.io/react/docs/getting-started.html).

The project directory structure is a fork of the [web-starter](https://github.com/25sprout/web-starter/tree/master) repo. The boilerplate contains only basic routing with **page.js** and view system with **ejs**. If you are just started to use React, I recommend you to use this boilerplate because it doesn't include too many extra library of the React ecosystem nowadays, as it can be too much to take on from the beginning.

## Getting started
Needless to say, first clone this repo and start looking into it with your favorite editor.

```Bash
git clone https://github.com/kevin940726/react-step-by-step
cd react-step-by-step
atom . # change atom with your favorite editor (vim, subl)
npm start # start the development server
```

the `master` branch contains the final outcome of the todo app. You don't have to look into that now. But you can visit [http://localhost:8000/](http://localhost:8000/) and take a look at the final app.

Now that you have a overview of what we are going to build, run the `step-by-step` program and start learning step-by-step!

```Bash
npm run step-by-step
```

## What's next?
Start with choosing `STEP 0` in the command line with arrow key and enter.

Read the instruction and play with the codebase, your server will always be running, so you can always check on it with hot-reload support by default.

I strongly recommend you to install the git plugin for your editor to show the diff between steps. Atom comes with by default, [GitGutter](https://github.com/jisaacks/GitGutter) is a wonderful plugin for Sublime Text.

**Always close the program / tutorial by selecting `Exit` in the list, or you will end up being in the other branch rather than master (You can fix this by checkout back to master with `-f` flag though).**

## Under the hood
`step-by-step.js` is just a node program with fancy interface powered by **inquirer.js**. It simply switch between branches and log the instruction and show the differences. If you are not comfortable of using the program (as you may want to view the tutorial on github without cloning it), just checkout to a different branch, the instruction will also be available in `README.md`.

## Contribution
All issues, PRs and advices are more than welcome to discuss about :).

## License
MIT
