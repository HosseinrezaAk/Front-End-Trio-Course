var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";    //dice1.png -- dice2.png
var randomDiceImageSrc1 = "./images/" + randomDiceImage1;
var image = document.querySelectorAll("img");

image[0].setAttribute("src", randomDiceImageSrc1);


var randomNumber2 = Math.floor(Math.random() *6 ) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";    //dice1.png -- dice2.png
var randomDiceImageSrc2 = "./images/" + randomDiceImage2;

image[1].setAttribute("src", randomDiceImageSrc2);





function Game(player1, player2){
    var result = ["🚩 Player1 Wins!" , "Player2 Wins! 🚩" , "Draw!"]
    if ( player1 > player2){
       
        document.querySelector("h1").innerHTML = result[0]
    }
    else if ( player1 < player2){
        
        document.querySelector("h1").innerHTML = result[1]
    }
    else{
        document.querySelector("h1").innerHTML = result[2]
    }
}

Game(randomNumber1, randomNumber2);