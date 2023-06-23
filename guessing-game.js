function guessingGame() {
// write a function that returns a function
// returned function lets you guess a random whole number
    // btwn 0 & 99
// creating a new game creates a new number to guess
// player guesses the number and it will tell you whether too high or too low
// or correct
// game ends after correct guess

// outer function scope
    // we track secret number
    // gameOver?

    // return function (guess)
        // if(gameOver) return 'Game over!'
        //is guess > secret
        //is guess < secret
        // is guess === secret
            // set gameOver to true
            // return You win!

    const secretNum = (Math.floor(Math.random() * 100));
    let gameOver = false;
    let guessCount = 0

    return function(guess){
        if (gameOver) return 'The game is over, you already won!';
        guessCount++;
        if (guess > secretNum) {
            return `${guess} is too high!`;
        } else if (guess < secretNum){
            return `${guess} is too low!`;
        } else if (guess === secretNum){
            gameOver = true;
            return `You win! You found ${secretNum} in ${guessCount} guesses.`;
        }
    }
}

module.exports = { guessingGame };
