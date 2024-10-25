let secretCode = generateCode();
let attempts = [];

function generateCode() {
    return Array.from({length: 4}, () => Math.floor(Math.random() * 10)).join('');
}

function makeGuess() {
    const guess = document.getElementById('guessInput').value;
    if (guess.length !== 4) {
        alert('Insira um código de 4 dígitos!');
        return;
    }
    const result = checkGuess(guess);
    attempts.unshift({ guess, result });
    displayAttempts();
    document.getElementById('guessInput').value = '';
}

function checkGuess(guess) {
    let bulls = 0, cows = 0;
    for (let i = 0; i < 4; i++) {
        if (guess[i] === secretCode[i]) {
            bulls++;
        } else if (secretCode.includes(guess[i])) {
            cows++;
        }
    }
    return `${bulls} Bulls, ${cows} Cows`;
}

function displayAttempts() {
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = '';
    attempts.forEach(attempt => {
        const div = document.createElement('div');
        div.textContent = `Tentativa: ${attempt.guess} - Resultado: ${attempt.result}`;
        resultList.appendChild(div);
    });
}

function showCode() {
    alert(`O código é: ${secretCode}`);
}
