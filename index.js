let firstCard,secondCard,sum=0;
let cardCount=1;
let images=["images/ace.png","images/2 of spade.png","images/3 of spade.png","images/4 of spade.png","images/5 of spade.png",
"images/6 of spade.png","images/7 of spade.png","images/8 of spade.png","images/9 of spade.png","images/10 of spades.png",
"images/jack3 of spade.jpg","images/queen of spade.jpg","images/king of spades.png"];
let imageEl1=document.querySelector("#image1");
let imageEl2=document.querySelector("#image2");
let imageEl3=document.querySelector("#image3");
let imageEl4=document.querySelector("#image4");
let imageEl5=document.querySelector("#image5");
let imageEl6=document.querySelector("#image6");


let cards = []; //declaring array
let isAlive = false; //declaring boolean variable
let hasBlackJack = false;

//let cardsEl = document.querySelector("#cards-el"); //capturing DOM
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
  if (afterBet.money >= 5 && cardCount===1) {
    isAlive = true;
    firstCard = getRandomCard();
    cardCount++;
    secondCard = getRandomCard();
    cardCount++;
    cards = [firstCard, secondCard];
    console.log(cards);
    sum = firstCard + secondCard;
    renderGame();
    //cardsEl.textContent="cards: "+firstCard+"  "+secondCard;
  }
}
function renderGame() {
  // cardsEl.textContent = "cards: ";
  // for (let i = 0; i < cards.length; i++) {
  //   cardsEl.textContent += cards[i] + " ";
  // }
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
    cardCount++;
    sum += newCard;
    cards.push(newCard);
    //console.log(cards);
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
    if(cardCount===1)
    {
      imageEl1.src=images[randomCard-1];
    }
    else if(cardCount===2)
    {
      imageEl2.src=images[randomCard-1];
      
    }
    else if(cardCount===3)
    {
      imageEl3.src=images[randomCard-1];
    }
    else if(cardCount===4)
    {
      imageEl4.src=images[randomCard-1];
    }
    else if(cardCount===5)
    {
      imageEl5.src=images[randomCard-1];
    }
    else if(cardCount===6)
    {
      imageEl6.src=images[randomCard-1];
    }
    return 11;
  }
  if (randomCard > 10) {
    if(cardCount===1)
    {
      imageEl1.src=images[randomCard-1];
    }
    else if(cardCount===2)
    {
      imageEl2.src=images[randomCard-1];
      
    }
    else if(cardCount===3)
    {
      imageEl3.src=images[randomCard-1];
    }
    else if(cardCount===4)
    {
      imageEl4.src=images[randomCard-1];
    }
    else if(cardCount===5)
    {
      imageEl5.src=images[randomCard-1];
    }
    else if(cardCount===6)
    {
      imageEl6.src=images[randomCard-1];
    }
    return 10;
  } else {
    if(cardCount===1)
    {
      imageEl1.src=images[randomCard-1];
    }
    else if(cardCount===2)
    {
      imageEl2.src=images[randomCard-1];
      
    }
    else if(cardCount===3)
    {
      imageEl3.src=images[randomCard-1];
    }
    else if(cardCount===4)
    {
      imageEl4.src=images[randomCard-1];
    }
    else if(cardCount===5)
    {
      imageEl5.src=images[randomCard-1];
    }
    else if(cardCount===6)
    {
      imageEl6.src=images[randomCard-1];
    }
    return randomCard;
  }
}
function newgame() {
  
  

    //cardsEl.textContent = "cards: ";
    cards.pop();
    sum = 0;
    sumEl.textContent = "sum: "+sum;
  
    //newEl.textContent="Newcard: ";
    displayEl.textContent = "";
    hasBlackJack = false;
    isAlive = false;
    afterBet.money=0;
    betEl.textContent="Money in bet:$"+afterBet.money;
    cardCount=1;
    imageEl2.src="images/cardback.png";
    imageEl3.src="images/cardback.png";
    imageEl4.src="images/cardback.png";
    imageEl5.src="images/cardback.png";
    imageEl6.src="images/cardback.png";
    imageEl1.src="images/cardback.png";
    
  
}
