// dhon gave the idea of deducting points based on if you are still holding the space bar between the margin for error



const light = document.getElementById("light")
const pointsText = document.getElementById('points')
const countdown = document.getElementById('countdown')
const overlay = document.getElementById('overlay')
const testButton = document.getElementById('testButton')
const lightAlert = document.getElementById('lightAlert')
const errorTimeTest = document.getElementById('errorTimeTest')
const gameOverState = document.getElementById('gameOver')
const restart = document.getElementById('restartButton')

let color = "rgb(210, 51, 51)"
let pointNum = 0
let gameStatus = false
let redStart = 7;
let redMin = 3;
let redMax = 7;
let greenStart = 6;
let greenMin = 2;
let greenMax = 6;
let subtraction = 0.2
let roomForError = 1.5
let errorTimer = 150
let errorSubtract = 10
let keyState = {};
let isGameOver = false

testButton.addEventListener('click', ()=> {
    startingTimer()
})

function gameStatusCheck() {
    if (gameStatus === false) {
        console.log("Game staus is false");
    } else if (gameStatus === true) {
        console.log("Game status is true");
    }
}

gameStatusCheck()

window.addEventListener('keydown',keyDown,true);

function keyDown(e) {
    keyState[e.code] = true;
}

window.addEventListener('keyup',(e) => {
    keyState[e.code] = false;
},true);

function keyStateCheck() {
    if (keyState["Space"] && color == "rgb(38, 222, 96)"){
        addPoint()
    } if (keyState["Space"] && color == "rgb(210, 51, 51)" && errorTimer <= 0) {
        gameOver()
    }
}

function gameOver() {
    gameStatus = false
    console.log("Game Over");
    gameOverState.style.visibility = "visible"
    // window.removeEventListener('keydown',keyDown(),false)
    color = "rgb(158, 121, 121)"
    light.style.backgroundColor = color
}



function gameLoop() {
    keyStateCheck()
    setTimeout(gameLoop, 10);
}

gameLoop();


function increaseSubtract() {
    subtraction += 0.2
}

function reduceError() {
    errorSubtract += 10
}

function errorTime() {
    errorInterval = setInterval(() => {
        if(errorTimer <= 0){
        clearInterval(errorInterval);
        }
        errorTimeTest.innerText = errorTimer;
        errorTimer -= 1;
    }, 15);
}


function timeRandomizerRed() {
    if (gameStatus === true) {
        errorTimer = 100
        errorTime()
        increaseSubtract()
        reduceError()
        errorTimer -= errorSubtract
        if (errorTimer <= 20){
            errorTimer = 20
        }
        redStart = Math.floor(Math.random() * (redMax - redMin + 1) + redMin)
        redStart -= subtraction
        if (redStart <= 2) {
            redStart = 2
            subtraction = 3
            console.log("Floor Reached");
        }
        console.log(redStart);
        console.log("Red Turn");
        color = "rgb(210, 51, 51)"
        light.style.backgroundColor = color
        lightAlert.style.color = "rgb(210, 51, 51)"
        lightAlert.innerText = "Red Light!"
        setTimeout(timeRandomizerGreen, redStart * 1000)
        return redStart
    } else if (gameStatus === false){
        color = "rgb(158, 121, 121)"
        light.style.backgroundColor = color
    }
}

function timeRandomizerGreen() {
    if (gameStatus === true) {
        increaseSubtract()
        greenStart = Math.floor(Math.random() * (greenMax - greenMin + 1) + greenMin)
        greenStart -= subtraction
        if (greenStart <= 1) {
            greenStart = 1
            subtraction = 2
            console.log("Floor Reached");
        }
        console.log(greenStart);
        console.log("Green Turn");
        color = "rgb(38, 222, 96)"
        light.style.backgroundColor = color
        lightAlert.style.color = "rgb(12, 85, 24)"
        lightAlert.innerText = "Green Light!"
        setTimeout(timeRandomizerRed, greenStart * 1000)
        return greenStart
    } else if (gameStatus === false){
        color = "rgb(158, 121, 121)"
        light.style.backgroundColor = color
    }
}

// function redStop() {
    
// }

// rgb(38, 222, 96) is green
// rgb(210, 51, 51) is red

function addPoint() {
    if (gameStatus === true) {
        pointNum += 8
    } else {
        pointNum += 0
    }
    pointsText.innerText = pointNum
}

function startingTimer() {
    testButton.style.visibility = "hidden"
    let startTime = 3
    countdown.style.display = "block"
    overlay.style.display = "block"
    setInterval(() => {
        startTime--
        countdown.innerText = startTime;
        if (startTime == 0) {
            countdown.style.display = "none"
            overlay.style.display = "none"
            gameStatus = true
            gameStart()
            clearInterval(startingTimer)
        }
    }, 1000);
}

function gameStart() {
    if (gameStatus === true) {
        timeRandomizerRed()
        console.log("Game Is Active");
    }
}

