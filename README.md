# Rock-Paper-Scissors Game 🎮

## Description
This is a web-based Rock-Paper-Scissors game where the player competes against the computer. Each player (you and the computer) selects either rock, paper, or scissors, and the winner of each round is determined based on the traditional rules of the game. The first player to reach a score of 10 wins the game!

## Features
- **Interactive Gameplay**: Select rock, paper, or scissors and watch the computer’s choice in real-time.
- **Score Tracking**: Displays both your score and the opponent's score.
- **Winning and Losing**: The game announces the winner or loser when one player reaches 10 points.
- **Restart Game**: Option to reset the score and start a new game.

## Game Rules
1. **Rock** beats **Scissors**.
2. **Scissors** beats **Paper**.
3. **Paper** beats **Rock**.
4. If both the player and computer choose the same option, it's a draw.

## How to Play
1. **Start the Game**: Click the "Start" button to begin the game.
2. **Make a Choice**: Choose between rock, paper, or scissors by clicking the respective button.
3. **View Results**: After each choice, the computer's choice will flash on the screen, and scores are updated based on the result.
4. **Winning Condition**: The first to reach a score of 10 wins the game.
5. **Restart**: After a game finishes, click the "Play Again" button to restart.

## Code Overview
- **Main Functions**:
  - `choose_one(choice)`: Handles the game logic, including determining the winner, updating the score, and checking for win conditions.
  - `restart()`: Resets the score and restarts the game.
  - `start_game()`: Displays the start button and initializes the game.

- **Variables**:
  - `score`: Tracks the player’s score.
  - `opp_score`: Tracks the computer's score.
  - `random_num`: Randomly generates a choice for the computer (1 = Rock, 2 = Paper, 3 = Scissors).

## Demo
You can play the game by visiting the [live demo link](https://papperrockscissors-game.netlify.app/).

## Technologies Used
- **HTML**: Structure of the application.
- **CSS**: Basic styling for a more visually engaging experience.
- **JavaScript**: Game functionality, score tracking, and DOM manipulation.

## How to Install and Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Abithaabbas/rock-paper-scissors.git
