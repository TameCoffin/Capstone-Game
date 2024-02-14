// Add 100 points each time you listen to Simon. If you hold down space on red and simon didn't tell you to, your points go up, but slower than if it was green

const testButton = document.getElementById('testButton')
const checkStatus = document.getElementById('statusCheck')
const light = document.getElementById("light")
const simon = document.getElementById("lightAlert")
const pointsText = document.getElementById('points')


// rgb(38, 222, 96) is green
// rgb(210, 51, 51) is red

// Create a 50/50 decider. Right now I'll just make the light change to signify which one changed. Make sure to put into the console which one ran though.

let lightColor = " "
let simonSaid = false
let says = 0
let silent = 0
let pointNum = 0




// testButton.addEventListener('click', ()=> {
//     simonDecider()
// })

testButton.addEventListener('click', ()=> {
    lightSwitch()
    simonDecider()
})

checkStatus.addEventListener('click', ()=> {
    didSimonSay()
})

function lightSwitch() {
    if (light.style.backgroundColor === "rgb(158, 121, 121)") {
        lightColor = "rgb(210, 51, 51)"
        light.style.backgroundColor = lightColor
    } else if (light.style.backgroundColor === "rgb(210, 51, 51)") {
        lightColor = "rgb(38, 222, 96)"
        light.style.backgroundColor = lightColor
    } else {
        lightColor = "rgb(210, 51, 51)"
        light.style.backgroundColor = lightColor
    }
}

// Step 1 done

function simonDecider() {
    x = (Math.floor(Math.random() * 2) == 0);
    if(x) {
        simonSaid = "Simon says:"
        simon.innerText = simonSaid
    	console.log("Simon says");
        simonSaid = true
    } else {
        simonSaid = "Light"
        simon.innerText = simonSaid
        console.log("Simon silent");
        simonSaid = false
    }
}

/* 
    Step 2: 

        Make a function that checks if Simon is active or not.
*/

/*
    Step 2 done

    Step 3:

        Now make a function that will changed to a pass or fail if you meet the conditions of both the light and simon
 */

function didSimonSay() {
    if (simonSaid === false && light.style.backgroundColor === "rgb(210, 51, 51)") {
        console.log("Well Done! Light was red and simon didn't speak");
        pointNum += 1000
        pointsText.innerText = pointNum
    } else if (simonSaid === true && light.style.backgroundColor === "rgb(210, 51, 51)") {
        console.log("Game Lost: Light was red and simon spoke");
    } else if (simonSaid === false && light.style.backgroundColor === "rgb(38, 222, 96)") {
        console.log("Game Lost: Light was green and simon didn't speak");
    } else if (simonSaid === true && light.style.backgroundColor === "rgb(38, 222, 96)") {
        console.log("Well Done! Light was green and simon spoke");
        pointNum += 1000
        pointsText.innerText = pointNum
    }
}

/* 
    Step 3 done

    Step 4: 

        Apply the add 1000 points to the didSimonSay function

        (RAN INTO A SNAG)
            I gotta create a seperate function that will add 1000 to every possible outcome if you listen to him. Right now I have it so it will add 1000 for each success + click, but now I need to make it so the points will add when you *don't* do anything.

            What might work best is just that when the game over state runs, the points stop adding. Otherwise the points will just normally add each turn.

            Also make sure the points add *specifically* on the light changing after a successful turn
*/

// Step 5: I think I can start to bring over the code from the normal mode now. Take it slow.



/*
    2-13-24

        So I seem to have all the basic stuff done and the game is about as functional as it needs to be. Today let's just add smaller elements like options and messages. EG, option to turn off the text that notifies of the light changing and a tutorial message before the game starts.

        CONT: legit all i can really think to do now is just to work on the hardmode. my mind is full of fuzz rn. I'd say we just make a new js file and work on the new fucntions of hardmode.

        What we will need:

        A 50/50 output decider that will randomly pick between Sim yes or Sim no.

        Win/loss variables changed to account for the status of Sim.

        Optional: Make points increase to a less degree if you do the opposite of what Sim requests. This just makes the game more active rather than just staying idle for most of it. Would get boring.

        In terms of what I will present by the end of the week: 

        They might be dissapointed. I'll have new stuff, but I kinda wanna have it be a suprise for the end. I'll add more option features probably. Maybe add options to change the light shape, that could be fun. Might be a good practice on how to use a dropdown menu.

        I finished the tutorial message today, but it might be all I can really muster as of now. I'm eepy.
*/

/*
    Sources:

        50/50 decider based off of https://stackoverflow.com/questions/32302066/coin-toss-with-javascript-and-html by Amit
*/