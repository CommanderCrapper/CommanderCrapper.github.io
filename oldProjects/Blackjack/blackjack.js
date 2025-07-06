let player;
let playerHand = [];
let bot;
let botHand = [];
let randomNum;
let botCheck;

newGame();

function updateScreen() {
    document.getElementById("playerHand").innerHTML = "Your hand: " + player;
    document.getElementById("playerCards").innerHTML = "Cards: " +  playerHand;
    document.getElementById("opponentHand").innerHTML = "Opponent hand: " + bot;
    document.getElementById("opponentCards").innerHTML = "Cards: " + botHand;
}

function addHand() {
    randomNum = Math.floor(Math.random() * 11) + 1;
    playerHand.push(randomNum);
//For some reason, this keeps adding the 1st variable twice in the beginning. Maybe it has something to do with the += sign? Return function is fine I think, I was having issues before I even added it, & adding it didn't really do anything.
for(var i=0; i<22; i++) {
    player += +playerHand[i];
    updateScreen();
    return(player);
}}

function addBot() {
    randomNum = Math.floor(Math.random() * 11) + 1;
    botHand.push(randomNum);
    for(var i=0; i<10; i++) {
        player += +playerHand[1];
        updateScreen();
}
    bot = bot + randomNum;
}

function checkWinner() {
    if(bot > player) {
        //Need to add text that appears saying you lost, & play again button
        //Also hide the hit/stay buttons
    } else if(bot < player) {
        //Need to add text that appears saying you won, & play again button
        //Also hide the hit/stay buttons
    } else if(bot == player) {
        //Need to add text that appears saying you tied, & play again button
        //Also hide the hit/stay buttons
    } else {
        //Nothing happens here, since the only possibilities are a win/loss or a tie.
    }
}

function stay() {
    if(bot >= 17) {
        checkWinner();
    } else if(bot < 17) {
        //This might produce numbers like 0.8 or smth, might not be 1 or 0 on the dot.
        botCheck = Math.random();
        if(botCheck == 1) {
            addBot();
        } else if(botCheck == 0) {
        }
    }
    checkWinner();
}

function newGame() {
    //Hide play again button, hide win/lose/tie message.
    player = 0;
    playerHand = [];
    bot = 0;
    botHand = [];
    addHand();
    addHand();
    addBot();
    addBot();
    updateScreen();
}

//function getRandomArbitrary(min, max) {
//    return Math.random() * (max - min) + min;
//  }