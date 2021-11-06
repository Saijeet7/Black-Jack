//Challenge 1: Your age in Days
function ageInDays(){
    var birthYear = prompt('What year were you born?');
    var ageDays = (2022-birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' +ageDays+ ' days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(ageDays);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

// Challenge 2: Cat generator

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

//Challenge 3
function rpsGame(yourChoice) {
    //console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numToChoice(randomRps());
    console.log('Computer Choice: ',botChoice);
    results = decideWinner(humanChoice,botChoice);
    console.log(results);
    message = finalMessage(results);// {'message':'You won','color':'green'}
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomRps(){
    return Math.floor(Math.random() * 3);
}

function numToChoice(number){
    return ['rock','paper','scissor'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase ={
        'rock':{'scissor':1, 'rock':0.5, 'paper':0},
        'paper':{'rock':1, 'paper':0.5, 'scissor':0},
        'scissor':{'paper':1, 'scissor':0.5, 'rock':0},    
    }
    var yourScore =rpsDatabase[yourChoice][computerChoice];
    var computerScore =rpsDatabase[computerChoice][yourChoice];

    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    if (yourScore === 0){
        return {'message':'You lost', 'color':'red'};
    } else if (yourScore === 0.5){
        return {'message':'You tied', 'color':'yellow'};
    } else {
        return {'message':'You won!!!', 'color':'green'};
    }
}

function rpsFrontEnd(humanImgChoice,computerImgChoice, finalMessage){
    var imagesDataBase={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,
    }
    // Remove All items
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML="<img src='"+imagesDataBase[humanImgChoice]+"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    messageDiv.innerHTML="<h1 style='color: "+finalMessage['color']+"; font-size:60px; padding: 38px;'>"+finalMessage['message']+"</h1>";
    botDiv.innerHTML="<img src='"+imagesDataBase[computerImgChoice]+"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}


//Challenge 4 : Change the Color of All buttons
var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];
for (let i =0; i <all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons);

function buttonColorChange(buttonThing){
    if (buttonThing.value ==="red"){
        buttonRed();
    }else if (buttonThing.value ==="green"){
        buttonGreen();
    }else if (buttonThing.value ==="reset"){
        buttonColorReset();
    }else if (buttonThing.value ==="random"){
        randomColor();
    }
}

function buttonRed(){
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset(){
    for (let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColor(){
    var choices = ['btn-primary','btn-warning','btn-success','btn-danger']
    for (let i = 0; i < all_buttons.length; i++){
        var randomNumber = Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}