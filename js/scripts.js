// DOM Elements
const matrix = document.getElementById('matrix');
const difficultyInput = document.getElementById('difficulty');
const highScoreOutput = document.getElementById('high-score');
const currentScoreOutput = document.getElementById('current-score');
const playButton = document.getElementById('play-button');
const smile = playButton.querySelector('img')

const mineImage = `<img src="img/mine.png" alt="mine">`;
const smilePlay = 'img/smile.png';
const smileOver = 'img/gameover.png';

let cells = [];
let mines = [];
let currentScore = 0;
let highScore = 0;

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

const getMines = max => {
    const mines = [];

    while (mines.length < 10) {
        const mine = getRndNumber(max);
        if (!mines.includes(mine)) {
            mines.push(mine);
        }
    }
    return mines;
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
        cell.addEventListener('click', cellClick);
    }
}


const isMine = cell => mines.includes(cell);

const gameOver = thisCell => {
    thisCell.classList.add('exploded');
    smile.src = smileOver;

    if (currentScore > highScore) {
        highScore = currentScore;
        highScoreOutput.innerText = currentScore;
    }

    for (let cell of cells) {
        cell.removeEventListener('click', cellClick);
        console.log(cell);
        const position = parseInt(cell.dataset.position);
        if (isMine(position)) {
            cell.innerHTML = mineImage;
            cell.classList.add('clicked');
        }
    }
}


function cellClick() {
    console.log(this.dataset.position);

    const position = parseInt(this.dataset.position);
    if (isMine(position)) {
        gameOver(this);
        return;
    }

    this.classList.add('clicked');

    currentScore++;
    currentScoreOutput.innerText = currentScore;

}

/*********************************************** */
/*** MAIN ************************************** */
/*********************************************** */


playButton.addEventListener('click', () => {
    matrix.innerHTML = '';

    currentScore = 0;

    smile.src = smilePlay;

    const difficulty = difficultyInput.value;

    if (difficulty !== 'easy' && difficulty !== 'medium' && difficulty !== 'hard') return;

    const numberOfCells = getNumberOfCells(difficulty);

    renderField(matrix, numberOfCells, difficulty);

    mines = getMines(numberOfCells);

    cells = matrix.getElementsByClassName('cells');

    console.log(mines);
})