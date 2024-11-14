document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const resultText = document.getElementById('result-text');
    const resetButton = document.getElementById('reset');

    const choicesArray = ['rock', 'paper', 'scissors'];

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const userChoice = choice.id;
            const computerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
            const result = determineWinner(userChoice, computerChoice);
            displayResult(userChoice, computerChoice, result);
        });
    });

    resetButton.addEventListener('click', () => {
        resultText.textContent = '';
    });

    const determineWinner = (user, computer) => {
        if (user === computer) return 'draw';
        if ((user === 'rock' && computer === 'scissors') ||
            (user === 'paper' && computer === 'rock') ||
            (user === 'scissors' && computer === 'paper')) {
            return 'user';
        } else {
            return 'computer';
        }
    };

    const displayResult = (user, computer, result) => {
        if (result === 'draw') {
            resultText.textContent = `It's a draw! You both chose ${user}.`;
        } else if (result === 'user') {
            resultText.textContent = `You win! ${user} beats ${computer}.`;
        } else {
            resultText.textContent = `You lose! ${computer} beats ${user}.`;
        }
    };
});
