const questions = [
    {
        question: "What is the first Fundamental Right listed in the Constitution of India?",
        options: ["Right to Equality", "Right to Freedom", "Right against Exploitation", "Right to Property"],
        correctAnswer: 0
    },
    {
        question: "Which Part of the Constitution contains the Directive Principles of State Policy?",
        options: ["Part II", "Part IV", "Part V", "Part III"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is a Fundamental Duty listed in Part IV-A?",
        options: ["Respect for the National Flag", "Right to Privacy", "Right to Education", "Right to Vote"],
        correctAnswer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.innerText = currentQuestion.options[index];
    });
}

function selectAnswer(selectedOptionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOptionIndex === currentQuestion.correctAnswer) {
        score++;
        document.getElementById('result').innerText = "Correct!";
    } else {
        document.getElementById('result').innerText = "Wrong! The correct answer is: " + currentQuestion.options[currentQuestion.correctAnswer];
    }
    document.getElementById('nextBtn').style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById('result').innerText = "";
        document.getElementById('nextBtn').style.display = "none";
    } else {
        document.getElementById('quiz').style.display = "none";
        document.getElementById('result').innerText = `Quiz Finished! Your score is ${score} out of ${questions.length}.`;
        document.getElementById('nextBtn').style.display = "none";
    }
}

loadQuestion();
