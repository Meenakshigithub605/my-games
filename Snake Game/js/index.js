//Game constants and variables
let inpdirection = { x: 0, y: 0 };
const foodSound = new Audio('img/Snake eat.mp3');
const gameOver = new Audio('img/snake game over.wav');
const snaketurn = new Audio('img/Snake  turn.mp3');
const allTime = new Audio('img/Snake Game - Theme Song.mp3');
let speed = 19;
let lastPaintTime = 0;
let snakeArr = [
    { x: 12, y: 5 }
]
snakeFood = { x: 12, y: 10 };
let score = 0;

//Game functions
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}
function isCollide(snakeArr) {
    // if u bump into urself
    for (let index = 1; index < snakeArr.length; index++) {
        if (snakeArr[index].x === snakeArr[0].x && snakeArr[index].y === snakeArr[0].y) {
            return true;
        }
    }
    // if u bump into wall 
    if ((snakeArr[0].x > 30 || snakeArr[0].x < 0) || (snakeArr[0].y > 15 || snakeArr[0].y < 0)) {
        return true;
    }

}
// to update our snake 
function gameEngine() {
    // part1:update snake array 
    if (isCollide(snakeArr)) {
        gameOver.play();
        allTime.pause();
        inpdirection = { x: 0, y: 0 };
        alert("Game Over!! Press any key to play Again ");
        snakeArr = [{ x: 10, y: 5 }];
        allTime.play();
        score = 0;
    }

    //if u have eaten the food then increment the snake and regenerate the food
    if (snakeArr[0].y === snakeFood.y && snakeArr[0].x === snakeFood.x) {
        foodSound.play();
        score += 1;

        if (score > highscoreval) {
            highscoreval = score;
            localStorage.setItem("highscore", JSON.stringify(highscoreval));
            Highscorebox.innerHTML = "Highscore : " + highscoreval;
        }

        scorebox.innerHTML = "Score: " + score;

        //unshift adds in beginning of array
        snakeArr.unshift({ x: snakeArr[0].x + inpdirection.x, y: snakeArr[0].y + inpdirection.y });
        let a = 1;
        let b = 15;
        let c = 30;
        snakeFood = { x: Math.round(a + (c - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }
    //Moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }
    snakeArr[0].x += inpdirection.x;
    snakeArr[0].y += inpdirection.y;

    //part2:render/display the snake and food
    // display the snake 
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add('head');
        }
        else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    })
    // display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = snakeFood.y;
    foodElement.style.gridColumnStart = snakeFood.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}
//Main logic
let highscore = localStorage.getItem("highscore");
if (highscore == null) {
    highscoreval = 0;
    localStorage.setItem("highscore", JSON.stringify(highscoreval));
}
else {
    highscoreval = JSON.parse(highscore);
    Highscorebox.innerHTML = "Highscore : " + highscore;
}
// added reset here
// document.getElementById("resetButton").addEventListener("click", resetHighScore);

window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    if (allTime.paused) {
        allTime.play(); // Ensure the music starts on the first interaction
    }
    inpputDir = { x: 0, y: 1 };//Start the game
    snaketurn.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inpdirection.x = 0;
            inpdirection.y = -1;
            break;
        case "ArrowDown":
            console.log("ArrowDown");
            inpdirection.x = 0;
            inpdirection.y = 1;
            break;
        case "ArrowLeft":
            console.log("ArrowLeft");
            inpdirection.x = -1;
            inpdirection.y = 0;
            break;
        case "ArrowRight":
            console.log("ArrowRight");
            inpdirection.x = 1;
            inpdirection.y = 0;
            break;
        default:
            break;
    }
})

// Reset high score function
// function resetHighScore() {
//     highscoreval = 0; // Reset the high score value
//     localStorage.setItem("highscore", JSON.stringify(highscoreval)); // Update local storage
//     document.getElementById("Highscorebox").innerHTML = "Highscore : " + highscoreval; // Update the display
//     console.log("High score has been reset to 0");
// }




