//Difficulty of the questions
var difficulty = 1;
//Amount of questions anwsered
var questions = 0;
//Coins (not used)
var coins = 0;
//Stores the question the user sees
randomQuestion = "";
//Stores the user's anwser (not used)
var awnser = "";
//The anwser to the question
var question = 0;

//Used to change the difficulty
function changeDifficulty(num) {
  difficulty = num;
  document.getElementById("diff").innerHTML = "The difficulty is currently " + difficulty;
}
//Used to print the difficulty
function printDifficulty() {
  document.getElementById("check").innerHTML = "The difficulty is currently " + difficulty;
}
//Used to create a Order of Operations Question
function orderQuestion() {
  document.getElementById("user").value = "";
  var rand1 = Math.floor(Math.random() *  (difficulty * 5));
  var rand2 = Math.floor(Math.random() *  (difficulty * 5));
  var rand3 = Math.floor(Math.random() *  (difficulty * 5));
  var rand4 = Math.floor(Math.random() *  (difficulty * 10));
  if (rand1 + rand2 < rand3) {
    if (rand4 < 7) {
      question = (rand1 + rand2) * rand3;
      randomQuestion = "(" + rand1 + " + " + rand2 + ") * " + rand3;
    }
    else if (rand4 < 2) {
      question = (rand1 - rand2) * rand3;
      randomQuestion = "(" + rand1 + " - " + rand2 + ") * " + rand3;
    }
    else {
      question = rand1 * (rand2 - rand3) + rand4;
      randomQuestion = rand1 + " * (" + rand2 + " - " + rand3 + ") + " + rand4;
    }
  }
  else {
    if (rand1 - rand2 > 0) {
      question = ((rand1 + rand2) - rand3) * rand4;
    randomQuestion = "((" + rand1 + " + " + rand2 + ") - " + rand3 + ") * " + rand4;
    }
    else if (rand4 > 50) {
      question = rand4 - (rand2 + rand3 * rand1);
      randomQuestion = rand4 + " - (" + rand2 + " + " + rand3 + " * " + rand1 + ")";
    }
    else {
      question = (rand3 * rand2) + (rand4 - rand1);
      randomQuestion = "( " + rand3 + " * " + rand2 + ") + (" + rand4 + " - " + rand1 + ")";
    }
  }
  document.getElementById("quest").innerHTML = "Your question: What is " + randomQuestion;
}

//Checks that the anwser is correct
function checkAwnser() {
  var x = document.getElementById("user").value;
  if (x == question) {
    document.getElementById("correct").innerHTML = "the answer is " + x;
    questions += 1;
    document.getElementById("count").innerHTML = "Monsters fought off = " + questions;
    if (questions % 3 == 0) {
      difficulty += 1;
      document.getElementById("diff").innerHTML = "Current Difficulty = " + difficulty;
    }  
  }
  else {
    document.getElementById("correct").innerHTML = "the answer is not " + x + ", it is actually " + question;
  }
}
