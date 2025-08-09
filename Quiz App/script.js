const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Lion", correct: false},
            {text: "ELephant", correct: true},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest conutry in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Europe", correct: false},
            {text: "North America", correct: false},
            {text: "Australia", correct: true},
        ]
    }

];
// Making const variabels in order to change the question, their answer options, and show and function next button
const questionELement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next_btn");


// defining 
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    // This will reset the score and the currect question index
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionELement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button"); 
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}
console.log(3+3);
showQuestion() ;
startQuiz();
