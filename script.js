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
    { name: "Holanda", silhouette: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNftqtybvwiPck2s_XCzAttxuiediVbsW-Lw&s" },
    { name: "Bélgica", silhouette: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFAoG2JS2dUVTS1BCW6okKNOYc_7ez1C2bAg&s" },
    { name: "Suíça", silhouette: "https://img.freepik.com/vetores-premium/mapa-de-silhueta-da-suica_721965-2028.jpg" },
    { name: "Áustria", silhouette: "https://img.freepik.com/vetores-premium/silhueta-negra-do-pais-da-austria-mapa-ilustracao-vetorial_628809-677.jpg" },
    { name: "República Tcheca", silhouette: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9C4SXRu9bR2VklBTq-uUXlyNA3vMw367Cng&s" },
    { name: "Hungria", silhouette: "https://img.freepik.com/vetores-premium/silhueta-preta-do-mapa-geografico-do-pais-da-hungria-facil-de-colorir_514344-1376.jpg" },
    { name: "Polônia", silhouette: "https://cdn-icons-png.flaticon.com/512/5866/5866581.png" },
    { name: "Japão", silhouette: "https://static.vecteezy.com/ti/vetor-gratis/p1/3127394-japan-map-silhouette-vector-illustration-sketch-vetor.jpg" },
    { name: "Índia", silhouette: "https://img.freepik.com/vetores-premium/mapa-da-silhueta-da-india-isolado-no-fundo-branco_650065-132.jpg" },
];

const historicalFigures = [
    { name: "Mahatma Gandhi", country: "Índia", silhouette: "https://1.bp.blogspot.com/-_N9DYP7zAyw/TljaabmHKYI/AAAAAAAAKuk/MEaVUv5Dw-w/s1600/mahatma-gandhi-11.jpg" },
    { name: "Albert Einstein", country: "Alemanha", silhouette: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_1921_by_Ferdinand_Schmutlzer_02.jpg/800px-Albert_Einstein_1921_by_Ferdinand_Schmutlzer_02.jpg" },
];

let currentCountryIndex = 0;
let score = 0;
let lives = 3;
let answered = false;
let gameMode = 'countries';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(countries);
shuffleArray(historicalFigures); // Embaralha as figuras históricas

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
    startButton.style.display = 'block';
});

modeHistoricalButton.addEventListener('click', () => {
    gameMode = 'historical';
    startButton.style.display = 'block';
});

startButton.addEventListener('click', () => {
    menu.style.display = 'none';
    document.getElementById('game').style.display = 'block';
    loadCountry();
});

function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function loadCountry() {
    const currentCountry = countries[currentCountryIndex];
    countrySilhouette.src = currentCountry.silhouette;
    countrySilhouette.style.display = 'block'; // Exibe a silhueta do país
    historicalFigure.style.display = 'none'; // Esconde a figura histórica
    message.textContent = '';
    answerInput.value = '';
    answerInput.disabled = false;
    submitButton.disabled = false;
    proceedButton.style.display = 'none';
    restartButton.style.display = 'none';
    scoreDisplay.textContent = `Pontuação: ${score}`;
    livesDisplay.textContent = `Vidas: ${lives}❤️`;
    answered = false;
}

function loadHistoricalFigure() {
    const currentFigure = historicalFigures[currentCountryIndex];
    historicalFigure.src = currentFigure.silhouette;
    historicalFigure.style.display = 'block'; // Mostra a imagem da figura histórica
    countrySilhouette.style.display = 'none'; // Esconde a silhueta do país
    message.textContent = '';
    answerInput.value = '';
    answerInput.disabled = false;
    submitButton.disabled = false;
    proceedButton.style.display = 'none';
    restartButton.style.display = 'none';
    scoreDisplay.textContent = `Pontuação: ${score}`;
    livesDisplay.textContent = `Vidas: ${lives}❤️`;
    answered = false;
}

submitButton.addEventListener('click', () => {
    let answer;
    if (gameMode === 'countries') {
        answer = normalizeString(answerInput.value.trim());
        const correctAnswer = normalizeString(countries[currentCountryIndex].name);
        if (answer === correctAnswer) {
            message.textContent = "Correto";
            message.style.color = "green";
            score++;
        } else {
            message.textContent = "ERROU NEWBA";
            message.style.color = "red";
            lives--;
        }
    } else if (gameMode === 'historical') {
        answer = normalizeString(answerInput.value.trim());
        const correctAnswer = normalizeString(historicalFigures[currentCountryIndex].country);
        if (answer === correctAnswer) {
            message.textContent = "Correto";
            message.style.color = "green";
            score++;
        } else {
            message.textContent = "ERROU NEWBA";
            message.style.color = "red";
            lives--;
        }
    }

    scoreDisplay.textContent = `Pontuação: ${score}`;
    livesDisplay.textContent = `Vidas: ${lives}`;
    answerInput.disabled = true;
    submitButton.disabled = true;
    proceedButton.style.display = 'block';
    answered = true;

    if (lives <= 0) {
        message.textContent = "Você perdeu";
        submitButton.disabled = true;
        proceedButton.style.display = 'none';
        restartButton.style.display = 'block';
    }
});

proceedButton.addEventListener('click', () => {
    if (gameMode === 'countries') {
        currentCountryIndex++;
        if (currentCountryIndex < countries.length) {
            loadCountry();
        } else {
            message.textContent = "Você zerou o jogo!";
            submitButton.disabled = true;
        }
    } else if (gameMode === 'historical') {
        currentCountryIndex++;
        if (currentCountryIndex < historicalFigures.length) {
            loadHistoricalFigure();
        } else {
            message.textContent = "Você zerou o jogo!";
            submitButton.disabled = true;
        }
    }
});

restartButton.addEventListener('click', () => {
    currentCountryIndex = 0;
    score = 0;
    lives = 3;
    shuffleArray(countries);
    shuffleArray(historicalFigures); // Embaralha novamente as figuras históricas
    submitButton.disabled = false;
    menu.style.display = 'block';
    document.getElementById('game').style.display = 'none';
});

// Ação para pressionar Enter
answerInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        if (!answered) {
            submitButton.click();
        } else if (answered && score >= 0) {
            proceedButton.click();
        }
    }
});

// Iniciar o jogo
loadCountry();