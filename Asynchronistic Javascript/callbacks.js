// // function toggle(e) {
// //     e.target.classList.toggle('danger');
// // }

// // document.querySelector('button').addEventListener('click',toggle);

// const posts = [
//     {title: 'Post One', body: 'This is post one'},
//     {title: 'Post Two', body: 'This is post two'},
// ];

// function createPost(post, cb) {
//     setTimeout(() => {
//     posts.push(post);
//     cb();
//     }, 2000);
//     }

// function getPosts() {
//     setTimeout(() => {
//         posts.forEach(function (post) {
//             const div = document.createElement('div');
//             div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//             document.querySelector('#posts').appendChild(div);
//         });
//     }, 3000 );
// };

// createPost({title: 'Post Three', body: 'This is Post Three'}, getPosts);


//XML HTTP REQUESTS---------------------------------
// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/emma735/repos');

// /*readyState has 5 possible values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready
//  */
// xhr.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         // console.log(JSON.parse(this.responseText));
//         data.forEach((repo) => { 
//             const li = document.createElement('li');
//             li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
//             document.querySelector('#results').appendChild(li); 
//         })
//     }
// };
// //JSON.parse changes arrays to strings

// xhr.send();

// XML HTTP REQUESTS---------------------------------
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/emma735/repos', true);

xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText); // Parse JSON correctly

        data.forEach((repo) => { 
            const li = document.createElement('li');
            li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description || "No description available"}`;
            document.querySelector('#results').appendChild(li); 
        });
    }
};

xhr.send(); // Make sure to send the request
