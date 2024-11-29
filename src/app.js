const cardElement = document.getElementById("card");

function getRandomCard() {
  const suits = ["♥", "♦", "♣", "♠"];
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const suit = suits[Math.floor(Math.random() * suits.length)];
  const number = numbers[Math.floor(Math.random() * numbers.length)];

  return { suit, number };
}

function updateCard() {
  const { suit, number } = getRandomCard();

  cardElement.querySelector(".top-suit").textContent = suit;
  cardElement.querySelector(".card-number").textContent = number;
  cardElement.querySelector(".bottom-suit").textContent = suit;

  const isRed = suit === "♥" || suit === "♦";
  cardElement.style.color = isRed ? "red" : "black";
}
updateCard();
