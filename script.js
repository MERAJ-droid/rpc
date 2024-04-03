document.addEventListener('DOMContentLoaded', () => {
  const choices = ['rock', 'paper', 'scissors'];
  const buttons = document.querySelectorAll('.choice');
  const userChoiceElement = document.getElementById('user-choice');
  const computerChoiceElement = document.getElementById('computer-choice');
  const resultTextElement = document.getElementById('result-text');

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const userChoice = button.id;
          const computerChoice = choices[Math.floor(Math.random() * choices.length)];
          const result = getResult(userChoice, computerChoice);

          userChoiceElement.textContent = `You chose: ${userChoice}`;
          computerChoiceElement.textContent = `Computer chose: ${computerChoice}`;
          resultTextElement.textContent = result;
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
});
