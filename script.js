const countries = [
    { name: "Brasil", silhouette: "https://th.bing.com/th/id/OIP.2kLWjnxqROfkhvMLjzfHaAAAAA?rs=1&pid=ImgDetMain" },
    { name: "Argentina", silhouette: "https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/75/9d/7e/shutterstock-766730110.jpg" },
    // adicionar outros países aqui...
];

const historicalFigures = [
    { name: "Mahatma Gandhi", silhouette: "https://1.bp.blogspot.com/-_N9DYP7zAyw/TljaabmHKYI/AAAAAAAAKuk/MEaVUv5Dw-w/s1600/mahatma-gandhi-11.jpg", answers: ["Gandhi"] },
    { name: "Albert Einstein", silhouette: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Albert_Einstein_Head.jpg/512px-Albert_Einstein_Head.jpg", answers: ["Einstein"] },
    // adicionar outras personalidades históricas aqui...
];

let currentIndex = 0;
let score = 0;
let lives = 5;
let gameMode = 'countries';
let playerName = '';

function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

const showRankingButton = document.getElementById('show-ranking');
const rankingList = document.getElementById('ranking-list');
const rankingDiv = document.getElementById('ranking');
const submitButton = document.getElementById('submit');
const proceedButton = document.getElementById('proceed');
const restartButton = document.getElementById('restart');
const answerInput = document.getElementById('answer');
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives');
const messageDisplay = document.getElementById('message');
const silhouetteImage = document.getElementById('silhouette');

document.getElementById('mode-countries').addEventListener('click', () => {
    gameMode = 'countries';
    currentIndex = 0;
    startGame();
});

document.getElementById('mode-historical').addEventListener('click', () => {
    gameMode = 'historical';
    currentIndex = 0;
    startGame();
});

function startGame() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    loadNext();
}

function loadNext() {
    let question;
    if (gameMode === 'countries') {
        question = countries[currentIndex];
    } else if (gameMode === 'historical') {
        question = historicalFigures[currentIndex];
    }

    silhouetteImage.src = question.silhouette;
    messageDisplay.textContent = `Qual é o nome do ${gameMode === 'countries' ? 'país' : 'personagem histórico'}?`;
    answerInput.value = '';
}

function checkAnswer() {
    const answer = normalizarTexto(answerInput.value);
    let correctAnswer = false;

    if (gameMode === 'countries') {
        correctAnswer = normalizarTexto(countries[currentIndex].name) === answer;
    } else if (gameMode === 'historical') {
        correctAnswer = historicalFigures[currentIndex].answers.some(a => normalizarTexto(a) === answer);
    }

    if (correctAnswer) {
        score++;
        scoreDisplay.textContent = `Pontuação: ${score}`;
        messageDisplay.textContent = `Resposta correta!`;
    } else {
        lives--;
        livesDisplay.textContent = `Vidas: ${lives} ❤️`;
        messageDisplay.textContent = `Resposta errada!`;
    }

    currentIndex++;

    if (currentIndex < (gameMode === 'countries' ? countries.length : historicalFigures.length)) {
        setTimeout(() => loadNext(), 3000); // Aguarda 3 segundos antes de carregar a próxima
    } else {
        setTimeout(finishGame, 3000); // Aguarda 3 segundos antes de finalizar o jogo
    }
}

answerInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

submitButton.addEventListener('click', () => {
    checkAnswer();
});

restartButton.addEventListener('click', () => {
    score = 0;
    lives = 5;
    scoreDisplay.textContent = `Pontuação: ${score}`;
    livesDisplay.textContent = `Vidas: ${lives} ❤️`;
    currentIndex = 0;
    loadNext();
    restartButton.style.display = 'none';
});

function finishGame() {
    saveScore();
    messageDisplay.textContent = `Fim de jogo, ${playerName}! Sua pontuação final foi ${score}.`;
    restartButton.style.display = 'block';
}

function saveScore() {
    const playerScores = JSON.parse(localStorage.getItem('playerScores')) || [];
    playerScores.push({ name: playerName, score: score });
    localStorage.setItem('playerScores', JSON.stringify(playerScores));
}

function showRanking() {
    rankingList.innerHTML = '';
    const playerScores = JSON.parse(localStorage.getItem('playerScores')) || [];
    playerScores.sort((a, b) => b.score - a.score); // Ordena pela pontuação
    playerScores.forEach(player => {
        const li = document.createElement('li');
        li.textContent = `${player.name}: ${player.score}`;
        rankingList.appendChild(li);
    });
    rankingDiv.style.display = 'block'; // Exibe o ranking
}

showRankingButton.addEventListener('click', () => {
    showRanking();
});

// Evento para limpar o ranking
document.getElementById('clear-ranking').addEventListener('click', () => {
    localStorage.removeItem('playerScores');
    rankingList.innerHTML = '';
    alert("Ranking limpo com sucesso!");
});