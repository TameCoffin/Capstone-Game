// I accidently forgot to push what I currently have for the RL/GL game, so I'm gonna work on the controls today and try to get the points working.

// Step 1: Start by making the space button change an element on the page. DONE

// Step 2: Make the element change based on if you hold the button down instead of just pressing it. DONE

// Step 3: Once the button is working, change the affected element to a display of numbers. DONE

// Step 4: Figure out how to make a number continually increase. OH! Isn't there a "per-tick" thing? you can do the ++ to add one every tick. DONE

// Step 5: Once everything is working, Actually Push It Up To Github This Time :))))))) DONE

// extra idea: once we get the random timer all sorted out and working, maybe we can also make the time decreased and increased random too. So it could either go up or down 

// hard mode: include simon says into it as well. if simon says red light, you do red light as normal. if it just says redlight, you continue to hold down the button.

// Very rare chance to get "blue." You can hold down space or not, there is no punishment when it shows up.


/*

    2-6-24: last left off finally finishing the basic light changing function. next I need to make the max-min change depending on how long the game has gone on.

*/ 


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
    console.log("Game Over");
    gameOverState.style.visibility = "visible"
    window.removeEventListener('keydown',keyDown(),false)
    color == "rgb(158, 121, 121)"
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
}

function timeRandomizerGreen() {
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
        color = "rgb(210, 51, 51)"
        timeRandomizerRed()
        light.style.backgroundColor = color
        lightAlert.style.visibility = "visible"
        lightAlert.style.color = "rgb(210, 51, 51)"
        lightAlert.innerText = "Red Light!"
        console.log("Game Is Active");
    }
}


/*

    Sources:

    "Game Loop" function was taken from "nnnnn" 
    link: https://jsfiddle.net/nnnnnn/gedk6/

    "Random Number Generator" function was based on code from "danday74" and "Francisc"
    https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
*/ 