# Wordle Clone Game

This is a Wordle-like game built using React. The goal of the game is to guess a secret 5-letter word within 6 attempts. The game provides feedback for each guess, indicating how close the guess is to the target word.

## Objective

The primary objective of the game is to guess a secret word using the feedback provided after each guess. The feedback is color-coded to guide players in making more accurate guesses:

- **Green**: Correct letter in the correct position.
- **Yellow**: Correct letter but in the wrong position.
- **Gray**: Incorrect letter.

Players have 6 attempts to guess the correct word. After each guess, the game will display feedback, and once the game ends (either by winning or exhausting attempts), the user can restart the game using a "New Game" button.

## Features

### Game Logic
- The user has 6 attempts to guess a 5-letter word.
- After each guess, color-coded feedback is displayed:
  - **Green** for correct letter and position.
  - **Yellow** for correct letter but wrong position.
  - **Gray** for incorrect letter.
- The game will prevent invalid words from being submitted (only valid 5-letter words).
  
### UI/UX
- A grid that shows previous guesses with color-coded feedback.
- A message indicating whether the user has won or lost.
- A "New Game" button to restart the game.
  
### State Management
- Tracks guessed words, remaining attempts, and game status.
- Updates the UI according to the current game state.

### Performance & Code Quality
- Clean, modular, and readable code.
- Proper component structure and organization.

### Optional Enhancements
- Animations for letter feedback to enhance user experience.
- Dark mode toggle for an improved viewing experience.

## Development Process

### Project Setup

1. **Set Up the Project Directory**:
   - Create a new directory for the project.
   - Navigate to your project directory in the terminal.

2. **Initialize the Project**:
   - Initialize a new React project:
     npx create-react-app wordle-clone

3. **Install Dependencies**:
   - Navigate to the project directory:
     cd wordle-clone

   - Install TailwindCSS (if required):
     npm install tailwindcss
    

### Development Steps

1. **Game Logic**:
   - Define a hardcoded list of 5-letter words.
   - Implement a function to check if a guessed word matches the target word.
   - Create a feedback system that returns color codes:
     - Green for correct letters in the correct position.
     - Yellow for correct letters in the wrong position.
     - Gray for incorrect letters.

2. **Guess Validation**:
   - Ensure that only valid 5-letter words can be submitted.

3. **User Interface (UI/UX)**:
   - Design a grid to display previous guesses with color-coded feedback.
   - Implement messages to indicate win or loss.
   - Add a "New Game" button to reset the game.

4. **State Management**:
   - Track the guessed words, remaining attempts, and game status.
   - Update the UI based on changes in the game state.

5. **Styling**:
   - Choose a styling approach (TailwindCSS or custom CSS).
   - Implement styles for the grid, game status messages, and controls.
   - Ensure the design is responsive and works on both desktop and mobile.

6. **Optional Enhancements**:
   - Add animations for letter feedback.
   - Implement a dark mode toggle.

### Deploying the Game

1. **Prepare for Deployment**:
   - Build the project for production:
     npm run build
     

2. **Deploy**:
   - Choose a platform (Vercel, Netlify) and follow their deployment instructions to deploy your game.

## How to Play

1. Start by guessing any 5-letter word.
2. After each guess, feedback is given with color-coded letters.
3. You have 6 attempts to guess the correct word.
4. The game will indicate whether you win or lose.
5. Click the "New Game" button to start over.

## Future Enhancements

- Additional word lists.
- Difficulty levels (e.g., 6-letter words, 7-letter words).
- Multiplayer mode to compete with friends.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
