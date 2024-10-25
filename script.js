const countries = [
    { name: "Brasil", silhouette: "https://th.bing.com/th/id/OIP.2kLWjnxqROfkhvMLjzfHaAAAAA?rs=1&pid=ImgDetMain" },
    { name: "Argentina", silhouette: "https://img.freepik.com/premium-vector/argentina-map-silhouette-isolated-white-background_650065-142.jpg?w=2000" },
    { name: "Canadá", silhouette: "https://th.bing.com/th/id/OIP.fTcNIpjkAPU0sictIM7v0wHaHa?w=800&h=800&rs=1&pid=ImgDetMain" },
    { name: "França", silhouette: "https://img.freepik.com/vector-premium/mapa-francia-sobre-fondo-blanco-ilustracion-vectorial_511393-3014.jpg?w=2000" },
    { name: "Alemanha", silhouette: "https://th.bing.com/th/id/OIP.EpYgYYJZDFM2SB2O1e4DAgHaFj?rs=1&pid=ImgDetMain" },
    { name: "Espanha", silhouette: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSun9R_VHvHY90m7tld2ekEdMcbiAN4vB6fsw&s" },
    { name: "Portugal", silhouette: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsMI4TQnjfKduY0-bie86kc21BYCCGgdmdlA&s" },
    { name: "Suécia", silhouette: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLllQQLEJFDS9LwAmz6RHMD_jLuC3_tYCUYw&s" },
    { name: "Noruega", silhouette: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7KIAjoifCcLhJQZGNMMbHn0DNo8ujITECA&s" },
    { name: "Finlândia", silhouette: "https://img.freepik.com/vetores-premium/mapa-da-finlandia-silhueta-negra-altamente-detalhada-isolada-no-fundo-branco_601298-14145.jpg" },
];

const historicalFigures = [
    { name: "Mahatma Gandhi", country: "Índia", silhouette: "https://1.bp.blogspot.com/-_N9DYP7zAyw/TljaabmHKYI/AAAAAAAAKuk/MEaVUv5Dw-w/s1600/mahatma-gandhi-11.jpg" },
    { name: "Albert Einstein", country: "Alemanha", silhouette: "https://s4.static.brasilescola.uol.com.br/be/conteudo/images/2-albert-einstein.jpg" },
];

let currentIndex = 0;
let score = 0;
let lives = 3;
let gameMode = 'countries';

const countrySilhouette = document.getElementById('country-silhouette');
const historicalFigure = document.getElementById('historical-figure');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const proceedButton = document.getElementById('proceed');
const restartButton = document.getElementById('restart');
const message = document.getElementById('message');
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives');

const modeCountriesButton = document.getElementById('mode-countries');
const modeHistoricalButton = document.getElementById('mode-historical');
const startButton = document.getElementById('start');
const menu = document.getElementById('menu');

modeCountriesButton.addEventListener('click', () => {
    gameMode = 'countries';
    currentIndex = 0;
    startButton.style.display = 'block';
});

modeHistoricalButton.addEventListener('click', () => {
    gameMode = 'historical';
    currentIndex = 0;
    startButton.style.display = 'block';
});

startButton.addEventListener('click', () => {
    menu.style.display = 'none';
    document.getElementById('game').style.display = 'block';
    loadNext();
});

function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function loadNext() {
    resetGameUI();
    
    if (gameMode === 'countries') {
        loadCountry();
    } else {
        loadHistoricalFigure();
    }
}

function loadCountry() {
    const currentCountry = countries[currentIndex];
    countrySilhouette.src = currentCountry.silhouette;
    countrySilhouette.style.display = 'block';
    historicalFigure.style.display = 'none';
}

function loadHistoricalFigure() {
    const currentFigure = historicalFigures[currentIndex];
    historicalFigure.src = currentFigure.silhouette;
    historicalFigure.style.display = 'block';
    countrySilhouette.style.display = 'none';
}

function resetGameUI() {
    message.textContent = '';
    answerInput.value = '';
    answerInput.disabled = false;
    submitButton.disabled = false;
    proceedButton.style.display = 'none';
    restartButton.style.display = 'none';
    scoreDisplay.textContent = `Pontuação: ${score}`;
    livesDisplay.textContent = `Vidas: ${lives} ❤️`;
}

submitButton.addEventListener('click', () => {
    let answer = answerInput.value.trim();
    let correctAnswer = gameMode === 'countries' ? countries[currentIndex].name : historicalFigures[currentIndex].name;

    if (normalizeString(answer) === normalizeString(correctAnswer)) {
        score++;
        message.textContent = "Correto!";
        scoreDisplay.textContent = `Pontuação: ${score}`;
        proceedButton.style.display = 'block';
        answerInput.disabled = true;
        submitButton.disabled = true;
    } else {
        lives--;
        message.textContent = `Incorreto! A resposta correta era ${correctAnswer}.`;
        livesDisplay.textContent = `Vidas: ${lives} ❤️`;
        answerInput.disabled = true;
        submitButton.disabled = true;

        if (lives <= 0) {
            message.textContent += " Game Over!";
            submitButton.disabled = true;
            restartButton.style.display = 'block';
        } else {
            proceedButton.style.display = 'block';
        }
    }
});

proceedButton.addEventListener('click', () => {
    currentIndex++;
    if ((gameMode === 'countries' && currentIndex < countries.length) || (gameMode === 'historical' && currentIndex < historicalFigures.length)) {
        loadNext();
        answerInput.focus();
    } else {
        message.textContent = "Você completou todas as silhuetas!";
        proceedButton.style.display = 'none';
        restartButton.style.display = 'block';
    }
});

restartButton.addEventListener('click', () => {
    score = 0;
    lives = 3;
    currentIndex = 0;
    restartButton.style.display = 'none';
    menu.style.display = 'block';
    document.getElementById('game').style.display = 'none';
});
