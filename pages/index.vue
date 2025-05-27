<template>
  <div class="game-container">
    <div class="game-header">
      <h1 class="game-title">🎮 Piedra, Papel o Tijera</h1>
      <div class="score-board">
        <div class="score-item">
          <span class="score-label">Jugador</span>
          <span class="score-value">{{ playerScore }}</span>
        </div>
        <div class="score-item">
          <span class="score-label">Máquina</span>
          <span class="score-value">{{ computerScore }}</span>
        </div>
      </div>
    </div>

    <div class="game-area">
      <!-- Área de selecciones -->
      <div class="choices-display">
        <div class="choice-container">
          <h3>Tu elección</h3>
          <div class="choice-circle" :class="{ 'animate-bounce': isPlayerAnimating }">
            <span class="choice-emoji">{{ playerChoice ? getEmoji(playerChoice) : '❓' }}</span>
          </div>
        </div>
        
        <div class="vs-divider">
          <span>VS</span>
        </div>
        
        <div class="choice-container">
          <h3>Máquina</h3>
          <div class="choice-circle" :class="{ 'animate-spin': isComputerThinking, 'animate-bounce': isComputerAnimating }">
            <span class="choice-emoji">{{ computerChoice ? getEmoji(computerChoice) : '🤖' }}</span>
          </div>
        </div>
      </div>

      <!-- Resultado -->
      <div class="result-area" v-if="gameResult">
        <div class="result-message" :class="getResultClass()">
          {{ gameResult }}
        </div>
      </div>

      <!-- Botones de opciones -->
      <div class="options-container">
        <button 
          v-for="option in options" 
          :key="option.name"
          class="option-button"
          :disabled="gameInProgress"
          :class="{ 'selected': playerChoice === option.name }"
          @click="playGame(option.name)"
        >
          <span class="option-emoji">{{ option.emoji }}</span>
          <span class="option-name">{{ option.label }}</span>
        </button>
      </div>

      <!-- Botón de reinicio -->
      <div class="game-controls">
        <button 
          class="reset-button"
          @click="resetGame"
          v-if="gameResult"
        >
          🔄 Jugar de nuevo
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Configuración del juego
const options = [
  { name: 'rock', emoji: '🪨', label: 'Piedra' },
  { name: 'paper', emoji: '📄', label: 'Papel' },
  { name: 'scissors', emoji: '✂️', label: 'Tijera' }
]

// Estado del juego
const playerChoice = ref(null)
const computerChoice = ref(null)
const gameResult = ref('')
const playerScore = ref(0)
const computerScore = ref(0)
const gameInProgress = ref(false)
const isPlayerAnimating = ref(false)
const isComputerAnimating = ref(false)
const isComputerThinking = ref(false)

// Función para obtener emoji de la opción
const getEmoji = (choice) => {
  const option = options.find(opt => opt.name === choice)
  return option ? option.emoji : '❓'
}

// Función para obtener clase CSS del resultado
const getResultClass = () => {
  if (gameResult.value.includes('¡Ganaste!')) return 'result-win'
  if (gameResult.value.includes('¡Perdiste!')) return 'result-lose'
  return 'result-tie'
}

// Función principal del juego
const playGame = async (playerMove) => {
  if (gameInProgress.value) return
  
  gameInProgress.value = true
  playerChoice.value = playerMove
  computerChoice.value = null
  gameResult.value = ''
  
  // Animación del jugador
  isPlayerAnimating.value = true
  setTimeout(() => {
    isPlayerAnimating.value = false
  }, 600)
  
  // Simular pensamiento de la máquina
  isComputerThinking.value = true
  
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Generar elección de la máquina
  const computerMove = options[Math.floor(Math.random() * options.length)].name
  computerChoice.value = computerMove
  isComputerThinking.value = false
  
  // Animación de la máquina
  isComputerAnimating.value = true
  setTimeout(() => {
    isComputerAnimating.value = false
  }, 600)
  
  // Determinar ganador
  const result = determineWinner(playerMove, computerMove)
  
  setTimeout(() => {
    gameResult.value = result
    updateScore(result)
    gameInProgress.value = false
  }, 800)
}

// Función para determinar el ganador
const determineWinner = (player, computer) => {
  if (player === computer) {
    return '🤝 ¡Empate!'
  }
  
  const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  }
  
  if (winConditions[player] === computer) {
    return '🎉 ¡Ganaste!'
  } else {
    return '😢 ¡Perdiste!'
  }
}

// Función para actualizar puntuación
const updateScore = (result) => {
  if (result.includes('¡Ganaste!')) {
    playerScore.value++
  } else if (result.includes('¡Perdiste!')) {
    computerScore.value++
  }
}

// Función para reiniciar el juego
const resetGame = () => {
  playerChoice.value = null
  computerChoice.value = null
  gameResult.value = ''
  gameInProgress.value = false
  isPlayerAnimating.value = false
  isComputerAnimating.value = false
  isComputerThinking.value = false
}

// Función para reiniciar puntuación
const resetScore = () => {
  playerScore.value = 0
  computerScore.value = 0
  resetGame()
}
</script>

<style scoped>
.game-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.game-header {
  text-align: center;
  margin-bottom: 40px;
}

.game-title {
  font-size: 3rem;
  color: white;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  animation: titlePulse 2s ease-in-out infinite alternate;
}

@keyframes titlePulse {
  from { transform: scale(1); }
  to { transform: scale(1.05); }
}

.score-board {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 20px;
}

.score-item {
  background: rgba(255,255,255,0.2);
  padding: 15px 25px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.3);
}

.score-label {
  display: block;
  color: white;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.score-value {
  display: block;
  color: white;
  font-size: 2rem;
  font-weight: bold;
}

.game-area {
  max-width: 800px;
  margin: 0 auto;
}

.choices-display {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
}

.choice-container {
  text-align: center;
}

.choice-container h3 {
  color: white;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.choice-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border: 3px solid rgba(255,255,255,0.3);
  transition: all 0.3s ease;
}

.choice-circle:hover {
  transform: scale(1.1);
  background: rgba(255,255,255,0.3);
}

.choice-emoji {
  font-size: 3rem;
}

.vs-divider {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 20px;
}

.result-area {
  text-align: center;
  margin: 30px 0;
}

.result-message {
  font-size: 2rem;
  font-weight: bold;
  padding: 20px;
  border-radius: 15px;
  animation: resultPop 0.5s ease-out;
}

.result-win {
  background: rgba(76, 175, 80, 0.8);
  color: white;
}

.result-lose {
  background: rgba(244, 67, 54, 0.8);
  color: white;
}

.result-tie {
  background: rgba(255, 193, 7, 0.8);
  color: white;
}

@keyframes resultPop {
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.options-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 40px 0;
  flex-wrap: wrap;
}

.option-button {
  background: rgba(255,255,255,0.2);
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 20px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  min-width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.option-button:hover:not(:disabled) {
  background: rgba(255,255,255,0.3);
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.option-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.option-button.selected {
  background: rgba(76, 175, 80, 0.6);
  border-color: rgba(76, 175, 80, 0.8);
}

.option-emoji {
  font-size: 2.5rem;
}

.option-name {
  color: white;
  font-size: 1rem;
  font-weight: bold;
}

.game-controls {
  text-align: center;
  margin-top: 30px;
}

.reset-button {
  background: rgba(255,255,255,0.2);
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 15px;
  padding: 15px 30px;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.reset-button:hover {
  background: rgba(255,255,255,0.3);
  transform: translateY(-2px);
}

/* Animaciones */
@keyframes bounce {
  0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
  40%, 43% { transform: translate3d(0,-30px,0); }
  70% { transform: translate3d(0,-15px,0); }
  90% { transform: translate3d(0,-4px,0); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.animate-bounce {
  animation: bounce 0.6s ease-in-out;
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Responsive */
@media (max-width: 768px) {
  .game-title {
    font-size: 2rem;
  }
  
  .choices-display {
    flex-direction: column;
    gap: 30px;
  }
  
  .vs-divider {
    order: 2;
  }
  
  .score-board {
    gap: 20px;
  }
  
  .options-container {
    gap: 15px;
  }
  
  .option-button {
    min-width: 100px;
    padding: 15px;
  }
  
  .choice-circle {
    width: 100px;
    height: 100px;
  }
  
  .choice-emoji {
    font-size: 2.5rem;
  }
  
  .option-emoji {
    font-size: 2rem;
  }
}
</style>