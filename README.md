# Callbacks, Promise and Async Await

-   One of the aspect of event driven and asyn programming.

## 1. Callbacks

-   In JavaScript, functions are objects. We can also pass function as parameter to the function.
-   So a function that is passed to another function as a parameter is a callback function. But that’s not all.
-   Example Fie: `callbacks.js`

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
-   Example File: `promises.js`

> A promise in JavaScript is similar to a promise in real life. When we make a promise in real life, it is a guarantee that we are going to do something in the future. Because promises can only be made for the future.

### 2.1. Promises State

-   Pending: `Initial State, before the Promise succeeds or fails.`
-   Resolved: `Completed Promise.`
-   Rejected: `Failed Promise.`

### 2.2. Difference between Callbacks and Promises

-   Can attach a callback to the Promise rather than passing it. So we can still use callback function with Promises. (`Chaining`)

### 2.3. Syntax

**i. Single promise**

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
    .catch(error => {
        console.log(error);
    });
```

**ii. Multiple promises**

```js
// Handelling Multiple Promises

Promise.all([promise1, promise2, promise3])
    .then(values => {
        // function body
    })
    .catch(values => {
        // function body
    });
```

-   Output is received as: <<message:Promise1>>, <<message:Promise2>> , <<message:Promise3>>

```js
// Handelling Multiple Promises
const promise1 = Promise.resolve("Hello world");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Goodbye");
});

Promise.all([promise1, promise2, promise3]).then(values => console.log(values));
// Output:  ["Hello world", 10, "Goodbye"]
// Time taken for execution is the max time taken by promise to resolve
```

## 3. Async await.

-   Wait till certain operation to finish.
-   Syntax

```js
async function init() {
    await createPost(postData);

    getPosts();
}
```
