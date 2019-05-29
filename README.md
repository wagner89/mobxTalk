# Introduction to MobX

Reference for the Intro to Mobx talk @ Crafting Software

## What is MobX?

MobX is a JavaScript library. It handels **state**. 
The paradigm used is **functional reactive programming**.

The project states it's philosophy as such:

**Anything that can be derived from the application state, should be derived. Automatically.**

Some notes on ideas that shaped MobX:

```
1. The application state of complex applications can best be expressed using graphs to achieve referential consistency and stay close to the mental model of a problem domain.

2. One should not imperatively act on state changes by using manually defined subscriptions or cursors. This will inevitably lead to bugs as a result of under- or oversubscribing.

3. Use runtime analysis to determine the smallest possible set of observer → observable relationships. This leads to a computational model where it can be guaranteed that the minimum amount of derivations are run without ever observing a stale value.

4. Any derivation that is not needed to achieve an active side effect can be optimized away completely.

```
(https://hackernoon.com/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254)


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

Cool syntax cheat-sheet is [here](https://devhints.io/mobx)

**Reactions and derivations**

1. computed vs autorun (and also when)
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

Note: most important resource when debugging something not happening:
[What will MobX react to?](https://mobx.js.org/best/react)
  
## Specifics regarding React

1. Provider and @inject - inject the store to the component (like connect in Redux)

2. <Observer> instead of @observer on the class
  
3. @observer on a component essentially makes render a reaction, tracking all the data that is accessed in it

4. The `runInAction` utility (async code that modifies state) [here](https://mobx.js.org/best/actions.html)

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

3. MobX executes derivations synchronously, so you don't need to worry about a stale read
  - clearer stack trace than in an async/await environment
  - values can immediately be read after they were altered
  
4. Always try to dereference values later (deeper in the DOM tree)
  - since any dereferencing on an observable triggers re-render for an observer component, the lower down this happens, the less is re-rendered
 
```
Fast:

<DisplayName person={person} />

Slower:

<DisplayName name={person.name} />.

There is nothing wrong to the latter. But a change in the name property will, in the first case, trigger the DisplayName to re-render, while in the latter, the owner of the component has to re-render. However, it is more important for your components to have a comprehensible API than applying this optimization. To have the best of both worlds, consider making smaller components:

const PersonNameDisplayer = observer(({ props }) => <DisplayName name={props.person.name} />)
```
(https://doc.ebichu.cc/mobx/best/react-performance.html)

5. Dispose reactions explicitly when no longer needed
```
const VAT = observable(1.20)

class OrderLIne {
    @observable price = 10;
    @observable amount = 1;
    constructor() {
        // this autorun will be GC-ed together with the current orderline instance
        this.handler = autorun(() => {
            doSomethingWith(this.price * this.amount)
        })
        // this autorun won't be GC-ed together with the current orderline instance
        // since VAT keeps a reference to notify this autorun,
        // which in turn keeps 'this' in scope
        this.handler = autorun(() => {
            doSomethingWith(this.price * this.amount * VAT.get())
        })
        // So, to avoid subtle memory issues, always call..
        this.handler()
        // When the reaction is no longer needed!
    }
}
```
(https://doc.ebichu.cc/mobx/best/pitfalls.html)

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
