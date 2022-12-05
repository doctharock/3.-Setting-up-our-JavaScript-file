`use strict`;

const countEl = document.getElementById(`count-el`);
const saveEl = document.getElementById(`save-el`);
let count = 0;

function increment() {
  count++;
  countEl.textContent = count;
}

function save() {
  saveEl.textContent += `${count} - `;
  countEl.textContent = 0;
  count = 0;
  console.log(count);
}

// const username = `Per`;
// const notifications = 3;
// const messageToUser = `${username}, You have ${notifications} new notifications.`;

// console.log(messageToUser);

// // const name = `Slim Shady`;
// const greeting = `Hi, my  name is`;
// const myGreeting = `${greeting} ${name}.`;
// console.log(myGreeting);

// 9 24 51 100100

// const welcomeEl = document.getElementById(`welcome-el`);

// const name = `Slim Shady`;
// const greeting = `Welcome back`

// welcomeEl.innerText = `${greeting} ${name}`
