/*Add your JavaScript here*/
//store the left side score
var leftScore = 0; 
//store the right side score
var rightScore = 0; 
// store the number of answer clicked on
var questionsAnswered = 0; 
// store the result
var result = document.getElementById("result");
// store for restarting
var restart = document.getElementById("restart");

// store html elements using the DOM
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

//listen for click on answer buttons and call function if clicked
q1a1.addEventListener("click", left);
q1a2.addEventListener("click", right);

q2a1.addEventListener("click", right);
q2a2.addEventListener("click", left);

q3a1.addEventListener("click", left);
q3a2.addEventListener("click", right);

//listen for click on restart button to restart the quiz
restart.addEventListener("click", startOver);

//functions to track left and right scores
function left(){
  leftScore = leftScore + 1;
  questionsAnswered += 1;
  console.log("questionsAnswered = " + questionsAnswered + " leftScore = " + leftScore);

  if (questionsAnswered == 3){
    console.log("The quiz is done!")
    updateResult();
  }
}

function right(){
  rightScore = rightScore + 1;
  questionsAnswered += 1;
  console.log("questionsAnswered = " + questionsAnswered + " rightScore = " + rightScore);

  if (questionsAnswered == 3){
    console.log("The quiz is done!");
    updateResult();
  }
}

//function to update the results
function updateResult(){
  if (leftScore >=2){
    result.innerHTML = "You're more connected with the left side of your brain!";
    console.log("You're more connected with the left side of your brain!");
  } else if (rightScore >= 2){
    result.innerHTML = "You're more connected with the right side of your brain!";
    console.log("You're more connected with the right side of your brain!");
  }
}

//function to restart the quiz
function startOver(){
  result.innerHTML = "You're more connected with the..."
  var leftScore = 0
  var rightScore = 0
  var questionsAnswered = 0
  console.log("leftScore = " + leftScore + " rightScore = " + rightScore + " questionsAnswered = " + questionsAnswered)
}