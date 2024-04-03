document.addEventListener('DOMContentLoaded', () => {
  const choices = ['rock', 'paper', 'scissors'];
  const buttons = document.querySelectorAll('.choice');
  const userChoiceElement = document.getElementById('user-choice');
  const computerChoiceElement = document.getElementById('computer-choice');
  const resultTextElement = document.getElementById('result-text');
  const userScoreElement = document.getElementById('user-score');
  const computerScoreElement = document.getElementById('computer-score');
  const body = document.body;

  let userScore = 0;
  let computerScore = 0;

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const userChoice = button.id;
          const computerChoice = choices[Math.floor(Math.random() * choices.length)];
          const result = getResult(userChoice, computerChoice);

          userChoiceElement.textContent = `You chose: ${capitalize(userChoice)}`;
          computerChoiceElement.textContent = `Computer chose: ${capitalize(computerChoice)}`;
          resultTextElement.textContent = result;

          // Remove any existing animation classes
          body.classList.remove('win', 'lose');

          if (result === 'You win!') {
              userScore++;
              body.classList.add('win');
          } else if (result === 'You lose!') {
              computerScore++;
              body.classList.add('lose');
          }

          userScoreElement.textContent = `You: ${userScore}`;
          computerScoreElement.textContent = `Computer: ${computerScore}`;

          // Remove animation classes after animation ends
          setTimeout(() => {
              body.classList.remove('win', 'lose');
          }, 1500); // Same as the animation duration
      });
  });

  function getResult(userChoice, computerChoice) {
      if (userChoice === computerChoice) {
          return "It's a draw!";
      }

      if (
          (userChoice === 'rock' && computerChoice === 'scissors') ||
          (userChoice === 'paper' && computerChoice === 'rock') ||
          (userChoice === 'scissors' && computerChoice === 'paper')
      ) {
          return 'You win!';
      } else {
          return 'You lose!';
      }
  }

  function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
  }
});
