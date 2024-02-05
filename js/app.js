// I accidently forgot to push what I currently have for the RL/GL game, so I'm gonna work on the controls today and try to get the points working.

// Step 1: Start by making the space button change an element on the page.

// Step 2: Make the element change based on if you hold the button down instead of just pressing it.

// Step 3: Once the button is working, change the affected element to a display of numbers.

// Step 4: Figure out how to make a number continually increase. OH! Isn't there a "per-tick" thing? you can do the ++ to add one every tick.

// Step 5: Once everything is working, Actually Push It Up To Github This Time :)))))))

const myElement = document.getElementById('changedElement')

let color = "rgb(0, 128, 0)"

function changeColor(e) {
    if (e.code === "Space" && color == "rgb(0, 128, 0)") {
        color = "rgb(255, 0, 0)"
        myElement.style.backgroundColor = color
        console.log("Color is now red")
    }
    else if (e.code === "Space" && color == "rgb(255, 0, 0)") {
        color = "rgb(0, 128, 0)"
        myElement.style.backgroundColor = color
        console.log("Color is now green");
    }
}

document.addEventListener('keyup', (e)=> {
    changeColor(e)
}); // space buttons works


