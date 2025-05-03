document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const choiceButtons = document.querySelectorAll('.choice-btn');
    const playerScoreElement = document.getElementById('player-score');
    const computerScoreElement = document.getElementById('computer-score');
    const tiesScoreElement = document.getElementById('ties-score');
    const roundResultElement = document.getElementById('round-result');
    const gameResultElement = document.getElementById('game-result');
    const playerSelectionElement = document.getElementById('player-selection');
    const computerSelectionElement = document.getElementById('computer-selection');
    const resetButton = document.getElementById('reset-btn');
    const newGameButton = document.getElementById('new-game-btn');
    const roundsSelector = document.getElementById('rounds');
    
    // Variables del juego
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;
    let roundsToWin = 3;
    let gameActive = true;
    
    // Inicializar el juego
    initGame();
    
    // Event Listeners
    choiceButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (gameActive) {
                const playerChoice = button.dataset.choice;
                playRound(playerChoice);
            }
        });
    });
    
    resetButton.addEventListener('click', resetScores);
    newGameButton.addEventListener('click', initGame);
    roundsSelector.addEventListener('change', () => {
        roundsToWin = Math.ceil(parseInt(roundsSelector.value) / 2);
        initGame();
    });
    
    // Funciones del juego
    function initGame() {
        playerScore = 0;
        computerScore = 0;
        ties = 0;
        gameActive = true;
        
        updateScores();
        roundResultElement.textContent = 'Elige una opción para comenzar';
        gameResultElement.textContent = '';
        playerSelectionElement.textContent = '?';
        computerSelectionElement.textContent = '?';
        newGameButton.classList.add('hidden');
    }
    
    function resetScores() {
        playerScore = 0;
        computerScore = 0;
        ties = 0;
        updateScores();
        roundResultElement.textContent = 'Marcador reiniciado. Elige una opción para jugar.';
        gameResultElement.textContent = '';
        playerSelectionElement.textContent = '?';
        computerSelectionElement.textContent = '?';
        gameActive = true;
        newGameButton.classList.add('hidden');
    }
    
    function playRound(playerChoice) {
        if (!gameActive) return;
        
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        
        // Actualizar selecciones visuales
        playerSelectionElement.textContent = getChoiceEmoji(playerChoice);
        computerSelectionElement.textContent = getChoiceEmoji(computerChoice);
        
        // Actualizar marcador y resultado
        switch (result) {
            case 'win':
                playerScore++;
                roundResultElement.textContent = `¡Ganaste esta ronda! ${getChoiceName(playerChoice)} vence a ${getChoiceName(computerChoice)}.`;
                break;
            case 'lose':
                computerScore++;
                roundResultElement.textContent = `Perdiste esta ronda. ${getChoiceName(computerChoice)} vence a ${getChoiceName(playerChoice)}.`;
                break;
            case 'tie':
                ties++;
                roundResultElement.textContent = '¡Empate! Ambos eligieron lo mismo.';
                break;
        }
        
        updateScores();
        
        // Verificar si alguien ganó el juego
        checkGameWinner();
    }
    
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }
    
    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'tie';
        }
        
        if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'win';
        }
        
        return 'lose';
    }
    
    function updateScores() {
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
        tiesScoreElement.textContent = ties;
    }
    
    function checkGameWinner() {
        if (playerScore >= roundsToWin || computerScore >= roundsToWin) {
            gameActive = false;
            
            if (playerScore > computerScore) {
                gameResultElement.textContent = `¡Ganaste el juego ${playerScore}-${computerScore}!`;
                gameResultElement.style.color = '#2ecc71';
            } else {
                gameResultElement.textContent = `Perdiste el juego ${computerScore}-${playerScore}.`;
                gameResultElement.style.color = '#e74c3c';
            }
            
            newGameButton.classList.remove('hidden');
        }
    }
    
    function getChoiceEmoji(choice) {
        switch (choice) {
            case 'rock': return '✊';
            case 'paper': return '✋';
            case 'scissors': return '✌️';
            default: return '?';
        }
    }
    
    function getChoiceName(choice) {
        switch (choice) {
            case 'rock': return 'Piedra';
            case 'paper': return 'Papel';
            case 'scissors': return 'Tijeras';
            default: return '';
        }
    }
 function playRound(playerChoice) {
    if (!gameActive) return;
    
    // Deshabilitar botones temporalmente durante la animación
    choiceButtons.forEach(btn => btn.disabled = true);
    
    // Animación de selección del jugador
    const playerBtn = document.querySelector(`.choice-btn[data-choice="${playerChoice}"]`);
    playerBtn.classList.add('active');
    
    setTimeout(() => {
        playerBtn.classList.remove('active');
        
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        
        // Actualizar selecciones visuales con animaciones
        playerSelectionElement.textContent = getChoiceEmoji(playerChoice);
        computerSelectionElement.textContent = getChoiceEmoji(computerChoice);
        playerSelectionElement.classList.add('player-selection');
        computerSelectionElement.classList.add('computer-selection');
        
        // Aplicar clase de resultado al contenedor
        const resultContainer = document.querySelector('.result-container');
        resultContainer.classList.remove('player-win', 'computer-win', 'tie');
        
        // Actualizar marcador y resultado
        switch (result) {
            case 'win':
                playerScore++;
                roundResultElement.textContent = `¡Ganaste esta ronda! ${getChoiceName(playerChoice)} vence a ${getChoiceName(computerChoice)}.`;
                resultContainer.classList.add('player-win');
                createConfetti();
                break;
            case 'lose':
                computerScore++;
                roundResultElement.textContent = `Perdiste esta ronda. ${getChoiceName(computerChoice)} vence a ${getChoiceName(playerChoice)}.`;
                resultContainer.classList.add('computer-win');
                break;
            case 'tie':
                ties++;
                roundResultElement.textContent = '¡Empate! Ambos eligieron lo mismo.';
                resultContainer.classList.add('tie');
                break;
        }
        
        roundResultElement.classList.add('result-animation');
        setTimeout(() => {
            roundResultElement.classList.remove('result-animation');
        }, 1000);
        
        updateScores();
        
        // Verificar si alguien ganó el juego
        checkGameWinner();
        
        // Habilitar botones de nuevo
        setTimeout(() => {
            choiceButtons.forEach(btn => btn.disabled = false);
            playerSelectionElement.classList.remove('player-selection');
            computerSelectionElement.classList.remove('computer-selection');
        }, 1000);
        
    }, 300);
}

// Nueva función para crear efecto de confeti
function createConfetti() {
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
        confetti.style.animationDelay = `${Math.random() * 0.5}s`;
        
        container.appendChild(confetti);
        
        // Eliminar el confeti después de la animación
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Mantener el resto de funciones igual
// ... código anterior ...
});
