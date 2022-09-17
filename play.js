const question = document.getElementById("question");
const choices = document.querySelectorAll(".choice-text");
const wrong = document.getElementById("wrong");
var timerInterval;
let currentquetion = [];
let acceptinganswers = false;
let score = 0;
let questioncounter = 0;
let availablequestions = [


    {
        questions: "how do you style a site ?",
        choice1: "< css >",
        choice2: "< java >",
        choice3: "< html >",
        choice4: "< style >",
        answer: 1
    },

    {
        questions: " how do you set a image ?",
        choice1: "< back ground >",
        choice2: "<img>",
        choice3: "<a>",
        choice4: "<p>",
        answer: 2
    },

    {
        questions: "where is your header ?",
        choice1: "< on your css>",
        choice2: "<on your html>",
        choice3: "<on your java>",
        choice4: "<on your java script>",
        answer: 3
    },

    {
        questions: "how old is the us ?",
        choice1: "<10 yr>",
        choice2: "<20 years>",
        choice3: "<30 years>",
        choice4: "<40 years>",
        answer: 4
    },

    {
        questions: "where is the text changed ?",
        choice1: "<html>",
        choice2: "<css>",
        choice3: "<java>",
        choice4: "<ima>",
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

var secondsLeft = 80;

function setTime() {
    // Sets interval in variable
     timerInterval = setInterval(function () {
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
         if(selectedanswer === availablequestions[questioncounter].answer){
            score+=2
            wrong.innerText = "true"
         }else{
            wrong.innerText = "wrong"  
            secondsLeft -=2

         }
        if (questioncounter < availablequestions.length - 1) {
            questioncounter++
            getnewquestion();
        }else{
            clearInterval(timerInterval);  
            localStorage.setItem("score",score+secondsLeft)
        }
    });
});





startplay();