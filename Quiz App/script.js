const questions = [
    {
        question: "What is what",
        answers: [
            {option: "This", correct: false},
            {option: "This2", correct: false},
            {option: "Thi3", correct: true},
            {option: "Thi4", correct: false},
        ]
    },
    {
        question: "What is what",
        answers: [
            {option: "This", correct: false},
            {option: "This2", correct: false},
            {option: "Thi3", correct: true},
            {option: "Thi4", correct: false},
        ]
    },
    {
        question: "What is what",
        answers: [
            {option: "This", correct: false},
            {option: "This2", correct: false},
            {option: "Thi3", correct: true},
            {option: "Thi4", correct: false},
        ]
    },
    {
        question: "What is what",
        answers: [
            {option: "This", correct: false},
            {option: "This2", correct: false},
            {option: "Thi3", correct: true},
            {option: "Thi4", correct: false},
        ]
    },
];

const question = document.querySelector("#question");
const answersButtons = document.querySelector("#answers-buttons");
const nextButton = document.querySelector("#next-button");

let score = 0;
let currentQuestionIndex = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    question.innerHTML = `${questionNo}. ${currentQuestion.question}`

    currentQuestion.answers.forEach((answer)=>{
        const answerButton = document.createElement("button");
        answerButton.innerHTML = answer.option;
        answerButton.classList.add("btn");
        answersButtons.appendChild(answerButton);
        if(answer.correct){
            answerButton.dataset.correct = answer.correct;
        }
        answerButton.addEventListener("click", showAnswer);
    });

}
function resetState(){
    nextButton.style.display = "none";
    while(answersButtons.firstChild){
        answersButtons.removeChild(answersButtons.firstChild)
    }
}

function showAnswer(e){
    const selectedAnswer = e.target;
    const isCorrect = selectedAnswer.dataset.correct === "true"
    if(isCorrect){
        selectedAnswer.classList.add("right");
        score++;
    }else{
        selectedAnswer.classList.add("wrong");
    }
    Array.from(answersButtons.children).forEach((button)=>{
        if(button.dataset.correct === "true"){
            button.classList.add("right");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    question.innerHTML = `You have scored ${score} out of ${questions.length}`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startQuiz();
    }
})

startQuiz();