const question = document.getElementById("question");
const choices = document.querySelectorAll(".choice-text");


let currentquetion = [];
let acceptinganswers = false;
let score = 0;
let questioncounter = 0;
let availablequestions = [

    {
        questions: "inside 1 is a question",
        choice1: "<choise 1>",
        choice2: "<choise 2>",
        choice3: "<choise 3>",
        choice4: "<choise 4>",
        answer: 1
    },

    {
        questions: "inside 2is a question",
        choice1: "<choise 1>",
        choice2: "<choise 2>",
        choice3: "<choise 3>",
        choice4: "<choise 4>",
        answer: 2
    },

    {
        questions: "inside3 is a question",
        choice1: "<choise 1>",
        choice2: "<choise 2>",
        choice3: "<choise 3>",
        choice4: "<choise 4>",
        answer: 3
    },

    {
        questions: "inside 4is a question",
        choice1: "<choise 1>",
        choice2: "<choise 2>",
        choice3: "<choise 3>",
        choice4: "<choise 4>",
        answer: 4
    },

    {
        questions: "inside 5is A question",
        choice1: "<choise 1>",
        choice2: "<choise 2>",
        choice3: "<choise 3>",
        choice4: ",choise 4>",
        answer: 2
    }
];

// constants

const correct_bonus = 10;
const max_questions = 3;

startplay = () => {

    questioncounter = 0;
    score = 0;

    setTime();
    getnewquestion();
};
//var


var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 15;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left till next question.";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

//Function to create and question
function sendMessage() {
    timeEl.textContent = " ";

}




// function selectanswer(e) {
//     const selectedButton = e.Target
//     const Correct = selectedButton.dataset.Correct
//     setstatusclass(button, button.dataset.correct)
//     Array.from(answerbuttonsElement.children).forEach(button => {

//     });


// start quiz function
//1 hide the start screen 2 unhide quetion screen 3 start timer , link that to the butten, 4 call the geit questions functions
getnewquestion = () => {

    // if (availablequestions.length === 0 || questioncounter > max_questions) {
    //end page
    // return window.location.assign("./end.html");
    // }



    question.innerText = availablequestions[questioncounter].questions;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        switch (number) {
            case "1":
                choice.innerText = availablequestions[questioncounter].choice1;
                break;
            case "2":
                choice.innerText = availablequestions[questioncounter].choice2;
                break;
            case "3":
                choice.innerText = availablequestions[questioncounter].choice3;
                break;
            case "4":
                choice.innerText = availablequestions[questioncounter].choice4;
                break;
        }

    });



};


choices.forEach(choice => {
    choice.addEventListener("click", e => {
        // if (!acceptinganswers) return;

        // acceptinganswers = false;
        const selectedchoice = e.target;
        const selectedanswer = selectedchoice.dataset["number"];
  
        if (questioncounter < availablequestions.length - 1) {
            questioncounter++
            getnewquestion();
        }
    });
});





startplay();