//Challenge 5 BlackJack
let blackjackGame = {
    'you':{'scoreSpan': '#your-blackjack-result','div':'#your-box','score':0},
    'dealer':{'scoreSpan': '#dealer-blackjack-result','div':'#dealer-box','score':0},
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sounds/swish.m4a');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

function blackjackHit(){
    showCard(YOU);
}

function showCard(activePlayer){
    let cardImage = document.createElement('img');
    cardImage.src = 'static/images/Q.png';
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
}


