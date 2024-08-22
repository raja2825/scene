document.addEventListener('DOMContentLoaded', () => {
    const mazeCanvas = document.getElementById('mazeCanvas');
    const ctx = mazeCanvas.getContext('2d');
    const cellSize = 40;
    const cols = mazeCanvas.width / cellSize;
    const rows = mazeCanvas.height / cellSize;
    const maze = generateMaze(cols, rows);
    const player = { x: 0, y: 0 };
    const questions = [
        { question: "What is the Preamble?", correctAnswer: "Start" },
        { question: "What is a Fundamental Right?", correctAnswer: "Go Right" },
        { question: "What is a Directive Principle?", correctAnswer: "Go Down" },
        { question: "What are Fundamental Duties?", correctAnswer: "Go Left" },
        { question: "What is the right to equality?", correctAnswer: "Go Up" }
    ];
    let currentQuestion = 0;

    drawMaze();
    drawPlayer();

    document.getElementById('nextQuestion').addEventListener('click', () => {
        askQuestion();
    });

    function drawMaze() {
        ctx.clearRect(0, 0, mazeCanvas.width, mazeCanvas.height);
        ctx.fillStyle = '#2e8b57';

        maze.forEach(row => {
            row.forEach(cell => {
                if (cell.walls.top) {
                    ctx.fillRect(cell.x * cellSize, cell.y * cellSize, cellSize, 2);
                }
                if (cell.walls.right) {
                    ctx.fillRect((cell.x + 1) * cellSize - 2, cell.y * cellSize, 2, cellSize);
                }
                if (cell.walls.bottom) {
                    ctx.fillRect(cell.x * cellSize, (cell.y + 1) * cellSize - 2, cellSize, 2);
                }
                if (cell.walls.left) {
                    ctx.fillRect(cell.x * cellSize, cell.y * cellSize, 2, cellSize);
                }
            });
        });
    }

    function drawPlayer() {
        ctx.fillStyle = '#007bff';
        ctx.fillRect(player.x * cellSize + 2, player.y * cellSize + 2, cellSize - 4, cellSize - 4);
    }

    function askQuestion() {
        if (currentQuestion < questions.length) {
            const questionObj = questions[currentQuestion];
            const userAnswer = prompt(questionObj.question);
            if (userAnswer.toLowerCase() === questionObj.correctAnswer.toLowerCase()) {
                movePlayer();
                currentQuestion++;
            } else {
                alert('Incorrect! Try again.');
            }
        } else {
            alert('Congratulations! You completed the maze.');
        }
    }

    function movePlayer() {
        switch (questions[currentQuestion].correctAnswer) {
            case 'Go Right':
                if (!maze[player.y][player.x].walls.right) player.x++;
                break;
            case 'Go Down':
                if (!maze[player.y][player.x].walls.bottom) player.y++;
                break;
            case 'Go Left':
                if (!maze[player.y][player.x].walls.left) player.x--;
                break;
            case 'Go Up':
                if (!maze[player.y][player.x].walls.top) player.y--;
                break;
        }
        drawMaze();
        drawPlayer();
    }

    function generateMaze(cols, rows) {
        const grid = [];
        for (let y = 0; y < rows; y++) {
            const row = [];
            for (let x = 0; x < cols; x++) {
                row.push({
                    x,
                    y,
                    walls: { top: true, right: true, bottom: true, left: true },
                    visited: false
                });
            }
            grid.push(row);
        }
        return grid;
    }
});
