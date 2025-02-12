/* make request to API using XMLHttpRequest
https://api.chucknorris.io
// create button to get new joke
// 
// add event listener for button 
// create function to make a request to api using XMLHTTPReques
// get data that is sent back(this.responseText), parse the JSON and get the joke from it 
// Display the joke in the page(use innerHTML)
// 
    <div class="container">
//  <h3>Chuck Norris Jokes</h3>
      <div id="joke" class="joke">Loading...</div>
      <button id="joke-btn" class="btn">Get Another Joke</button> */

// //GLOBAL VARIABLES

// const JokeEl = document.getElementById('joke'); 
// const JokeBtn = document.getElementById('joke-btn');

// function generateJoke() {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET" , 'https://api.chucknorris.io/jokes/random',true);

//     xhr.onreadystatechange = function () {
//      if(this.readyState === 4 && this.status === 200) {
//      const getData = JSON.parse(this.responseText);
            
//     function RandomJoke() {
//      const divJoke = document.createElement('div')
//       divJoke.innerHTML = getData.value;
//       JokeEl.innerHTML = '';
//       JokeEl.appendChild(divJoke);}

//     RandomJoke();    
// }
//  };
//  xhr.send();
//  }
    
//     JokeBtn.addEventListener('click', generateJoke);
  //----------------------------------------------------------------

// xhr.open('GET', 'https://api.github.com/users/emma735/repos', true);
// xhr.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         const data = JSON.parse(this.responseText); // Parse JSON correctly

//         data.forEach((repo) => { 
//             const li = document.createElement('li');
//             li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description || "No description available"}`;
//             document.querySelector('#results').appendChild(li); 
//         });
//     }
// };

// xhr.send(); // Make sure to send the request


const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

//function Generate Joke 
const generateJoke = () => {
  // console.log(123);                 <-- check
  const xhr = new XMLHttpRequest();     //<---Request
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random',true);

  //create handler for HTTP State (200 is success / 4 is complete)
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
  // console.log(JSON.parse(this.responseText).value);   <---check    
jokeElement.innerHTML = JSON.parse(this.responseText).value;
      } else {
jokeElement.innerHTML = "Something went wrong (Not funny)"
      }
    }
  }
  xhr.send();  //<-- send it
}

jokeBtn.addEventListener('click',generateJoke);
//Btn - listen for a click -> run function (generate joke)

document.addEventListener('DOMContentLoaded', generateJoke);