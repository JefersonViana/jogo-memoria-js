const emojis = [
  '🐶', '🐶', '🐱', '🐱', '🐭', '🐭', '🐹', '🐹', '🐰', '🐰', '🐻', '🐻', '🌱', '🌱', '🏀', '🏀',
];

let openCards = [];

let shuffledEmojis = emojis.sort(() => Math.random() - 0.5);
// let shuffledEmojis2 = emojis.sort(() => Math.random() > 0.5 ? 1 : -1);

const state = {
  views: {},
  values: {},
  actons: {},
}

const main = () => {
  for (let i = 0; i < emojis.length; i++) {
    const box = document.createElement('div');
    box.classList.add('item');
    document.querySelector('.game').appendChild(box);
    box.innerHTML = shuffledEmojis[i];
    box.addEventListener('click', () => {
      box.classList.add('box-open');
      box.classList.remove('item');
      openCards.push(box);
      if (openCards.length === 2) {
        if (openCards[0].innerHTML === openCards[1].innerHTML) {
          openCards[0].className = 'match';
          openCards[1].className = 'match';
          openCards = [];
        } else {
          setTimeout(() => {
            openCards[0].classList.remove('box-open');
            openCards[1].classList.remove('box-open');
            openCards[0].classList.add('item');
            openCards[1].classList.add('item');
            openCards = [];
          }, 1000);
        }
      }
    });
  }
}

main();
