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
    {name: "Santos Dumont", country: "Brasil", silhouette: "https://i0.wp.com/100fronteiras.com/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-02-at-09.57.56-e1658344342637.jpeg?fit=854%2C822&ssl=1"},
    {name: "joana d'arc", country: "França", silhouette: "https://escolaeducacao.com.br/wp-content/uploads/2019/12/joana-darc-746x1024.jpg"},
    {name: "Princesa Isabel", country: "Brasil", silhouette: "https://th.bing.com/th/id/OIP.JWv6Brp-OnB86_3V9wViiAHaJy?rs=1&pid=ImgDetMain"},
    {name: "Marint Luther King", country: "Estados Unidos", silhouette: "https://th.bing.com/th/id/OIP.i-98N8oFZZU62N53_8wP7gHaE5?rs=1&pid=ImgDetMain"},
    {name: "Winston Churcill", country: "Reino unido", silhouette: "https://th.bing.com/th/id/OIP.Cwmd-oZnz9Iwyk7NfLNeZgHaIB?rs=1&pid=ImgDetMain"},
    {name: "Napoleão", country: "França", silhouette: "https://rp-online.de/imgs/32/6/2/9/8/5/7/0/9/tok_4c36b11c57caed6391d99c90051cdf0f/w1004_h1200_x502_y600_RP_62754687_1413190521_RGB_190_1_1_87251bc1ccf54600720e4fb337d81769_1563371125_1413190521_01758c00b9-be2788f85fad9148.jpg"},
    {name: "Alan Turing", country: "Reino Unido", silhouette: "https://cdn.britannica.com/81/191581-050-8C0A8CD3/Alan-Turing.jpg"},
    {name: "Anne Frank", country: "Alemanha", silhouette: "https://th.bing.com/th/id/R.7e0b5c399b8411850a7d37f4c020d809?rik=UpYQ6eTxjebJow&riu=http%3a%2f%2ftonsoffacts.com%2fwp-content%2fuploads%2f2018%2f06%2fannefrank.jpg&ehk=FUNeDZAmz9L6AWNI%2bF8SHSotA0qG6Gs7nQ%2fhE%2fbB%2fNk%3d&risl=&pid=ImgRaw&r=0"},
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
