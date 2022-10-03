
//Event listener on the start quiz button
    
    function startButton(){
        console.log("It's Alive")
    };
    
    document.getElementById("StartQuiz").addEventListener("click",startButton);
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