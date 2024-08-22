const preambleWords = [
    "WE", "THE", "PEOPLE", "OF", "INDIA,", "having", "solemnly", "resolved",
    "to", "constitute", "India", "into", "a", "SOVEREIGN", "SOCIALIST", "SECULAR", "DEMOCRATIC", "REPUBLIC", 
    "and", "to", "secure", "to", "all", "its", "citizens:"
];

let shuffledWords = shuffleArray([...preambleWords]);

const puzzleContainer = document.getElementById('puzzle-container');

// Create and display puzzle pieces
shuffledWords.forEach(word => {
    const wordElement = document.createElement('div');
    wordElement.className = 'puzzle-piece';
    wordElement.draggable = true;
    wordElement.innerText = word;
    wordElement.addEventListener('dragstart', dragStart);
    wordElement.addEventListener('dragover', dragOver);
    wordElement.addEventListener('drop', drop);
    puzzleContainer.appendChild(wordElement);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.innerText);
    e.target.classList.add('dragging');
}

function dragOver(e) {
    e.preventDefault();
    const draggingElement = document.querySelector('.dragging');
    const afterElement = getDragAfterElement(puzzleContainer, e.clientX);
    if (afterElement == null) {
        puzzleContainer.appendChild(draggingElement);
    } else {
        puzzleContainer.insertBefore(draggingElement, afterElement);
    }
}

function drop(e) {
    e.target.classList.remove('dragging');
}

function getDragAfterElement(container, x) {
    const draggableElements = [...container.querySelectorAll('.puzzle-piece:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = x - box.left - box.width / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkOrder() {
    const currentOrder = [...puzzleContainer.children].map(child => child.innerText);
    if (JSON.stringify(currentOrder) === JSON.stringify(preambleWords)) {
        document.getElementById('result').innerText = "Correct! You've arranged the Preamble correctly.";
    } else {
        document.getElementById('result').innerText = "Incorrect! Try again.";
    }
}
