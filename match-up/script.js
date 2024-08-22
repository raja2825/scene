const rights = [
    "Right to Equality",
    "Right to Freedom of Speech",
    "Right to Education",
    "Right to Constitutional Remedies"
];

const duties = [
    "Duty to Promote Harmony",
    "Duty to Abide by the Constitution",
    "Duty to Protect the Environment",
    "Duty to Respect the National Flag"
];

const matches = {
    "Right to Equality": "Duty to Promote Harmony",
    "Right to Freedom of Speech": "Duty to Abide by the Constitution",
    "Right to Education": "Duty to Protect the Environment",
    "Right to Constitutional Remedies": "Duty to Respect the National Flag"
};

let currentQuestionIndex = 0;
const questions = Object.keys(matches);

document.addEventListener('DOMContentLoaded', () => {
    populateDropdowns();
    loadQuestion();
});

function populateDropdowns() {
    const rightSelect = document.getElementById('rightSelect');
    const dutySelect = document.getElementById('dutySelect');

    rights.forEach(right => {
        const option = document.createElement('option');
        option.value = right;
        option.textContent = right;
        rightSelect.appendChild(option);
    });

    duties.forEach(duty => {
        const option = document.createElement('option');
        option.value = duty;
        option.textContent = duty;
        dutySelect.appendChild(option);
    });
}

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById('rightSelect').value = currentQuestion;
    } else {
        document.getElementById('result').innerHTML = "<p><strong>Congratulations!</strong> You've completed all questions.</p>";
        document.getElementById('checkBtn').disabled = true;
        document.getElementById('nextBtn').disabled = true;
    }
}

function submitAnswer() {
    const rightSelect = document.getElementById('rightSelect');
    const dutySelect = document.getElementById('dutySelect');
    const result = document.getElementById('result');

    const selectedRight = rightSelect.value;
    const selectedDuty = dutySelect.value;

    if (matches[selectedRight] === selectedDuty) {
        result.innerHTML = "<p><strong>Correct!</strong> You've matched the right with the correct duty.</p>";
    } else {
        result.innerHTML = "<p><strong>Incorrect.</strong> Try again.</p>";
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
    document.getElementById('result').innerHTML = "";
}
