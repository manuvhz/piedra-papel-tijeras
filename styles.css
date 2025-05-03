* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
    padding: 20px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #2c3e50;
}

.game-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 10px;
}

.rounds-selector {
    display: flex;
    align-items: center;
    gap: 10px;
}

.rounds-selector select {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ddd;
}

button {
    padding: 10px 15px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #2980b9;
}

.scoreboard {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
    text-align: center;
}

.score {
    background-color: #ecf0f1;
    padding: 15px;
    border-radius: 8px;
    width: 30%;
}

.score h2 {
    margin-bottom: 10px;
    color: #7f8c8d;
}

.score span {
    font-size: 24px;
    font-weight: bold;
    color: #2c3e50;
}

.choices {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 30px 0;
    flex-wrap: wrap;
}

.choice-btn {
    font-size: 24px;
    padding: 15px 25px;
    min-width: 120px;
    background-color: #2ecc71;
}

.choice-btn:hover {
    background-color: #27ae60;
}

.result-container {
    text-align: center;
    margin: 20px 0;
}

#round-result {
    font-size: 20px;
    margin-bottom: 20px;
    min-height: 30px;
    color: #2c3e50;
}

.selections {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 20px 0;
}

.selection-box {
    text-align: center;
}

.selection-box h3 {
    margin-bottom: 10px;
    color: #7f8c8d;
}

.selection-icon {
    font-size: 60px;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ecf0f1;
    border-radius: 50%;
    margin: 0 auto;
}

#game-result {
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0;
    min-height: 36px;
    color: #e74c3c;
}

.hidden {
    display: none;
}

#new-game-btn {
    display: block;
    margin: 20px auto 0;
    background-color: #e74c3c;
}

#new-game-btn:hover {
    background-color: #c0392b;
}

/* Estilos responsivos */
@media (max-width: 600px) {
    .choices {
        flex-direction: column;
        align-items: center;
    }
    
    .choice-btn {
        width: 100%;
    }
    
    .game-controls {
        flex-direction: column;
        align-items: stretch;
    }
    
    .scoreboard {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    
    .score {
        width: 100%;
    }
}

/* Animaciones */
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

@keyframes celebrate {
    0% { transform: rotate(0deg) scale(1); }
    25% { transform: rotate(5deg) scale(1.1); }
    50% { transform: rotate(-5deg) scale(1.2); }
    75% { transform: rotate(5deg) scale(1.1); }
    100% { transform: rotate(0deg) scale(1); }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.choice-btn:active {
    animation: bounce 0.3s ease;
}

.selection-icon {
    transition: all 0.3s ease;
}

.player-win .selection-icon {
    animation: celebrate 0.5s ease 2, pulse 0.5s ease;
    color: #2ecc71;
}

.computer-win .selection-icon {
    animation: shake 0.5s ease;
    color: #e74c3c;
}

.tie .selection-icon {
    animation: pulse 0.5s ease;
    color: #3498db;
}

.player-selection {
    animation: bounce 0.5s ease;
}

.computer-selection {
    animation: bounce 0.5s ease 0.1s;
}

.result-animation {
    animation: fadeIn 0.5s ease, pulse 0.5s ease 0.5s;
}

/* Efecto de hover mejorado */
.choice-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.choice-btn {
    transition: all 0.3s ease;
    transform-style: preserve-3d;
}

/* Efecto de confeti para victoria */
.confetti {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #f00;
    opacity: 0;
    animation: confetti-fall 3s ease-in-out forwards;
}

@keyframes confetti-fall {
    0% {
        transform: translateY(-100px) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}
