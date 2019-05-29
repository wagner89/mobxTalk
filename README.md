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

Install the plugin:
`yarn add @babel/plugin-proposal-decorators`

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

## Basic elements of MobX and their syntax

1. State
  - What is an observable?
  - What can be observable? (objects, arrays, maps)
  - What is observable.shallow (collections, but not their contents)
  
2. Derivations
  - Computed values (pure functions based on observables)
  - Rendering
  - Serialization

3. Reactions
  - DOM changes
  - Disk or network I/O

4. Actions
  - User input
  - WS notifications
  - What are transactions? (deprecated explicitly since MobX 3)
  

Reactions and derivations

computed vs autorun (and also when)
```
var numbers = observable([1,2,3]);

var sum = computed(() => numbers.reduce((a, b) => a + b, 0));

var disposer = autorun(() => console.log(sum.get()));

// prints '6'
numbers.push(4);
// prints '10'

disposer();
numbers.push(5);
// won't print anything, nor is `sum` re-evaluated
```

  
## Specifics regarding React

1. Provider and @inject - inject the store to the component (like connect in Redux)

2. <Observer> instead of @observer on the class
  
3.

## Some differences compared to Redux

| Redux  | MobX  |
|:-:|:-:|
|single store   | multiple store  |
| pure  | impure  |
| explicit update  | implicit update  | 
| more boilerplate | less boilerplate |
| normalized, flat state | denormalized, nested state |


## Principles to keep in mind

1. Derivations vs Reactions (this is an important distinction!)
  - lazy evaluation
  - implicit caching
  - side-effect free, so reorderable - performance gain
  - transactions
  
2. Keep roles of each thing clear:
`
In other words, reaction that trigger more reactions, or reactions that update state: They are both considered anti patterns in MobX. Chained reactions lead to a hard to follow chain of events and should be avoided.
`
3.

## Sources
[Official MobX website](https://mobx.js.org/getting-started.html)

[Awesome short video series](https://egghead.io/lessons/react-sync-the-ui-with-the-app-state-using-mobx-observable-and-observer-in-react)

[Super deep dive into internals](https://hackernoon.com/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254)

[Fundamental MobX principles put nicely](https://hackernoon.com/the-fundamental-principles-behind-mobx-7a725f71f3e8)

[A nice MobX overview](https://hackernoon.com/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254)

[MobX best practices](https://medium.com/dailyjs/mobx-react-best-practices-17e01cec4140)

[MobX 3 Documentation](https://github.com/mobxjs/mobx/blob/54557dc319b04e92e31cb87427bef194ec1c549c/docs/refguide/api.md)

[Curated list of cool MobX related stuff](https://github.com/mobxjs/awesome-mobx)

[Boilerplates to create MobX app](https://github.com/mobxjs/awesome-mobx#boilerplates)

[Redux vs MobX comparison](https://www.robinwieruch.de/redux-mobx-confusion/)
