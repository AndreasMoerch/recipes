# Recipe - A React App for GitHub Pages

A list of recipes we use ourselves. A simple react app deployed to GitHub pages - can be found live at: [https://andreasmoerch.github.io/recipes/](https://andreasmoerch.github.io/recipes/). 

*A small app created for learning, chatting with GitHub Copilot, and creating something useful.*

## Commands
* `npm start` - Start the NodeJS server on port 3000

## Auto-labeling
Pull requests are automatically labeled based on the files changed:
- Changes to `web/` files → `web` label
- Changes to `.github/` files → `github` label  
- Changes to README or `.md` files → `documentation` label
