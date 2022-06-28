# steps 
*Terminal*
1. `npx create-react-app <file name>`
2. `npm start`

*if on gitpod*
1. create a dotenv file in the app folder
    * enter `WDS_SOCKET_PORT=0`

*creating react app*
* edit src > App.js
* 'HTML' elements are JSX -> undergoes transpilation to convert react-specific javascript into normal javascript
    * IMPORTANT - HTML errors in JSX will prevent code from running! 
    * any code within `{}` are javascript objects 
        * e.g. `<p> 2+2 = {2+2}</p>` will be evaluated to `2+2=4`
        * can only use expressions that evaluate to a value (e.g. no 'if/while/for' statements) -> **use functions instead** or **use ternary operator** or **&&** (evaluates to last truthly value )
            * must return a single value (e.g. null, string etc)
* use import instead of require
    * React uses ES6 JS, node uses commonJS

# React Components
*  a function that can act like HTML component in JSX 
    * first letter uppercase
    * returns JSX
* to make component customizable, use props
    * props are key-value pairs of attributes
* can be separated into different file 
    * good practice to name file same as component name
        * remember to `import React from 'react'` into the new file
        * add `export default <componentName>` to end of file, or just add export default to strat of the function
    * import file into App.js 
        `import <> from <...>`
* component files can be moved into its own component folder 
    * remember to edit relative links (e.g. in img src , import)

# Props vs States
Props | States
---|---
static/read-only,  cannot be changed within the component | dynamic, can change 
externally-given (can be inherited from parent component)|internal (not accessible to other components for reading/editing, only to component itself)
props cannot change/re-render| when state changes, React will re-render the component you update correspendingly 

\*setState is *asynchronous* -> if you want to call multiple setStates make the preceding one an async await function. 

## Class-based components
* class must extend the React's Component class. This means that the NumberBox class has all the functionality and variables of the latter
* must have render()
* return({JSX})
* within a class, remember to use `this.<code>` 
* event handlers should be in arrow format 
    * in an arrow function 'this' refers to the scope in which it was created
    ```
    className = (variables) => {
        <code> 
    }
    ```
* if not, must use function(){}.bind(this) or when calling function, add .bind(this) behind -> to ensure 'this' refers to scope in which function was called (AKA emulates arrow function)
    * bit old-school tho

