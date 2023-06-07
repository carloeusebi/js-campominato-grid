// DOM Elements
const matrix = document.getElementById('matrix');
const difficultyInput = document.getElementById('difficulty');
const highScoreInput = document.getElementById('high-score');
const currentScoreInput = document.getElementById('current-score');
const playButton = document.getElementById('play-button');

let bombs = [];
let curretnScore;
let hihgScore;

/*********************************************** */
/*** FUNCTIONS ********************************* */
/*********************************************** */

const getNumberOfCells = difficulty => {
    switch (difficulty) {

        case 'easy':
            return 100;

        case 'hard':
            return 49;

        default:
            return 81;
    }
}

const getRndNumber = max => Math.floor(Math.random() * max) + 1;

const getBombs = max => {
    const bombs = [];

    while (bombs.length < 10) {
        const bomb = getRndNumber(max);
        if (!bombs.includes(bomb)) {
            bombs.push(bomb);
        }
    }

    return bombs;
}

const createCell = position => {
    const cell = document.createElement('div');
    cell.className = 'cells';
    cell.dataset.position = position;
    return cell;
}

const renderField = (matrix, numberOfCells, difficulty) => {

    matrix.className = difficulty;

    for (let i = 1; i <= numberOfCells; i++) {
        const cell = createCell(i);
        matrix.appendChild(cell);
    }
}

/*********************************************** */
/*** MAIN ************************************** */
/*********************************************** */


playButton.addEventListener('click', () => {
    matrix.innerHTML = '';

    const difficulty = difficultyInput.value;

    if (difficulty !== 'easy' && difficulty !== 'medium' && difficulty !== 'hard') return;

    const numberOfCells = getNumberOfCells(difficulty);

    renderField(matrix, numberOfCells, difficulty);

    bombs = getBombs(numberOfCells);
})