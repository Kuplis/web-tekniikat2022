// Riina Laukkanen

// success and fail comments
const CORRECT = "Well done, this is correct!";
const FAIL = "What a pity. It's not quite correct.";
const ERRORNUM = "The asnwers needs to be a number"

// random number generator, from  https://www.w3schools.com/JS/js_random.asp
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let multiplier = 0; // kertoja
let multiplicand = 0; // kerrottava
let counter = 0; // correct answers
let countAll = 1; // all questions

// hide extra buttons in the beginning
document.getElementById("checkAnswer").style.visibility = "hidden";
document.getElementById("next").style.visibility = "hidden";
document.getElementById("writeAnswer").style.visibility = "hidden";
document.getElementById("fireworks").style.visibility = "hidden";


function createQuestion() {
  multiplier = getRndInteger(2,10);
  multiplicand = getRndInteger(2,10);
  document.getElementById("formula").innerHTML= multiplier + " x " + multiplicand + " = " + " ?";
}  

// start the game
function start() {
  document.getElementById("answer").innerHTML = "";
  document.getElementById("formula").innerHTML = "";
  document.getElementById("writeAnswer").value = "";
      
  createQuestion();

  document.getElementById("start").style.visibility ="hidden";
  document.getElementById("checkAnswer").style.visibility = "visible";
  document.getElementById("next").style.visibility = "visible";
  document.getElementById("writeAnswer").style.visibility = "visible"
  document.querySelector("#next").disabled = true;
 }

function checkAnswer() {
  let answer = multiplier * multiplicand;
  let input = document.getElementById("writeAnswer").value;

  if (isNaN(input) === true) {
    document.getElementById("answer").innerHTML = ERRORNUM;
    return;
  } 
  if (input == answer) {
    document.getElementById("answer").innerHTML = CORRECT;
    counter++;
    document.getElementById("counter").innerHTML = countAll + " /10";
  } else {
    document.getElementById("answer").innerHTML = FAIL + " Correct answer is " + answer + ".";
    document.getElementById("counter").innerHTML = countAll + " /10";
  }
  document.querySelector("#checkAnswer").disabled = true;
  document.querySelector("#next").disabled = false;
}

function nextQuestion() {

  document.querySelector("#next").disabled = true;
  document.getElementById("formula").innerHTML = "";
  document.getElementById("writeAnswer").value = "";
  document.getElementById("answer").innerHTML = "";

  countAll++;
// Final points
  if (countAll > 10){
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("checkAnswer").style.visibility = "hidden";
    document.getElementById("writeAnswer").style.visibility = "hidden";
    document.getElementById("counter").style.visibility = "hidden";
    document.getElementById("answerBox").innerHTML = '<img src="images/fireworks1.jpg" id="fireworks">';
    document.getElementById("start").innerHTML = "Amazing! <br> You got this many points <br>" + counter +  " /10";
    document.getElementById("next").innerText = "Try again";
    document.querySelector("#next").disabled = false;
    document.getElementById("next").onclick = function(){location.reload()}
  } else {
    createQuestion();
  } 
  document.querySelector("#checkAnswer").disabled = false;
}

