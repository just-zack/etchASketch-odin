const gamePanel = document.querySelector('#gamePanel');

function createGameGrid (n) {
    const gamePanel = document.querySelector('#gamePanel');
    for (let i =0; i < n; i++) {
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('gameDiv');
        gamePanel.appendChild(gameDiv);
    }
};
createGameGrid(16);