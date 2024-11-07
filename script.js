const countries = [
    { name: "Brasil", silhouette: "https://th.bing.com/th/id/OIP.2kLWjnxqROfkhvMLjzfHaAAAAA?rs=1&pid=ImgDetMain" },
    { name: "Argentina", silhouette: "https://img.freepik.com/premium-vector/argentina-map-silhouette-isolated-white-background_650065-142.jpg?w=2000" },
    { name: "Canadá", silhouette: "https://th.bing.com/th/id/OIP.fTcNIpjkAPU0sictIM7v0wHaHa?w=800&h=800&rs=1&pid=ImgDetMain" },
    { name: "França", silhouette: "https://img.freepik.com/vector-premium/mapa-francia-sobre-fondo-blanco-ilustracion-vectorial_511393-3014.jpg?w=2000" },
    { name: "Finlândia", silhouette: "https://img.freepik.com/vetores-premium/mapa-da-finlandia-silhueta-negra-altamente-detalhada-isolada-no-fundo-branco_601298-14145.jpg" },
];

const historicalFigures = [
    { name: "Albert Einstein", country: "Alemanha", silhouette: "https://s4.static.brasilescola.uol.com.br/be/conteudo/images/2-albert-einstein.jpg", answers: ["Einstein"] },
    { name: "Marie Curie", country: "Polônia", silhouette: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/300px-Marie_Curie_c1920.jpg" },
];

let currentIndex = 0;
let score = 0;
let lives = 5;
let gameMode = 'countries';
let playerName = '';
const ranking = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

const countrySilhouette = document.getElementById('country-silhouette');
const historicalFigure = document.getElementById('historical-figure');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const message = document.getElementById('message');
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives');
const modeCountriesButton = document.getElementById('modo-countries');
const modeHistoricalButton = document.getElementById('modo-historical');
const startButton = document.getElementById('start');
const playerNameInput = document.getElementById('player-name');
const menu = document.getElementById('menu');

// Função para ativar o modo de jogo e alterar o background
function ativarModoDeJogo(modo) {
    const body = document.body;

    // Remove classes de background de outros modos, se houver
    body.classList.remove('modo-countries-bg', 'modo-historical-bg');

    // Adiciona a classe de background com base no modo de jogo selecionado
    if (modo === 'countries') {
        body.classList.add('modo-countries-bg');
        // Aqui, você pode adicionar outras configurações específicas para o modo 'countries'
    } else if (modo === 'historical') {
        body.classList.add('modo-historical-bg');
        // Aqui, você pode adicionar outras configurações específicas para o modo 'historical'
    }

    // Lógica adicional para iniciar o jogo no modo selecionado
}

// Exemplo de uso, chamando a função ao clicar no botão de modo
document.getElementById('modo-countries').addEventListener('click', () => ativarModoDeJogo('countries'));
document.getElementById('modo-historical').addEventListener('click', () => ativarModoDeJogo('historical'));


modeCountriesButton.addEventListener('click', () => {
    gameMode = 'countries';
    startButton.style.display = 'block';
});

modeHistoricalButton.addEventListener('click', () => {
    gameMode = 'historical';
    startButton.style.display = 'block';
});

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

function loadNext() {
    resetGameUI();
    if (gameMode === 'countries') {
        let country = countries[currentIndex];
        countrySilhouette.src = country.silhouette;
        countrySilhouette.style.display = 'block';
        historicalFigure.style.display = 'none';
    } else {
        let figure = historicalFigures[currentIndex];
        historicalFigure.src = figure.silhouette;
        historicalFigure.style.display = 'block';
        countrySilhouette.style.display = 'none';
    }
}

function resetGameUI() {
    answerInput.value = '';
    message.textContent = '';
    message.style.color = ''; // Reseta a cor do texto
    scoreDisplay.textContent = `Pontuação: ${score}`;
    livesDisplay.textContent = `Vidas: ${lives}`;
}

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
        message.style.color = 'green'; // Texto em verde para resposta correta
    } else {
        lives--;
        message.textContent = `Resposta errada! A resposta correta era: ${correctAnswer}.`;
        message.style.color = 'red'; // Texto em vermelho para resposta errada
    }

    updateUI();

    setTimeout(() => {
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
    }, 2000); // Tempo em milissegundos (2 segundos)
}

function updateUI() {
    scoreDisplay.textContent = `Pontuação: ${score}`;
    livesDisplay.textContent = `Vidas: ${lives}`;
}

// Evento para enviar a resposta
submitButton.addEventListener('click', () => {
    // Desativa o botão de envio para evitar cliques repetidos
    submitButton.disabled = true;
    checkAnswer(answerInput.value.trim());
});

function endGame() {
    message.textContent = `Fim de jogo! Sua pontuação foi de ${score}.`;
    answerInput.disabled = true;
    submitButton.disabled = true;
}