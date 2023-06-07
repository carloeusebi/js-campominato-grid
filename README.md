# MINEFIELD

## By Carlo Eusebi

<hr>

#### Elements on the DOM:
1. Matrix;
1. Cells;
1. Play button;
1. Difficulty selector;
1. Current score;
1. High score;
1. Game over;

<HR>

<br>

### Functions:
- Create matrix:
    1. Based on difficulty level get a parameter for number of cells to generate;
- GAME OVER.
    1. Show where bombs were located;
    1. Display game over;
    1. **IF** current score si higher than high score:
        1. Update high score;
    
### Steps:
1. Grab DOM elements;
1. On Play Button click:
    1. Read difficulty;
    1. _Create matrix based on difficulty_;
    1. Generate 10 random numbers to represent bombs;
1. Liste on every cell:
    1. On click :
        1. Log its number;
        1. **IF** bombs array contains cell's number:
            1. _GAME OVER_;
        1. **ELSE**
            1. Flag the cell as clicked;
            1. Increment score;

    

