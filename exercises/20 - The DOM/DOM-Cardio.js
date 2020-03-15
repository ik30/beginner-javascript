// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
// add three list items with the words "one, two three" in them
const list = `
    <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
    </ul>
`;

// put that list into the above wrapper
div.innerHTML = list;

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'https://picsum.photos/500';
// set the width and height to 250
img.width = 250;
img.height = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy';
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
<div class='myDiv'>
<p>Lorem Ipsum</p>
<p>Dorem Cipsum</p>
</div>
`;
const ul = document.querySelector('ul');
// put this div before the unordered list from above
ul.insertAdjacentHTML('beforebegin', myHTML);
// add a class to the second paragraph called warning
const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');
// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>Their height is HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

const generatePlayerCard = (name, age, height) =>
  (html = `
    <div class="playerCard">
    <h2>${name} - ${age}</h2>
    <p>Their height is ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button class='delete' type='button'> &times; Delete</button>
    </div>
    `);
// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// Have that function make 4 cards
let cardItems = generatePlayerCard('ik', 23, 170);
cardItems += generatePlayerCard('Wes', 40, 190);
cardItems += generatePlayerCard('Tim', 25, 150);
cardItems += generatePlayerCard('Bob', 18, 160);
// append those cards to the div
cards.innerHTML = cardItems;

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
const deleteCard = event => {
  const target = event.currentTarget;
  target.closest('.playerCard').remove();
};

// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
