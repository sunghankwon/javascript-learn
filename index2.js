let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
  Name: "Kwon",
  Chips: 145,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.Name + ": $" + player.Chips;

function getRandomCard() {
  let score = Math.floor(Math.random() * 13) + 1;
  if (score > 10) {
    return 10;
  } else if (score === 1) {
    return 11;
  } else {
    return score;
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = cards[0] + cards[1];
  renderGame();
}

function newCard() {
  if (hasBlackJack === false && isAlive === true) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
