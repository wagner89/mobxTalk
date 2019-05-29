# Introduction to MobX

Reference for the Intro to Mobx talk @ Crafting Software

## What is MobX?

MobX is a JavaScript library. It handels **state**. 
The paradigm used is **functional reactive programming**.

The project states it's philosophy as such:

**Anything that can be derived from the application state, should be derived. Automatically.**

## Installing mobX

`npm install mobx --save` - MobX library

`npm install mobx-react --save` - React bindings for MobX

Using decorators (needs a plugin in .bablerc or package.json)

```
  "babel": {
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-proposal-optional-chaining"
      ]
    ],
    "presets": [
      "react-app"
    ]
  },
```



## Sources
[Official MobX website](https://mobx.js.org/getting-started.html)
