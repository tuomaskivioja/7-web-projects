const quizQuestions = [
    { question: "What is the capital of France?", choices: ["Paris", "London", "Rome", "Madrid"], answer: 0 },
    { question: "What is 2 + 2?", choices: ["3", "4", "5", "6"], answer: 1 },
    { question: "Who painted the Mona Lisa?", choices: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"], answer: 1 }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(questionIndex) {
    const questionInfo = quizQuestions[questionIndex];
    document.getElementById('question').textContent = questionInfo.question;
    const choices = document.querySelectorAll('.btn');
    choices.forEach((choice, index) => {
        choice.textContent = questionInfo.choices[index];
    });
}

function selectAnswer(choiceIndex) {
    const questionInfo = quizQuestions[currentQuestionIndex];
    if (choiceIndex === questionInfo.answer) {
        score++;
        document.getElementById('result').textContent = "Correct!";
    } else {
        document.getElementById('result').textContent = "Wrong!";
    }
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion(currentQuestionIndex);
        document.getElementById('result').textContent = '';
    } else {
        document.getElementById('quiz').innerHTML = `<h2>Your final score is ${score}/${quizQuestions.length}</h2>`;
    }
}

showQuestion(currentQuestionIndex);
