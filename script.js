const countries = [
    { name: "Brasil", silhouette: "https://th.bing.com/th/id/OIP.2kLWjnxqROfkhvMLjzfHaAAAAA?rs=1&pid=ImgDetMain" },
    { name: "Argentina", silhouette: "https://img.freepik.com/premium-vector/argentina-map-silhouette-isolated-white-background_650065-142.jpg?w=2000" },
    { name: "Canadá", silhouette: "https://th.bing.com/th/id/OIP.fTcNIpjkAPU0sictIM7v0wHaHa?w=800&h=800&rs=1&pid=ImgDetMain" },
    { name: "França", silhouette: "https://img.freepik.com/vector-premium/mapa-francia-sobre-fondo-blanco-ilustracion-vectorial_511393-3014.jpg?w=2000" },
    { name: "Finlândia", silhouette: "https://img.freepik.com/vetores-premium/mapa-da-finlandia-silhueta-negra-altamente-detalhada-isolada-no-fundo-branco_601298-14145.jpg" },
];

const historicalFigures = [
    { name: "Mahatma Gandhi", country: "Índia", silhouette: "https://1.bp.blogspot.com/-_N9DYP7zAyw/TljaabmHKYI/AAAAAAAAKuk/MEaVUv5Dw-w/s1600/mahatma-gandhi-11.jpg", answers: ["Gandhi"] },
    { name: "Albert Einstein", country: "Alemanha", silhouette: "https://s4.static.brasilescola.uol.com.br/be/conteudo/images/2-albert-einstein.jpg", answers: ["Einstein"] },
    { name: "Marie Curie", country: "Polônia", silhouette: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/300px-Marie_Curie_c1920.jpg" },
    { name: "Galileo", country: "Itália", silhouette: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg", answers: ["Marx"] },
    { name: "Winston Churchill", country: "Reino unido", silhouette: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7dVkAqS0UN75b-eGs6mbabNrjlUcCK2VIQ&s", answers: ["Churchill"] },
    { name: "Joseph Stalin", country: "União soviética", silhouette: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/AA5E/production/_105241634_2-1.jpg.webp", answers: ["Stalin"] },
    { name: "Sócrates", country: "Grécia", silhouette: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3PRdUF74jweXDUYuNenXT8xqpOTQXyO3Cg&s" },
    { name: "Leonardo Da Vinci", country: "Itália", silhouette: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2019/06/24/leo.jpg", answers: ["Da Vinci"] },
    { name: "Júlio César", country: "Império Romano", silhouette: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxVUfIw5VwnnN4U0_TSkMHX4W0GMRDY42ohw&s" },
    { name: "Napoleão Bonaparte", country: "França", silhouette: "https://static.todamateria.com.br/upload/na/po/napoleao-bonaparte-og.jpg?class=ogImageRectangle", answers: ["Napoleão"] },
    { name: "Niels Bohr", country: "Dinamarca", silhouette: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Niels_Bohr.jpg/640px-Niels_Bohr.jpg", answers: ["Bohr"] }, 
    { name: "Karl Marx", country: "Alemanha", silhouette: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karl_Marx_001.jpg/1200px-Karl_Marx_001.jpg", answers: ["Marx"] }, 
    { name: "Abraham Lincoln", country: "Estados unidos", silhouette: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/1200px-Abraham_Lincoln_O-77_matte_collodion_print.jpg" },
    { name: "Getúlio Vargas", country: "Brasil", silhouette: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Get%C3%BAlio_Vargas_-_retrato_oficial_de_1930.JPG/800px-Get%C3%BAlio_Vargas_-_retrato_oficial_de_1930.JPG", answers: ["Vargas"] },
    { name: "Dom Pedro Segundo", country: "Brasil", silhouette: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbrWS0aiUlHE9w28ge6O99585zsGtYeFiVGg&s", answers: ["Dom Pedro 2"] },
];

// Variáveis globais para controle de estado do jogo
let currentIndex = 0;
let score = 0;
let lives = 5;
let gameMode = 'countries';
let playerName = '';

// Array para armazenar o ranking dos jogadores
const ranking = [];

// Função para embaralhar um array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Função para normalizar o texto, removendo acentos e convertendo para minúsculas
function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Seleção dos elementos do DOM
const countrySilhouette = document.getElementById('country-silhouette');
const historicalFigure = document.getElementById('historical-figure');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const proceedButton = document.getElementById('proceed');
const restartButton = document.getElementById('restart');
const showRankingButton = document.getElementById('show-ranking');
const rankingList = document.getElementById('ranking-list');
const rankingDiv = document.getElementById('ranking');
const backToGameButton = document.getElementById('back-to-game');
const message = document.getElementById('message');
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives');
const modeCountriesButton = document.getElementById('modo-countries');
const modeHistoricalButton = document.getElementById('modo-historical');
const startButton = document.getElementById('start');
const playerNameInput = document.getElementById('player-name');
const menu = document.getElementById('menu');

// Evento para selecionar o modo de jogo "Países"
modeCountriesButton.addEventListener('click', () => {
    gameMode = 'countries';
    currentIndex = 0;
    startButton.style.display = 'block';
    showRankingButton.style.display = 'block';
});

// Evento para selecionar o modo de jogo "Histórico"
modeHistoricalButton.addEventListener('click', () => {
    gameMode = 'historical';
    currentIndex = 0;
    startButton.style.display = 'block';
    showRankingButton.style.display = 'block';
});

// Evento para iniciar o jogo
startButton.addEventListener('click', () => {
    playerName = playerNameInput.value.trim();
    if (!playerName) {
        alert("Por favor, digite seu nome.");
        return;
    }
    menu.style.display = 'none';
    document.getElementById('game').style.display = 'block';
    shuffleArray(countries);
    shuffleArray(historicalFigures);
    loadNext();
});

// Função para carregar o próximo item
function loadNext() {
    resetGameUI();
    if (gameMode === 'countries') {
        loadCountry();
    } else {
        loadHistoricalFigure();
    }
}

// Função para carregar a imagem de um país
function loadCountry() {
    const currentCountry = countries[currentIndex];
    countrySilhouette.src = currentCountry.silhouette;
    countrySilhouette.style.display = 'block';
    historicalFigure.style.display = 'none';
}

// Função para carregar a imagem de uma figura histórica
function loadHistoricalFigure() {
    const currentFigure = historicalFigures[currentIndex];
    historicalFigure.src = currentFigure.silhouette;
    historicalFigure.style.display = 'block';
    countrySilhouette.style.display = 'none';
}

// Função para resetar a UI do jogo
function resetGameUI() {
    answerInput.value = '';
    message.textContent = '';
    scoreDisplay.textContent = `Pontuação: ${score}`;
    livesDisplay.textContent = `Vidas: ${lives}`;
}

// Evento para enviar a resposta
submitButton.addEventListener('click', () => {
    checkAnswer(answerInput.value.trim());
});

// Função para checar a resposta
function checkAnswer(answer) {
    let correctAnswer = '';
    if (gameMode === 'countries') {
        correctAnswer = countries[currentIndex].name;
    } else {
        correctAnswer = historicalFigures[currentIndex].name;
    }
    
    if (normalizarTexto(answer) === normalizarTexto(correctAnswer)) {
        score++;
        message.textContent = 'Resposta correta!';
    } else {
        lives--;
        message.textContent = `Resposta errada! A resposta correta era: ${correctAnswer}.`;
    }

    updateUI();

    if (lives === 0) {
        endGame();
    } else {
        currentIndex++;
        if ((gameMode === 'countries' && currentIndex >= countries.length) || 
            (gameMode === 'historical' && currentIndex >= historicalFigures.length)) {
            endGame();
        } else {
            loadNext();
        }
    }
}

// Função para atualizar a UI após uma resposta
function updateUI() {
    scoreDisplay.textContent = `Pontuação: ${score}`;
    livesDisplay.textContent = `Vidas: ${lives}`;
}

// Função para encerrar o jogo
function endGame() {
    message.textContent = `Fim de jogo! Sua pontuação final é: ${score}.`;
    document.getElementById('game').style.display = 'none';
    document.getElementById('end').style.display = 'block';
    ranking.push({ name: playerName, score: score });
    showRanking();
}

// Função para exibir o ranking
function showRanking() {
    rankingList.innerHTML = '';
    ranking.sort((a, b) => b.score - a.score).forEach(player => {
        const li = document.createElement('li');
        li.textContent = `${player.name}: ${player.score}`;
        rankingList.appendChild(li);
    });
    rankingDiv.style.display = 'block';
}

// Evento para reiniciar o jogo
restartButton.addEventListener('click', () => {
    rankingDiv.style.display = 'none';
    document.getElementById('end').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    score = 0;
    lives = 5;
    currentIndex = 0;
    loadNext();
});

// Evento para voltar ao jogo
backToGameButton.addEventListener('click', () => {
    rankingDiv.style.display = 'none';
    document.getElementById('end').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    loadNext();
});

// Evento para mostrar o ranking
showRankingButton.addEventListener('click', () => {
    rankingDiv.style.display = 'block';
    document.getElementById('game').style.display = 'none';
});