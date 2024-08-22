document.addEventListener('DOMContentLoaded', () => {
    const rightsAndResponsibilities = [
        "Right to Equality", "Right to Freedom", "Right Against Exploitation",
        "Right to Freedom of Religion", "Cultural and Educational Rights", 
        "Right to Constitutional Remedies", "Duty to Abide by the Constitution",
        "Duty to Defend the Country", "Duty to Promote Harmony", "Duty to Protect Public Property",
        "Duty to Develop Scientific Temper", "Duty to Strive for Excellence", 
        "Right to Vote", "Duty to Respect the National Symbols", 
        "Duty to Safeguard Public Property", "Duty to Provide Education"
    ];

    const bingoBoard = document.getElementById('bingoBoard');
    const startGameButton = document.getElementById('startGame');
    const result = document.getElementById('result');

    startGameButton.addEventListener('click', () => {
        bingoBoard.innerHTML = '';
        result.textContent = '';
        const shuffledItems = shuffle([...rightsAndResponsibilities]);
        shuffledItems.slice(0, 25).forEach(item => {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = item;
            cell.addEventListener('click', () => markCell(cell));
            bingoBoard.appendChild(cell);
        });
    });

    function markCell(cell) {
        if (!cell.classList.contains('marked')) {
            cell.classList.add('marked');
            if (checkWin()) {
                result.textContent = 'Bingo! You’ve matched a row!';
            }
        }
    }

    function checkWin() {
        const cells = [...bingoBoard.children];
        const patterns = [
            [0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], 
            [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], // Rows
            [0, 5, 10, 15, 20], [1, 6, 11, 16, 21], [2, 7, 12, 17, 22], 
            [3, 8, 13, 18, 23], [4, 9, 14, 19, 24], // Columns
            [0, 6, 12, 18, 24], [4, 8, 12, 16, 20] // Diagonals
        ];
        return patterns.some(pattern => pattern.every(index => cells[index].classList.contains('marked')));
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});
