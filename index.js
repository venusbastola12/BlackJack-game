let firstCard,secondCard,sum=0;
let exit=0;

let cards = []; //declaring array
let isAlive = false; //declaring boolean variable
let hasBlackJack = false;

let cardsEl = document.querySelector("#cards-el"); //capturing DOM
let sumEl = document.querySelector("#sum-el");
let displayEl = document.querySelector("#display");
let moneyEl = document.querySelector("#money-el");
let betEl = document.querySelector("#bet-el");
let betting = {
  name: "Available money ", //creating object
  money: 200,
};
moneyEl.textContent = betting.name + ":$" + betting.money;
let afterBet = {
  moneytype: "Money in bet :$",
  money: 0,
};
betEl.textContent = afterBet.moneytype + afterBet.money;

function bet() {
  if (betting.money >= 5&&displayEl.textContent==="") {
    afterBet.money+=5;
    betEl.textContent = "Money in bet:$" + afterBet.money;
    betting.money -= 5;
    moneyEl.textContent = betting.name + ":$" + betting.money;

  }
}
function startgame() {
  if (afterBet.money >= 5) {
    isAlive = true;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    console.log(cards);
    sum = firstCard + secondCard;
    renderGame();
    //cardsEl.textContent="cards: "+firstCard+"  "+secondCard;
  }
}
function renderGame() {
  cardsEl.textContent = "cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "sum: " + sum;
  if (sum <= 20) {
    displayEl.textContent = "Draw a new card!";
  } else if (sum === 21) {
    displayEl.textContent = "congratulations!you've got a blackjack";
    hasBlackJack = true;
    isAlive = false;
    betting.money+=2*afterBet.money;
    moneyEl.textContent="Available money :$"+betting.money;
    afterBet.money=0;
    betEl.textContent="Money in bet:$"+afterBet.money;
  } else {
    displayEl.textContent = "sorry,you are out from the game";
    isAlive = false;
    afterBet.money=0;
  betEl.textContent="Money in bet:$"+afterBet.money;
  }
}
function newcard() {
  if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    console.log(cards);
    // newEl.textContnt="Newcard: "+newCard;

    // sumEl.textContent="sum: "+sum;
    // cardsEl.textContent="cards: "+firstCard+" "+secondCard+" "+newcard;
    renderGame();
  }
}
function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1; //generating random number,math.random()
  //generates number betn 0 and 1
  if (randomCard === 1) {
    return 11;
  }
  if (randomCard > 10) {
    return 10;
  } else {
    return randomCard;
  }
}
function newgame() {
  
  

    cardsEl.textContent = "cards: ";
    cards.pop();
    sum = 0;
    sumEl.textContent = "sum: "+sum;
  
    //newEl.textContent="Newcard: ";
    displayEl.textContent = "";
    hasBlackJack = false;
    isAlive = false;
    afterBet.money=0;
    betEl.textContent="Money in bet:$"+afterBet.money;
    
  
}
