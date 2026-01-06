function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

let correct = 1
let streak = 0
let totalTime = 0
let totalClicks = 0
let avgTime = totalTime/totalClicks
let t0
let t1

let duration = 0

function squareClick(id) {



    
    
    if (id == correct) {
        t1 = Date.now()

        if (t0 == null) {
            t0 = Date.now()
        }

        duration = t1 - t0

        streak += 1
        totalClicks += 1
         let rng = getRandomInt(1, 16)
        correct = rng

        let r = getRandomInt(11, 245)
        let g = getRandomInt(11, 245)
        let b = getRandomInt(11, 245)

        let rgb = "rgb(" + r + ", " + g + ", " + b  + ")"
        let correctRgb = "rgb(" + (r + getRandomInt(-3, -10))  + ", " + (g + getRandomInt(7, 10)) + ", " + (b + getRandomInt(-5, 5)) + ")"
        console.log(rgb)
        console.log(correctRgb)

        document.getElementById(correct).style.backgroundColor=rgb

        for (let i = 1; i < 17; i++) {
            document.getElementById(i).style.backgroundColor=rgb
        }
        document.getElementById(correct).style.backgroundColor=correctRgb

        totalTime += duration

        t0 = Date.now()

    } else {
        streak = 0
    }

   
    document.getElementById("strkLabel").innerHTML = "Streak: " + streak + " | "
    document.getElementById("timeLabel").innerHTML = "Time: " +  Math.floor(duration) + "ms"
    document.getElementById("avgLabel").innerHTML = "Avg Time: " + Math.floor(totalTime/totalClicks) + "ms"

}

function reset() {
    streak = 0
    totalClicks = 0
    totalTime = 0
    t0 = null
    t1 = null

    document.getElementById("strkLabel").innerHTML = "Streak: " + streak + " | "
    document.getElementById("timeLabel").innerHTML = "Time: 0ms"
    document.getElementById("avgLabel").innerHTML = "Avg Time: 0ms"

}

let theme = 1
function switchTheme() {

    if (theme == 1) {
        theme = 2
        document.getElementById("pagestyle").href="darkmode.css"
        document.getElementById("modeBtn").innerHTML="Light Mode"

    } else {
        theme = 1
        document.getElementById("pagestyle").href="lightmode.css"
        document.getElementById("modeBtn").innerHTML="Dark Mode"
    }

}