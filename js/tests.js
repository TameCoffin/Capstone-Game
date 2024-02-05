// document.addEventListener('keyup', (event) => {
//     if (event.code === 'Space') {
//         console.log('Space pressed')
//     }
// })

// (e) is the event. ('keyup' = checking if a key is pressed, (event) = what will be affected)
// the if statement is asking: (if the key pressed is space: do stuff)
// event = basically just activating the check
// code = simply just the id of the key being pressed
// 'space' = the assigned key

// we need to find a way to change the output of pressing space based on the event it's used for. Right now, all it can do is just display "space pressed" in the console. If we create a const that is "console.log('space pressed') and put it in the same place, it should still display in the console. So i can create variables and then just update what goes in the event listner output."

// const actions = ["action1", "action2", "action3"]

// function spaceBar() {
//     document.addEventListener('keyup', (event) => {
//         if (event.code === 'Space') {
//             console.log('Space pressed')
//         }
//     })
// }

const myElement = document.getElementById('changedElement')

let color = "rgb(0, 128, 0)"

function changeColor(e) {
    if (e.code === "Space" && color == "rgb(0, 128, 0)") {
        color = "rgb(255, 0, 0)"
        myElement.style.backgroundColor = color
        console.log(background);
        console.log("Color is now red")
    }
    else if (e.code === "Space" && color == "rgb(255, 0, 0)") {
        color = "rgb(0, 128, 0)"
        myElement.style.backgroundColor = color
        console.log(background);
        console.log("Color is now green");
    }
}


// function spacebar(e) {
//     if (e.code === "Space") {
//         console.log("Space Pressed");
//     }
// }

document.addEventListener('keyup', (e)=> {
    changeColor(e)
}); // space buttons works