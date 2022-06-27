'use strict';
//DOM - form a connection between code and interface
// console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').textContent);

//Document Object Model
//Structured representation of HTML Documents allows javaScript to access html elements and styles to manipulate them.
//Change text, HTML attributes and even CSS Styles

//Dom is automatically created by the Browser as soon as the HTML page loads and its stored in a tree structure.
//In tree each HTML element is one object and we can access and iteract with each of the nodes using javaScript.

// document.querySelector('.message').textContent = 'Correct Number ';
// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.number'));
// console.log(document.querySelector('.score'));

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 15;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//Guess the number game

//Handling Click Events

//event listeners are used to react to something that happens in the DOM.
// usually whenever we get anything from the UI its a string
//an event is something that happens on page

//generating secret number
let secret = Math.floor(Math.random() * 20) + 1;
console.log(secret);
document.querySelector('.number').textContent = secret;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
  //event handler function
  const guess = Number(document.querySelector('.guess').value);

  //if no guessing
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }

  //When guess is wrong
  else if (guess !== secret) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > secret ? 'Too High' : 'Too Low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Lost the game';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').textContent = secret;
    }
  }
  //   // When guess is too low
  //   else if (guess < secret) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent = 'Too low!';
  //       score = score - 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'Lost the game';
  //       document.querySelector('body').style.backgroundColor = 'red';
  //       document.querySelector('.number').textContent = secret;
  //     }
  //   }
  //   //When guess is too high
  //   else if (guess > secret) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent = 'Too high!';
  //       score = score - 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'Lost the game';
  //       document.querySelector('body').style.backgroundColor = 'red';
  //       document.querySelector('.number').textContent = secret;
  //     }
  //   }
  //When guess is correct
  else if (guess == secret) {
    document.querySelector('.message').textContent = 'Correct Number!';

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secret;
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secret = Math.floor(Math.random() * 20) + 1;

  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.highscore').textContent = highscore;
});
