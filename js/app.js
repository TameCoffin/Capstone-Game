// I accidently forgot to push what I currently have for the RL/GL game, so I'm gonna work on the controls today and try to get the points working.

// Step 1: Start by making the space button change an element on the page.

// Step 2: Make the element change based on if you hold the button down instead of just pressing it.

// Step 3: Once the button is working, change the affected element to a display of numbers.

// Step 4: Figure out how to make a number continually increase. OH! Isn't there a "per-tick" thing? you can do the ++ to add one every tick.

// Step 5: Once everything is working, Actually Push It Up To Github This Time :)))))))

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

let color = "rgb(158, 121, 121)"
let pointNum = 0
let gameStatus = false
let redMin = 3.00;
let redMax = 7;
let greenMin = 2.00;
let greenMax = 6.00;
let pointInterval = 0
let redReduction = 0.25
let greenReduction = 0.45

// function mathTest() {
//     let mathD = Math.round(redMax * 100) / 100
//     mathD = mathD - 2.5
//     console.log(mathD);
// }
// mathTest()

// function timeReducerTest() {
//     let randomizeNumber = Math.random() * (4.50 - 3.50 + 1) + 3
//     let randomNumber = Math.floor(randomizeNumber * 5) / 5
//     randomNumber = randomNumber - redReduction
//     if (randomNumber <= 1.00) {
//         redReduction = 0
//         console.log("Math floor hit");
//     }
//     console.log(randomNumber);
//     setTimeout(timeReducerTest, randomNumber * 500)
// }

// function timeReducerTestAgain() {
//     let randomNumber = Math.floor(Math.random() * (redMax - redMin + 1) + redMin)
//     setInterval(() => {
//         let subtractedNumber = 0.25
//         if (randomNumber <= 1) {
//             subtractedNumber = 0
//         }
//         randomNumber -= subtractedNumber
//         console.log(randomNumber);
//         timeReducerTestAgain
//     }, 500);
// }

// timeReducerTest();


function timeRandomizerRed() {
    let randomNumber = Math.floor(Math.random() * (redMax - redMin + 1) + redMin)
    if (randomNumber <= 1.00) {
        redReduction = 0
        console.log("Red Floor Reached");
    }
    randomNumber -= redReduction
    if (randomNumber -= redReduction) {
        console.log(randomNumber -= redReduction);
        console.log("Subtraction successful");
    }
    console.log(randomNumber);
    console.log("Red Turn");
        color = "rgb(210, 51, 51)"
        light.style.backgroundColor = color
        lightAlert.style.color = "rgb(210, 51, 51)"
        lightAlert.innerText = "Red Light!"
        clearInterval(pointInterval)
    setTimeout(timeRandomizerGreen, randomNumber * 1000)
}

timeRandomizerRed()


function timeRandomizerGreen() {
    let randomNumber = Math.floor(Math.random() * (greenMax - greenMin + 1) + greenMin)
    if (randomNumber <= 0.50) {
        greenReduction = 0
        console.log("Green Floor Reached");
    }
    randomNumber -= greenReduction
    if (randomNumber -= greenReduction) {
        console.log("Subtraction successful");
    }
    console.log(randomNumber);
    console.log("Green Turn");
    color = "rgb(38, 222, 96)"
        light.style.backgroundColor = color
        lightAlert.style.color = "rgb(12, 85, 24)"
        lightAlert.innerText = "Green Light!"
        pointInterval = setInterval(addPoint, 0);
    setTimeout(timeRandomizerRed, randomNumber * 1000)
}

// setTimeout(function that changes). so we need to change those to the "xLight" functions and also figure out how to disable each when one is active.

// rgb(38, 222, 96) is green
// rgb(210, 51, 51) is red

// function greenLight() {
//         color = "rgb(210, 51, 51)"
//         light.style.backgroundColor = color
//         lightAlert.style.color = "rgb(12, 85, 24)"
//         lightAlert.innerText = "Green Light!"
//         console.log("Color is now green")
//         // pointInterval = setInterval(addPoint, 0);
//     }

// function redLight() {
//         timeRandomizerRed()
//         console.log(redLight);
//         color = "rgb(38, 222, 96)"
//         light.style.backgroundColor = color
//         lightAlert.style.color = color
//         lightAlert.innerText = "Red Light!"
//         console.log("Color is now red");
//         // clearInterval(pointInterval)
//     }

function addPoint() {
    pointNum += 8
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
    if (gameStatus = true) {
        color = "rgb(210, 51, 51)"
        timeRandomizerRed()
        light.style.backgroundColor = color
        lightAlert.style.visibility = "visible"
        lightAlert.style.color = "rgb(210, 51, 51)"
        lightAlert.innerText = "Red Light!"
        console.log("Game Is Active");
    }
}

// right now i need to get the starting timer to work

testButton.addEventListener('click', ()=> {
    startingTimer()
});

// document.addEventListener('keyup', (e)=> {
//     idleSpace(e)
// }); // space buttons works

// document.addEventListener('keydown', (e)=> {
//     heldSpace(e)
// }); // space buttons works


// function heldSpace(e) {
//     if (e.code === "Space" && color == "rgb(210, 51, 51)") {
//         color = "rgb(38, 222, 96)"
//         light.style.backgroundColor = color
//         lightAlert.style.color = "rgb(12, 85, 24)"
//         lightAlert.innerText = "Green Light!"
//         console.log("Color is now green")
//         pointInterval = setInterval(addPoint, 0);
//     }
// }

// function idleSpace(e) {
//     if (e.code === "Space" && color == "rgb(38, 222, 96)") {
//         color = "rgb(210, 51, 51)"
//         light.style.backgroundColor = color
//         lightAlert.style.color = color
//         lightAlert.innerText = "Red Light!"
//         console.log("Color is now red");
//         clearInterval(pointInterval)
//     }
// }

