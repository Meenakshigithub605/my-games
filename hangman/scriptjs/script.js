import wordList from "./wordlist.js";

const hangmanimg = document.querySelector(".hangman-box img");
const wordDisplay = document.querySelector(".worddisplay")
const keydisplay = document.querySelector(".keyboard");
const guesstext = document.querySelector(".guesstext b");
const gameModal = document.querySelector(".game-modal");
const playagainBtn = document.querySelector(".play-again");

let currentWord, correctLetters = [], wrongguess;
const maxguess = 6;

const resetGame = () => {
    correctLetters = [];
    wrongguess = 0;
    hangmanimg.src = `img/hangman-${wrongguess}.svg`;
    guesstext.innerText = `${wrongguess}/${maxguess}`;
    keydisplay.querySelectorAll("button").forEach(btn => btn.disabled = false);
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    gameModal.classList.remove("show");
}

const getRandomWord = () => {
    //get random word from the wordlist
    const { Word, Hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = Word;
    document.querySelector(".hinttext b").innerText = Hint;
    resetGame();
}

const gameOver = (isVictory) => {
    setTimeout(() => {
        const modalText = isVictory ? `You found the word:` : `The correct word was:`;
        gameModal.querySelector("img").src = `img/${isVictory ? 'win.gif' : 'cat.gif'}`;
        gameModal.querySelector("h4").innerText = `${isVictory ? 'Congrats!!!' : 'Game Over!!!'}`;
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;

        gameModal.classList.add("show");

    }, 300);
}

const initGame = (button, clickedLetter) => {
    if (currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if (letter == clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    }
    else {
        wrongguess++;
        hangmanimg.src = `img/hangman-${wrongguess}.svg`;
    }
    button.disabled = true;
    guesstext.innerText = `${wrongguess}/${maxguess}`;

    if (wrongguess === maxguess) return gameOver(false);
    if (correctLetters.length === currentWord.length) return gameOver(true);
}

//creating keyboard dynamically
for (let i = 97; i <= 122; i++) {
    const keybutton = document.createElement('button');
    keybutton.innerText = String.fromCharCode(i);
    keydisplay.appendChild(keybutton);
    keybutton.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}
getRandomWord();
playagainBtn.addEventListener("click", getRandomWord);