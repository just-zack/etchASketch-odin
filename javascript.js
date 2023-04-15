const gamePanel = document.querySelector('#gamePanel');
const btnGame64 = document.querySelector('.size64');
const btnGame256 = document.querySelector('.size256');
const btnGame576 = document.querySelector('.size576');
const btnReset = document.querySelector('.reset');
const btnRandomSize = document.querySelector('.random');

btnGame64.addEventListener('click', () => {
    createGameGrid(64);
});

btnGame256.addEventListener('click', () => {
    createGameGrid(256);
});

btnGame576.addEventListener('click', () => {
    createGameGrid(576);
});

btnRandomSize.addEventListener('click', () => {
    let n = prompt ("Please enter a number between 4 and 100");
    if (typeof Number(n) === "number") {
        createGameGrid(n);
    } else { alert("Thats not a number between 4 and 100")}
});

btnReset.addEventListener('click', () => {
    resetGameGridColor();
});

function createGameGrid (n) {
    clearGameGrid();
    for (let i =0; i < n; i++) {
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('gameDiv');
        gamePanel.appendChild(gameDiv);
        gameDiv.style.minWidth = (100/Math.sqrt(n)) +"%";
        gameDiv.style.minHeight = (100/Math.sqrt(n)) +"%";
        convertColor();
    }
};

function clearGameGrid () {
    gamePanel.innerHTML = ""
;}

function resetGameGridColor () {
    const gameDiv = document.querySelectorAll('.gameDiv');
    gameDiv.forEach((div) => {
            div.style.backgroundColor = "antiquewhite";
        })
}

function convertColor () {
    const gameDiv = document.querySelectorAll('.gameDiv');
    gameDiv.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "black";
        })
    });
}

createGameGrid (64);
convertColor()
