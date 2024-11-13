const countries = [
    { name: "Brasil", silhouette: "https://th.bing.com/th/id/OIP.2kLWjnxqROfkhvMLjzfHaAAAAA?rs=1&pid=ImgDetMain" },
    // adicionar os outros países aqui...
];

const historicalFigures = [
    { name: "Mahatma Gandhi", country: "Índia", silhouette: "https://1.bp.blogspot.com/-_N9DYP7zAyw/TljaabmHKYI/AAAAAAAAKuk/MEaVUv5Dw-w/s1600/mahatma-gandhi-11.jpg", answers: ["Gandhi"] },
    // adicionar as outras personalidades aqui...
];

let currentIndex = 0;
let score = 0;
let lives = 5;
let gameMode = 'countries';
let playerName = '';

function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

const startButton = document.getElementById('start');
const showRankingButton = document.getElementById('show-ranking');
const rankingList = document.getElementById('ranking-list');
const rankingDiv = document.getElementById('ranking');
const backToGameButton = document.getElementById('back-to-game');

document.getElementById('mode-countries').addEventListener('click', () => {
    gameMode = 'countries';
    currentIndex = 0;
    startButton.style.display = 'block';
    showRankingButton.style.display = 'block';
});

document.getElementById('mode-historical').addEventListener('click', () => {
    gameMode = 'historical';
    currentIndex = 0;
    startButton.style.display = 'block';
    showRankingButton.style.display = 'block';
});

startButton.addEventListener('click', () => {
    playerName = document.getElementById('player-name').value.trim();
    if (!playerName) {
        alert("Por favor, insira seu nome.");
        return;
    }
    document.getElementById('menu').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    loadNext();
});

function loadNext() {
    // Implementar a lógica de carregamento da próxima questão aqui...
}

function showRanking() {
    rankingList.innerHTML = '';
    const playerScores = JSON.parse(localStorage.getItem('playerScores')) || [];
    playerScores.sort((a, b) => b.score - a.score);
    playerScores.forEach(player => {
        const li = document.createElement('li');
        li.textContent = `${player.name}: ${player.score}`;
        rankingList.appendChild(li);
    });
    rankingDiv.style.display = 'block';
}

showRankingButton.addEventListener('click', () => {
    showRanking();
});

backToGameButton.addEventListener('click', () => {
    rankingDiv.style.display = 'none';
    document.getElementById('game').style.display = 'block';
});