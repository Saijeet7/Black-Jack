//Challenge 5 BlackJack
let blackjackGame = {
    'you':{'scoreSpan': '#your-blackjack-result','div':'#your-box','score':0},
    'dealer':{'scoreSpan': '#dealer-blackjack-result','div':'#dealer-box','score':0},
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sounds/swish.m4a');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit(){
    showCard(YOU);
}

function showCard(activePlayer){
    let cardImage = document.createElement('img');
    cardImage.src = 'static/images/Q.png';
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
}

function blackjackDeal(){
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
     for (let i =0; i<=yourImages.length; i++){
         yourImages[i].remove();
     };

    for (let j =0; j<=dealerImages.length; j++){
        dealerImages[j].remove();
    };
}
