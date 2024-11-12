const countries = [
    { name: "Brasil", silhouette: "https://th.bing.com/th/id/OIP.2kLWjnxqROfkhvMLjzfHaAAAAA?rs=1&pid=ImgDetMain" },
    { name: "Argentina", silhouette: "https://img.freepik.com/premium-vector/argentina-map-silhouette-isolated-white-background_650065-142.jpg?w=2000" },
    { name: "Canadá", silhouette: "https://th.bing.com/th/id/OIP.fTcNIpjkAPU0sictIM7v0wHaHa?w=800&h=800&rs=1&pid=ImgDetMain" },
    { name: "Chile", silhouette: "https://th.bing.com/th/id/OIP.yk3K9wHthdYR3bnKLdCBggAAAA?rs=1&pid=ImgDetMain" },
    { name: "França", silhouette: "https://img.freepik.com/vector-premium/mapa-francia-sobre-fondo-blanco-ilustracion-vectorial_511393-3014.jpg?w=2000" },
    { name: "Alemanha", silhouette: "https://th.bing.com/th/id/OIP.bf3sLq5xomSCmGML6Zz2KQHaHa?rs=1&pid=ImgDetMain" },
    { name: "Espanha", silhouette: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSun9R_VHvHY90m7tld2ekEdMcbiAN4vB6fsw&s" },
    { name: "Portugal", silhouette: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsMI4TQnjfKduY0-bie86kc21BYCCGgdmdlA&s" },
    { name: "Estados Unidos", silhouette: "https://th.bing.com/th/id/OIP.AiYnAT55u1LG-Pf9NJPukQHaHa?rs=1&pid=ImgDetMain" },
    { name: "Australia", silhouette: "https://th.bing.com/th/id/R.9eb57b6510fe981b3c3749bb776e0f83?rik=fmJjcQa7t1afWA&riu=http%3a%2f%2fgetdrawings.com%2fimg%2faustralia-silhouette-5.jpg&ehk=V2wiNNduBH4kOdKLYY%2ftYe5mwiSGF7DDmPIliaXpWMY%3d&risl=&pid=ImgRaw&r=0" },
    { name: "Nova Zelandia", silhouette: "https://th.bing.com/th/id/OIP.ua895AtzPavnU_1ELR7MfgHaIG?rs=1&pid=ImgDetMain" },
];

const historicalFigures = [
    { name: "Albert Einstein", country: "Alemanha", silhouette: "https://s4.static.brasilescola.uol.com.br/be/conteudo/images/2-albert-einstein.jpg" },
    { name: "Santos Dumont", country: "Brasil", silhouette: "https://i0.wp.com/100fronteiras.com/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-02-at-09.57.56-e1658344342637.jpeg?fit=854%2C822&ssl=1" },
    { name: "Joana d'Arc", country: "França", silhouette: "https://escolaeducacao.com.br/wp-content/uploads/2019/12/joana-darc-746x1024.jpg" },
    { name: "Princesa Isabel", country: "Brasil", silhouette: "https://th.bing.com/th/id/OIP.JWv6Brp-OnB86_3V9wViiAHaJy?rs=1&pid=ImgDetMain" },
    { name: "Martin Luther King", country: "Estados Unidos", silhouette: "https://th.bing.com/th/id/OIP.i-98N8oFZZU62N53_8wP7gHaE5?rs=1&pid=ImgDetMain" },
    { name: "Winston Churchill", country: "Reino Unido", silhouette: "https://th.bing.com/th/id/OIP.Cwmd-oZnz9Iwyk7NfLNeZgHaIB?rs=1&pid=ImgDetMain" },
    { name: "Napoleão", country: "França", silhouette: "https://rp-online.de/imgs/32/6/2/9/8/5/7/0/9/tok_4c36b11c57caed6391d99c90051cdf0f/w1004_h1200_x502_y600_RP_62754687_1413190521_RGB_190_1_1_87251bc1ccf54600720e4fb337d81769_1563371125_1413190521_01758c00b9-be2788f85fad9148.jpg" },
    { name: "Alan Turing", country: "Reino Unido", silhouette: "https://cdn.britannica.com/81/191581-050-8C0A8CD3/Alan-Turing.jpg" },
    { name: "Anne Frank", country: "Alemanha", silhouette: "https://th.bing.com/th/id/R.7e0b5c399b8411850a7d37f4c020d809?rik=UpYQ6eTxjebJow&riu=http%3a%2f%2ftonsoffacts.com%2fwp-content%2fuploads%2f2018%2f06%2fannefrank.jpg&ehk=FUNeDZAmz9L6AWNI%2bF8SHSotA0qG6Gs7nQ%2fhE%2fbB%2fNk%3d&risl=&pid=ImgRaw&r=0" }
];

let currentIndex = 0;
let score = 0;
let lives = 3;
let gameMode = 'countries';
let playerName = '';
const ranking = [];

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
const proceedButton = document.getElementById('proceed');
const restartButton = document.getElementById('restart');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function ativarModoDeJogo(modo) {
    const body = document.body;

    // Remove classes de background de outros modos, se houver
    body.classList.remove('modo-countries-bg', 'modo-historical-bg');

    // Adiciona a classe de background com base no modo de jogo selecionado
    if (modo === 'countries') {
        body.classList.add('modo-countries-bg');
    } else if (modo === 'historical') {
        body.classList.add('modo-historical-bg');
    }
}

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

submitButton.addEventListener('click', () => {
    let playerAnswer = normalizarTexto(answerInput.value.trim());
    let correctAnswer = '';

    if (gameMode === 'countries') {
        correctAnswer = normalizarTexto(countries[currentIndex].name);
    } else {
        correctAnswer = normalizarTexto(historicalFigures[currentIndex].name);
    }

    if (playerAnswer === correctAnswer) {
        score++;
        message.textContent = "Resposta correta!";
    } else {
        lives--;
        message.textContent = `Resposta errada! Você tem ${lives} vidas restantes.`;
    }

    scoreDisplay.textContent = `Pontuação: ${score}`;
    livesDisplay.textContent = `Vidas: ${lives}`;

    currentIndex++;

    if (lives <= 0 || currentIndex >= (gameMode === 'countries' ? countries.length : historicalFigures.length)) {
        finishGame();
    } else {
        loadNext();
    }
});

function resetGameUI() {
    message.textContent = '';
    answerInput.value = '';
}

function finishGame() {
    message.textContent = `Fim de Jogo! ${playerName}, sua pontuação foi ${score}.`;
    ranking.push({ name: playerName, score: score });
    ranking.sort((a, b) => b.score - a.score); // Ordena pela pontuação

    // Mostra o ranking
    let rankingList = ranking.map(entry => `${entry.name}: ${entry.score}`).join('<br>');
    document.getElementById('ranking').innerHTML = rankingList;
    restartButton.style.display = 'block';
}

restartButton.addEventListener('click', () => {
    lives = 3;
    score = 0;
    currentIndex = 0;
    ranking.length = 0; // Limpa o ranking
    menu.style.display = 'block';
    document.getElementById('game').style.display = 'none';
});

proceedButton.addEventListener('click', () => {
    lives = 3;
    score = 0;
    currentIndex = 0;
    ranking.length = 0; // Limpa o ranking
    shuffleArray(countries);
    shuffleArray(historicalFigures);
    loadNext();
    message.textContent = '';
    document.getElementById('game').style.display = 'block';
    document.getElementById('ranking').innerHTML = '';
    restartButton.style.display = 'none';
});
