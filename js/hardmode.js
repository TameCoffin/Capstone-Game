const testButton = document.getElementById('testButton')
const light = document.getElementById("light")

// Create a 50/50 decider. Right now I'll just make the light change to signify which one changed. Make sure to put into the console which one ran though.

let lightColor = " "
let red = 0
let green = 0



testButton.addEventListener('click', ()=> {
    lightDecider()
})

function lightDecider() {
    x = (Math.floor(Math.random() * 2) == 0);
    if(x) {
        lightColor = "rgb(210, 51, 51)"
        light.style.backgroundColor = lightColor
    	console.log("1");
    } else {
        lightColor = "rgb(38, 222, 96)"
        light.style.backgroundColor = lightColor
        console.log("2");
    }
}

// Step 1 done

// 


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