# 🚀 Welcome

To run dev server and start to develop:

```
npm start
```

To run build process:

```
npm run build
```

## Folders
* **`src/config`** - responsoble for webpack related files
* **`src/pages`** - for scripts related to individual html pages
* **`src/modules`** - here you can place all of your JS code, divided by separate modulet which could be imported anywhere

## Separate HTML page creation
1) create html file inside `src` directory
2) go to `config/webpack.base.js` and find `PATHS` variable.
  by default it looks like this:
    ```
    const PATHS = {
      src: path.resolve("./src"),
      dist: path.resolve("./dist"),
      assets: "assets/",
      pages: {
        index: [`${path.resolve("./src")}/pages/index.js`],
        about: [`${path.resolve("./src")}/pages/about.js`],
      },
    }
    ```
3) add new property to the `pages` object, where property name is equal to HTML filename and value could be the path to JS file
4) make sure,  that you imported your styles for new page into JS file, you just mentioned in `PATHS.pages` property of the `webpack.base.js`