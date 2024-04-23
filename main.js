const filter = document.querySelector('#filter');
const cards = document.querySelectorAll('.card');

filter.addEventListener('input', inputText);

function inputText() {
  if (filter.value === '')
    cards.forEach(card => card.style.display = 'block');
  else {
    cards.forEach(card => {
      let title = card.querySelector('h2');
      title = title.textContent.toLocaleLowerCase().trim();

      if (!title.includes(filter.value))
        card.style.display = 'none';
      else
        card.style.display = 'block';
    });
  }
}
