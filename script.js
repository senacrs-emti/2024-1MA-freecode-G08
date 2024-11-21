const countries = [
    { name: "Brasil", silhouette: "https://img.freepik.com/vetores-premium/silhueta-do-mapa-do-brasil-isolada-no-fundo-branco_650065-74.jpg?semt=ais_hybrid" },
    { name: "França", silhouette: "https://img.freepik.com/vetores-premium/silhueta-negra-do-pais-da-franca-mapa-ilustracao-vetorial_628809-946.jpg" },
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
const submitButton = document.getElementById('submit');
const imageElement = document.getElementById('country-silhouette'); // Elemento para a imagem do país
const figureElement = document.getElementById('historical-figure'); // Elemento para a imagem da figura histórica
const answerInput = document.getElementById('answer');

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
    answerInput.value = '';

    if (gameMode === 'countries') {
        const currentCountry = countries[currentIndex];
        imageElement.src = currentCountry.silhouette;
        imageElement.style.display = 'block';
        figureElement.style.display = 'none';
    } else if (gameMode === 'historical') {
        const currentFigure = historicalFigures[currentIndex];
        figureElement.src = currentFigure.silhouette;
        figureElement.style.display = 'block';
        imageElement.style.display = 'none';
    }
}

function checkAnswer() {
    const answer = answerInput.value.trim();
    let correctAnswer = '';

    if (gameMode === 'countries') {
        correctAnswer = countries[currentIndex].name;
    } else if (gameMode === 'historical') {
        const figure = historicalFigures[currentIndex];
        correctAnswer = figure.answers ? figure.answers[0] : figure.name;
    }

    if (normalizarTexto(answer) === normalizarTexto(correctAnswer)) {
        alert('Resposta correta!');
        score += 10;
        document.getElementById('score').textContent = `Pontuação: ${score}`;
        nextQuestion();
    } else {
        alert('Resposta incorreta!');
        lives -= 1;
        document.getElementById('lives').textContent = `Vidas: ${lives}`;
        if (lives <= 0) {
            gameOver();
        }
    }
}

function nextQuestion() {
    currentIndex += 1;

    if (gameMode === 'countries' && currentIndex >= countries.length) {
        alert('Você completou todas as silhuetas de países!');
        endGame();
    } else if (gameMode === 'historical' && currentIndex >= historicalFigures.length) {
        alert('Você completou todas as personalidades históricas!');
        endGame();
    } else {
        loadNext();
    }
}

function gameOver() {
    alert('Fim de jogo!');
    document.getElementById('game').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    currentIndex = 0;
    score = 0;
    lives = 5;
}

function endGame() {
    alert('Parabéns! Você completou este modo de jogo.');
    document.getElementById('game').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    currentIndex = 0;
    score = 0;
    lives = 5;
}

submitButton.addEventListener('click', checkAnswer);

function showRanking() {
    rankingList.innerHTML = ''; // Limpa a lista do ranking
    const playerScores = JSON.parse(localStorage.getItem('playerScores')) || [];
    
    // Ordena os jogadores por pontuação em ordem decrescente
    playerScores.sort((a, b) => b.score - a.score);
    
    // Limita o ranking aos 10 primeiros
    const top10Players = playerScores.slice(0, 10);

    // Exibe os top 10 jogadores no ranking
    top10Players.forEach((player, index) => {
        const li = document.createElement('li');

        // Aplica classes baseadas na posição do jogador
        if (index === 0) {
            li.classList.add('gold');
        } else if (index === 1) {
            li.classList.add('silver');
        } else if (index === 2) {
            li.classList.add('bronze');
        }

        // Estrutura o texto no formato desejado
        li.textContent = `${index + 1}º lugar: ${player.name} | Pontos: ${player.score}`;
        rankingList.appendChild(li);
    });

    rankingDiv.style.display = 'block';
}

showRankingButton.addEventListener('click', toggleRanking);

function toggleRanking() {
    if (rankingDiv.style.display === 'block') {
        rankingDiv.style.display = 'none';
    } else {
        showRanking(); // Chama a função de exibir o ranking
    }
}

backToGameButton.addEventListener('click', () => {
    rankingDiv.style.display = 'none';
    document.getElementById('game').style.display = 'block';
});