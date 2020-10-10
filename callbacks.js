const posts = [
    { title: "Post One", body: "This is post one." },
    { title: "Post Two", body: "This is post two." }
];

function getPosts() {
    setTimeout(() => {
        let output = "";

        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

/*
function createPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}

getPosts();
createPost({ title: "Post Three", body: "This is post Three" });

*/

/* 
    Why is post 3 not appearing in above approach?
    - Create Post took long time than get post.
    - It took 1000ms to get post while 2000ms to create post.
    - This is where async programming comes in where callbacks are necessary.
*/

// Solution to the above problem. Using callbacks

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: "Post Three", body: "This is post Three" }, getPosts);
