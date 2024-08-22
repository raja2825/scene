const questions = [
    {
        question: "A company is hiring new employees but is discriminating against candidates based on their religion. What should you do?",
        choices: [
            "Ignore the issue, as the company has the right to hire anyone it chooses.",
            "Report the discrimination to the authorities, as everyone has the right to equal opportunity.",
            "Offer to negotiate with the company to include more candidates from different religions."
        ],
        answer: 1
    },
    {
        question: "A journalist is facing threats for reporting on a corrupt politician. What action should be taken?",
        choices: [
            "Advise the journalist to stop writing about the politician to stay safe.",
            "Provide protection for the journalist and ensure their right to freedom of speech is upheld.",
            "Encourage the journalist to write anonymously."
        ],
        answer: 1
    },
    {
        question: "A group of children in a rural area is not attending school due to financial constraints. How can you help?",
        choices: [
            "Suggest the children work and save money to afford education.",
            "Advocate for government subsidies or support to ensure these children receive free education.",
            "Ignore the problem, as education is not a priority in that area."
        ],
        answer: 1
    },
    // Add more questions here
];

let currentQuestion = 0;

function displayQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('story').innerHTML = `<p>${question.question}</p>`;
    document.getElementById('choices').innerHTML = question.choices.map((choice, index) => 
        `<button onclick="makeChoice(${index})">${choice}</button>`
    ).join('');
    document.getElementById('nextQuestionBtn').style.display = 'none';
}

function makeChoice(choice) {
    const question = questions[currentQuestion];
    const result = document.getElementById('result');
    if (choice === question.answer) {
        result.innerHTML = "<p><strong>Correct!</strong> You made the right choice based on the Constitution.</p>";
        document.getElementById('nextQuestionBtn').style.display = 'inline-block';
    } else {
        result.innerHTML = "<p><strong>Incorrect.</strong> Try again and consider the principles of the Constitution.</p>";
        document.getElementById('nextQuestionBtn').style.display = 'none';
    }
}

function nextQuestion() {
    currentQuestion = (currentQuestion + 1) % questions.length;
    displayQuestion();
    document.getElementById('result').innerHTML = "";
}

// Initial call to display the first question
displayQuestion();
