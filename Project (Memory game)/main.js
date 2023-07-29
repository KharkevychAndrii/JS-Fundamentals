const cardCount = 8;
let flippedCards = [];
let matchedCards = 0;
let gameTimer;
let gameInProgress = false;

const imageUrls = [
  'https://drive.google.com/uc?export=view&id=1vI0dsLCXxOG4zHB8DvAlXNfLEsT79HVp',
  'https://drive.google.com/uc?export=view&id=1kAJG4qRt3hRMz4bVw6J1PAFy8b_9LzWS',
  'https://drive.google.com/uc?export=view&id=1WjrHFrHJXbWFUd38n-9y0rpwMzkYXtAg',
  'https://drive.google.com/uc?export=view&id=1-QI60PMYj8GPXYHg8pFqRbCxI-1BIYPB',
  'https://drive.google.com/uc?export=view&id=1IHUazLJqWvCwWnr7vWFNd2-ldNaiDfUK',
  'https://drive.google.com/uc?export=view&id=1vzwq9H49lcF8SWl1gzIpuk1gyvYzJFpH',
  'https://drive.google.com/uc?export=view&id=1sjzNcH7jM8YwEq-TJTZ7mQgwDM38k2vJ',
  'https://drive.google.com/uc?export=view&id=19fkWlWGP3X_D0ok6CUGHssFNz_2ywVaS',
  'https://drive.google.com/uc?export=view&id=15ScSiVRjrNV7ytSiTtvVVF2rUUySzHBz',
  'https://drive.google.com/uc?export=view&id=1ZeArDmIdz7dvdD2gbiB7v0qMb-gL_ZJK',
];

function preloadImages(imageUrls) {
  const imagePromises = imageUrls.map(url => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = resolve;
      img.onerror = reject;
    });
  });

  return Promise.all(imagePromises);
};

function startGameTimer() {
  let seconds = 61;
  const timerElement = document.getElementById('timer');

  gameTimer = setInterval(() => {
    seconds--;
    timerElement.textContent = seconds;
    
    if (seconds === 0) {
      clearInterval(gameTimer);
      alert('Time is up! Game over!');
      gameInProgress = false
    }
  }, 1000);
  gameInProgress = true 
};

function stopGameTimer() {
  clearInterval(gameTimer);
  gameInProgress = false;
};

function createCards() {
  const cards = [];
  for (let i = 0; i < cardCount; i++) {
    cards.push({ value: i + 1, flipped: false, matched: false });
    cards.push({ value: i + 1, flipped: false, matched: false });
  }
  return cards;
};

function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
};

function addCardsToGameBoard(cards) {
  const gameBoard = document.querySelector('.game-board');
  cards.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.value = card.value;
    cardElement.dataset.index = index;
    gameBoard.appendChild(cardElement);
  });
};

function flipCard(cardElement, value) {
  cardElement.classList.add('flipped');
  flippedCards.push({ element: cardElement, value });

  if (flippedCards.length === 2) {
    const [firstCard, secondCard] = flippedCards;
    if (firstCard.value === secondCard.value) {
      firstCard.matched = true;
      secondCard.matched = true;
      matchedCards += 2;
      
    }

    setTimeout(() => {
      flippedCards.forEach((card) => {
        if (!card.matched) {
          card.element.classList.remove('flipped');
        }
      });
      flippedCards = [];
      if (matchedCards === cardCount * 2) {
        alert('Congratulations! You win!');
        stopGameTimer();
      }
      
    }, 500);
  }
};

function startNewGame() {
  preloadImages(imageUrls).then(() => {
    if (gameInProgress) {
      stopGameTimer();
    }

    const gameBoard = document.querySelector('.game-board');
    gameBoard.innerHTML = '';

    flippedCards = [];
    matchedCards = 0;

    initGame();
  });
}


function initGame() {
  preloadImages(imageUrls);
  const cards = createCards();
  shuffleCards(cards);
  addCardsToGameBoard(cards);
  startGameTimer();

  const cardElements = document.querySelectorAll('.card');

  cardElements.forEach((cardElement) => {
    cardElement.addEventListener('click', () => {
      if (!cardElement.classList.contains('flipped') && flippedCards.length < 2) {
        const value = parseInt(cardElement.dataset.value);
        flipCard(cardElement, value);
      }
    });
  });
};

document.getElementById('start-btn').addEventListener('click', startNewGame);
