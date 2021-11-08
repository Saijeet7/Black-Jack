//Challenge 5 BlackJack
let blackjackGame = {
    'you':{'scoreSpan': '#your-blackjack-result','div':'#your-box','score':0},
    'dealer':{'scoreSpan': '#dealer-blackjack-result','div':'#dealer-box','score':0},
    'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit(){
    let card = randomCard();
    showCard(card,YOU);
    updateScore(card,YOU);
    showScore(YOU);
}

function randomCard(){
    let randomIndex = Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card,activePlayer){
    if(activePlayer['score']<=21){
        let cardImage = document.createElement('img');
        cardImage.src = `static/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();    
    }
}

function blackjackDeal(){
    showResult(computeWinner());
    YOU['score']=0;
    DEALER['score']=0;
    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').textContent = 0;

    document.querySelector('#your-blackjack-result').style.color ="#ffffff";
    document.querySelector('#dealer-blackjack-result').style.color ="#ffffff";


    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
     for (i =0; i<=yourImages.length; i++){
         yourImages[i].remove();
     };

    for (j =0; j<=dealerImages.length; j++){
        dealerImages[j].remove();
    }

}

function updateScore(card, activePlayer){
    if(card=='A'){
   // If adding 11 keeps me below 21, add 11. Otherwise, add 1
        if (activePlayer['score']+blackjackGame['cardsMap'][card] <= 21){
            activePlayer['score']+=blackjackGame['cardsMap'][card][1];
        }else{
            activePlayer['score']+=blackjackGame['cardsMap'][card][0];
        }
    }else{
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer){
    if (activePlayer['score']>21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }else{  
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function dealerLogic(){
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
}

// Compute winner and return who just won
function computeWinner(){
    let winner;
    if (YOU['score']<=21){
        //Contion: Higher Score than dealer or when dealer busts 
        if(YOU['score']>DEALER['score']|| DEALER['score']>21){
            console.log('You Won!');
            winner = YOU;
        } else if(YOU['score']<DEALER['score']){
            console.log('loss');
            winner = DEALER;
        }else if(YOU['score']===DEALER['score']){
            console.log('You drew!');

        }
    //condition When user busts but dealer doesn't
    }else if(YOU['score']>21 && DEALER['score']<=21){
        console.log('You lost!');
        winner = DEALER;
    //Condtion when both bust
    }else if(YOU['score']>21 && DEALER['score']>21){
        console.log('You drew');
    }

    console.log('Winner is',winner);
    return winner;
}

function showResult(winner) {
    let message, messageColor;
    if (winner===YOU){
        message = 'You won!';
        messageColor = 'green';
        winSound.play();
    } else if (winner === DEALER){
        message= 'You lost!';
        messageColor = 'red';
        lossSound.play();
    }else{
        message = 'You drew';
        messageColor = 'black';
    }

    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;
}