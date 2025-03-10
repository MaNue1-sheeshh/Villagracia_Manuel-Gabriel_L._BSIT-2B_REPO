// declared variables
var location1 = 3;
var location2 = 5;
var location3 = 4;

// User's CUrrent Guess and hits
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

// game logic
while (isSunk ==false) {
    guess = prompt("Ready!, Aim!, Fire! ( Enter Number 0-6 )")

    if (guess < 0 || guess > 6) {
        alert("anak nang 0-6 gani mang-!")

    } else {
        guesses += 1;           
        if (guess == location1 || guess == location2 || guess == location3){
            hits = hits + 1 ;

            if (hits == 3){
                isSunk = true;
                alert("ouch ang sakit napatumba mo ako!")

             }else{
                alert("Hit!")
             }

            } else{
            alert("Miss")
        }

    }

}

var stats = "You Sunk my ship with " + guesses + " guesses" + " and your Accuracy is " + (3/guesses);

alert(stats);
