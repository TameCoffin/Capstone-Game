
const light = document.getElementById("light")
const pointsText = document.getElementById('points')
const countdown = document.getElementById('countdown')
const overlay = document.getElementById('overlay')
const testButton = document.getElementById('testButton')
const lightAlert = document.getElementById('lightAlert')
const errorTimeTest = document.getElementById('errorTimeTest')
const gameOverState = document.getElementById('gameOver')
const restart = document.getElementById('restartButton')
const highScore = document.getElementById('highScore')

let color = "rgb(210, 51, 51)"
let pointNum = 0
let finalScore = 0
let highscore = 0
let gameStatus = false
let redStart = 7;
let redMin = 3;
let redMax = 7;
let greenStart = 6;
let greenMin = 2;
let greenMax = 6;
let subtraction = 0.2
let roomForError = 1.5
let errorTimer = 100
let newErrorTimer = 100
let errorSubtract = 1
let keyState = {};
let startTime = 3

testButton.addEventListener('click', ()=> {
    startingTimer()
})

restart.addEventListener('click', ()=> {
    restartGame()
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
    } else if (keyState["Space"] && color == "rgb(210, 51, 51)" && errorTimer >= 1) {
        pointNum--
        pointsText.innerText = pointNum
        pointsText.style.color = "rgb(210, 51, 51)"
    } else if (keyState["Space"] && color == "rgb(210, 51, 51)" && errorTimer <= 0) {
        gameOver()
    } else {pointsText.style.color = "rgb(0, 0, 0)"}
}

function gameOver() {
    gameStatus = false
    console.log("Game Over");
    gameOverState.style.visibility = "visible"
    restart.style.visibility = "visible"
    color = "rgb(158, 121, 121)"
    light.style.backgroundColor = color
    finalScore = pointNum
    newHighscore()
    console.log("finalscore is " + finalScore);
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
    errorSubtract += 1
}

function errorIncrement() {
    console.log("errorIncrementRun");
    newErrorTimer--
    if (newErrorTimer <= 15){
        newErrorTimer = 15
    }
    setTimeout(errorIncrement, 1000)
}


// create a function that will add the value of the error increment number and then add it to the starting value of errorTime

function errorTime() {
    errorTimer += newErrorTimer
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
        errorTime()
        increaseSubtract()
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


// rgb(38, 222, 96) is green
// rgb(210, 51, 51) is red

function addPoint() {
    if (gameStatus === true) {
        pointNum += 8
        pointsText.innerText = pointNum
    }
}

function startingTimer() {
    gameOverState.style.visibility = "hidden"
    testButton.style.visibility = "hidden"
    restart.style.visibility = "hidden"
    countdown.style.display = "block"
    overlay.style.display = "block"
    startInverval = setInterval(() => {
        startTime--
        countdown.innerText = startTime;
        if (startTime == 0) {
            countdown.style.display = "none"
            overlay.style.display = "none"
            gameStatus = true
            gameStart()
            clearInterval(startInverval)
        }
    }, 1000);
}

function gameStart() {
    if (gameStatus === true) {
        errorIncrement()
        timeRandomizerRed()
        console.log("Game Is Active");
    }
}

function restartGame() {
    color = "rgb(210, 51, 51)"
    pointNum = 0
    pointsText.innerText = pointNum
    gameStatus = false
    redStart = 7;
    redMin = 3;
    redMax = 7;
    greenStart = 6;
    greenMin = 2;
    greenMax = 6;
    subtraction = 0.2
    roomForError = 1.5
    errorTimer = 150
    errorSubtract = 10
    keyState = {};
    countdown.innerText = 3
    startTime = 3
    startingTimer()
}

function newHighscore() {
    if (finalScore >= highscore) {
        highscore = finalScore
        highScore.innerText = " " + highscore
        console.log(highscore);
        console.log("high score added");
    }
}

// highscore function will be something like "If finalscore is greater than highscore, highscore = finalscore"