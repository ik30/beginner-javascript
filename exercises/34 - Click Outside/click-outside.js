const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

// Functions
function closeModal() {
  modalOuter.classList.remove('open');
}

// Handle Click
function handleCardButtonClick(e) {
  const button = e.currentTarget;
  const card = button.closest('.card');
  // Grab card info
  const name = card.querySelector('img').src;
  const desc = card.dataset.description;
  const imgSrc = card.querySelector('img').src;
  // Insert HTML
  modalInner.innerHTML = `
  <img src="${imgSrc.replace('200', '600')}" alt="${name}">
  <p>${desc}</p>
  `;
  // Show modal
  modalOuter.classList.add('open');
}

// Event Listeners
cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
);

modalOuter.addEventListener('click', function(e) {
  const isOutside = !e.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
