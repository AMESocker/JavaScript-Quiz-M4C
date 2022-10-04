
//Event listener on the start quiz button
document.getElementById("StartQuiz").addEventListener("click",startButton);

//start Quiz
function startButton(){
    console.log("It's Alive");
    //selecting element
    // document.getElementById("startBox"); 
    //set attribute
    
    clock.setAttribute("style", "display: contents");
    startBox.setAttribute("style", "display: none");
    question1Box.setAttribute("style", "display: contents");
    timer();
    // setTimeout(() ={
    //     endBox.setAttribute("style","display:contents");
    // },6000);
    
};
var seconds = 60;
var clockSelector = document.getElementById('clock');
function counterSeconds(){
    seconds -= 1;
    clockSelector.innerHTML = seconds;
};
function timer(){setInterval(counterSeconds,1000);};

// document.getElementsByClassName("answer").addEventListener("click",nextQuestion);
//Console doesn't like preceding statement
// var minusTime = ('clock ' -= 15);
//first question
document.getElementById('1a').addEventListener("click",nextQuestion);
document.getElementById('1b').addEventListener("click",nextQuestion);
document.getElementById('1c').addEventListener("click",correctQuestion);
document.getElementById('1d').addEventListener("click",nextQuestion);
document.getElementById('Clock').minusTime;

function nextQuestion(){ 
    console.log("Put...the candle...back!");
    question1Box.setAttribute("style","display: none");
    question2Box.setAttribute("style","display:contents");
    document.getElementById('Clock');
};
function correctQuestion(){
    console.log("It is pronounced Fronkensteen!");
    question1Box.setAttribute("style","display: none");
    question2Box.setAttribute("style","display:contents");
    localStorage.setItem('Score', 1);
}

//second question
document.getElementById('2a').addEventListener("click",endQuiz);
document.getElementById('2b').addEventListener("click",endCorrectQuestion);
document.getElementById('2c').addEventListener("click",endQuiz);
document.getElementById('2d').addEventListener("click",endQuiz);

function endQuiz(){
    console.log("Ovaltine?");
    question2Box.setAttribute("style","display: none");
    endBox.setAttribute("style","display:contents");

};

function endCorrectQuestion(){
    console.log("Putting on the Ritz");
    question2Box.setAttribute("style","display: none");
    endBox.setAttribute("style","display:contents");
    localStorage.setItem('Score2', 1);

};
//End Box
document.getElementById('playAgain').addEventListener("click",playAgain);

function playAgain(){
    console.log("IT...COULD...WORK!");
    endBox.setAttribute("style", "display: none");
    question1Box.setAttribute("style", "display: contents");
}



// function q1(){
    //if wrong button
    //load question 2
    // if (){
    //if write button
    //load question 2    
// } else {

// }};
    //syntax - element.addEventListener(event, function, useCapture);
    //at event action page layout will change by data attributes
    //Timer will start
        //Timer will be every one second or 1000 milliseconds
        //Every second will trigger an set attribute
        //the changed attribute will be from a decrement function 

//Event listener on each of the answer buttons
    //When any button is clicked a new question is loaded by changing data attributes
    //If button does not match correct answer then time is reduced by a set amount
    
//When Timer reaches zero a finish game screen will appear