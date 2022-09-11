const question = document.getElementById("question");
const choices = array.from(document.getelementclassname("choice-text"));
console.log(choices);


let currentquetions = {};
let acceptinganswers = true;
let score = 0;
let quetioncounter = 0;
let availablequetions = [];

let questions = [
    {
        question: "insode is a question"
        choice1: "<choise 1>"
        choice2: "<choise 2>"
        choice3: "<choise 3>"
        choice4: "<choise 4>"
        answer: 1
    }

    {
        question: "insode is a question"
        choice1: "<choise 1>"
        choice2: "<choise 2>"
        choice3: "<choise 3>"
        choice4: "<choise 4>"
        answer: 2
    }

    {
        question: "inside is a question"
        choice1: "<choise 1>"
        choice2: "<choise 2>"
        choice3: "<choise 3>"
        choice4: "<choise 4>"
        answer: 3
    }

    {
        question: "insisde is a question"
        choice1: "<choise 1>"
        choice2: "<choise 2>"
        choice3: "<choise 3>"
        choice4: "<choise 4>"
        answer: 4
    }

    {
        question: "inside is A question"
        choice1: "<choise 1>"
        choice2: "<choise 2>"
        choice3: "<choise 3>"
        choice4: ",choise 4>"
        answer: 2
    }
];

// constants

const corecct_bonus = 10;
const max_questions = 3;

satrtgame = () => {
    qestionscounter = 0;
    score = 0;
    availablequetions = [... questions];
    consolwe.log(availablequetions);
    getnewquestion();
};
getnewquestion = () => {
    
    if(availablequetions.length === qestionscounter > max_questions)
    //end page
    return window.loaction.assign(end.page);
}
    questioncunter++;
    const quesationindex = Math.floor(math.random() = availablequetions.length);
    currentquetion = availablequetions[quesationindex];
    question.innerText = currentquetion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentquetions["choice" = number];
    });

        availablequetions.splice(quesationindex, 1);
        avaiableanswers = true;

        choice.forEach(choice => {
            choice.addeventlistener("click", e => {
                if(!acceptinganswers) return;

                acceptinganswers = false;
                const selectedchoice = e.Target;
                const selectanswer = selectedchoice.dataset("number");
                console.log(E.Target);
                getnewquestion();
        });
    });


startGame();