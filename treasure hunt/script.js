document.addEventListener('DOMContentLoaded', () => {
    const clues = [
        {
            question: "What is the Directive Principle that aims to secure a uniform civil code?",
            answer: "Uniform Civil Code",
            hint: "It aims for a common set of laws for all citizens."
        },
        {
            question: "Which Directive Principle seeks to promote the welfare of the people?",
            answer: "Promotion of Welfare",
            hint: "It aims to improve the quality of life for citizens."
        },
        {
            question: "Which Directive Principle focuses on the provision of adequate livelihood?",
            answer: "Adequate Livelihood",
            hint: "It ensures that every person can earn enough for a decent living."
        }
        // Add more clues as needed
    ];

    const cluesContainer = document.getElementById('cluesContainer');
    clues.forEach((clue, index) => {
        const clueElement = document.createElement('div');
        clueElement.className = 'clue';
        clueElement.innerHTML = `<strong>Clue ${index + 1}:</strong> ${clue.question}`;
        clueElement.dataset.answer = clue.answer;
        clueElement.dataset.hint = clue.hint;
        clueElement.addEventListener('click', () => {
            showHint(clueElement);
        });
        cluesContainer.appendChild(clueElement);
    });
});

function showHint(element) {
    const answer = element.dataset.answer;
    const hint = element.dataset.hint;
    const userAnswer = prompt(`Hint: ${hint}\nEnter your answer:`);
    if (userAnswer && userAnswer.trim().toLowerCase() === answer.toLowerCase()) {
        element.classList.add('found');
        document.getElementById('treasureResult').innerHTML = `<p><strong>Correct!</strong> You found a treasure.</p>`;
    } else {
        document.getElementById('treasureResult').innerHTML = `<p><strong>Incorrect.</strong> Try again.</p>`;
    }
}
