const inputs = document.querySelector(".inputs");
const resetbtn = document.querySelector(".reset-btn");
const hint = document.querySelector(".hint span");
const typingInp = document.querySelector(".typing-input");
const wrongletter = document.querySelector(".wrong-letter span");
const guessleft = document.querySelector(".guess-left span");

let word, corrects = [], incorrects = [], chances;

function randomWord() {
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranObj.word;
    chances = 8;
    corrects = [];
    incorrects = [];

    hint.innerText = ranObj.hint;
    guessleft.innerText = chances;
    wrongletter.innerText = incorrects;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
    }
    inputs.innerHTML = html;
}
randomWord();

function initGame(e) {
    let key = e.target.value;
    // 2nd parameter to restrict the user to enter the same key twice 
    if (key.match(/^[A-Za-z]+$/) && !incorrects.includes(`${key}`) && !corrects.includes(key)) {

        if (word.includes(key)) {//if user found the letter in the word
            for (let i = 0; i < word.length; i++) {
                if (word[i] === key) {
                    corrects.push(key);
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            chances--;
            incorrects.push(`${key}`);
        }
        guessleft.innerText = chances;
        wrongletter.innerText = incorrects;
    }
    typingInp.value = "";
    setTimeout(() => {
        if (corrects.length === word.length) {//if user found all the letters
            alert(`Congrats!!! u found the word ${word.toUpperCase()}`);
            randomWord();//to reset game again
        } else if (chances < 1) {
            alert("Game Over!!! You don't have remaining guesses");
            for (let i = 0; i < word.length; i++) {
                // show all the letters in the input 
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    });
}

resetbtn.addEventListener("click", randomWord);
typingInp.addEventListener("input", initGame);
document.addEventListener("keydown", () => typingInp.focus());
inputs.addEventListener("click", () => typingInp.focus());
