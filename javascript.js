const gamePanel = document.querySelector('#gamePanel');
const game16 = document.querySelector('.size16');
const game64 = document.querySelector('.size64');
const game256 = document.querySelector('.size256');

game16.addEventListener('click', () => {
    createGameGrid(16);
});

game64.addEventListener('click', () => {
    createGameGrid(64);
});

game256.addEventListener('click', () => {
    createGameGrid(256);
});

function createGameGrid (n) {
    clearGameGrid();
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

