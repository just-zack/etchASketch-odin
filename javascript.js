const gamePanel = document.querySelector('#gamePanel');

function createGameGrid (n) {
    clearGameGrid;
    for (let i =0; i < n; i++) {
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('gameDiv');
        gamePanel.appendChild(gameDiv);
        gameDiv.style.minWidth = (100/Math.sqrt(n)) +"%"
        gameDiv.style.minHeight = (100/Math.sqrt(n)) +"%"
    }
};

function clearGameGrid () {
    gamePanel.innerHTML = ""
;}

createGameGrid(16);

