# Callbacks, Promiese and Async Await

-   One of the aspect of event driven and asyn programming.

## 1. Callbacks

-   In JavaScript, functions are objects. We can also pass function as parameter to the function.
-   So a function that is passed to another function as a parameter is a callback function. But that’s not all.
-   Example Fie: `callback.js`

### 1.1 Need for Callbacks:

-   JS code runs sequentially in top-down order
-   However, there are some cases that code runs (or must run) after something else happens and also not sequentially.
-   This is called asynchronous programming.

> Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed. It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors.

### 1.2. Creating a callback

-   By passing function as a paramater to the function.

**Example**

```js
const message = function() {
    console.log("This message is shown after 3 seconds");
};

setTimeout(message, 3000);
```

**As Anonymous Function:**

```js
setTimeout(function() {
    console.log("This message is shown after 3 seconds");
}, 3000);
```

**As Arrow Function**

-   Should have ES6 feature enabled.

```js
setTimeout(() => {
    console.log("This message is shown after 3 seconds");
}, 3000);
```

## 2. Promise:

-   One among elegant way to deal with async programming.
-   A promise has 2 possible outcomes: it will either be kept when the time comes, or it won’t.

> A promise in JavaScript is similar to a promise in real life. When we make a promise in real life, it is a guarantee that we are going to do something in the future. Because promises can only be made for the future.

**i. Promises State:**

-   Pending: `Initial State, before the Promise succeeds or fails.`
-   Resolved: `Completed Promise.`
-   Rejected: `Failed Promise.`

**ii. Difference between Callbacks and Promises:**

-   Can attach a callback to the Promise rather than passing it. So we can still use callback function with Promises. (`Chaining`)

**iii. Syntax**

-   In body resolve reject.

```js
const myPromise = new Promise((resolve, reject) => {
    let myData = getDataFromServer();

    if (myData) {
        // Resolve if data got. Goes to then
        resolve("Data fetched successfully.");
    } else {
        // Rejected. Goes to catch
        reject("Some error occured.");
    }
})
    .then(() => {
        // Promise is resolved and successful.
        appendDataToOptions();
    })
    .catch(() => {
        console.log("Some error occured");
    });
```
