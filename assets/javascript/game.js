//variables
var wins = 0
var loses = 0
var currentScore = 0
var targetNumber = getRandomArbitrary()
var purple = getRandomCrystal()
var white = getRandomCrystal()
var blue = getRandomCrystal()
var black = getRandomCrystal()


$("#score").text(currentScore)
$("#target-score").text(targetNumber)
$("#wins").text(wins)
$("#loses").text(loses)

//crystal click number
function getRandomCrystal() {
    return Math.floor(Math.random() * (12 - 1)) + 1;
}


//crystal target number 19-120 return math.floor(math.random() * (1 + top - bottom));
function getRandomArbitrary() {
    return Math.floor(Math.random() * (120 - 19)) + 1;
}


//reset game
function reset() {
    currentScore = 0
    targetNumber = getRandomArbitrary()
    purple = getRandomCrystal()
    white = getRandomCrystal()
    blue = getRandomCrystal()
    black = getRandomCrystal()
    $("#target-score").text(targetNumber)
    $("#score").text(currentScore)
}


//score checker = check point total after each click, if > target number add to loses and restarts
$(".crystal").on("click", function () {
    var currentClick = $(this).attr("data-crystal")
    if (currentClick === "purple") {
        currentScore = currentScore + purple
    }
    if (currentClick === "white") {
        currentScore = currentScore + white
    }
    if (currentClick === "blue") {
        currentScore = currentScore + blue
    }
    if (currentClick === "black") {
        currentScore = currentScore + black
    }
    if (currentScore === targetNumber) {
        wins++
        reset()
        console.log({targetNumber, purple})

    }
    if (currentScore > targetNumber) {
        loses++
        reset()
    }
    $("#score").text(currentScore)
    $("#wins").text(wins)
    $("#loses").text(loses)
    console.log(currentScore)// return scores here
    
})
