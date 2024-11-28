const countries = [
    // Américas
    { name: "Brasil", silhouette: "https://th.bing.com/th/id/OIP.2kLWjnxqROfkhvMLjzfHaAAAAA?rs=1&pid=ImgDetMain" },
    { name: "Argentina", silhouette: "https://img.freepik.com/premium-vector/argentina-map-silhouette-isolated-white-background_650065-142.jpg?w=2000" },
    { name: "Canadá", silhouette: "https://th.bing.com/th/id/OIP.fTcNIpjkAPU0sictIM7v0wHaHa?w=800&h=800&rs=1&pid=ImgDetMain" },
    { name: "Chile", silhouette: "https://th.bing.com/th/id/OIP.yk3K9wHthdYR3bnKLdCBggAAAA?rs=1&pid=ImgDetMain" },
    { name: "Uruguai", silhouette: "https://th.bing.com/th/id/OIP.96T6_a4AZTzO8J3cVJCd0gHaH5?rs=1&pid=ImgDetMain" },
    { name: "Estados Unidos", silhouette: "https://th.bing.com/th/id/OIP.AiYnAT55u1LG-Pf9NJPukQHaHa?rs=1&pid=ImgDetMain" },

    // Europa
    { name: "França", silhouette: "https://img.freepik.com/vector-premium/mapa-francia-sobre-fondo-blanco-ilustracion-vectorial_511393-3014.jpg?w=2000" },
    { name: "Alemanha", silhouette: "https://th.bing.com/th/id/OIP.bf3sLq5xomSCmGML6Zz2KQHaHa?rs=1&pid=ImgDetMain" },
    { name: "Espanha", silhouette: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSun9R_VHvHY90m7tld2ekEdMcbiAN4vB6fsw&s" },
    { name: "Portugal", silhouette: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsMI4TQnjfKduY0-bie86kc21BYCCGgdmdlA&s" },
    { name: "Suécia", silhouette: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLllQQLEJFDS9LwAmz6RHMD_jLuC3_tYCUYw&s" },
    { name: "Noruega", silhouette: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7KIAjoifCcLhJQZGNMMbHn0DNo8ujITECA&s" },

    // Ásia
    { name: "Japão", silhouette: "https://static.vecteezy.com/ti/vetor-gratis/p1/3127394-japan-map-silhouette-vector-illustration-sketch-vetor.jpg" },
    { name: "Índia", silhouette: "https://img.freepik.com/vetores-premium/mapa-da-silhueta-da-india-isolado-no-fundo-branco_650065-132.jpg" },

    // Oceania
    { name: "Austrália", silhouette: "https://th.bing.com/th/id/R.9eb57b6510fe981b3c3749bb776e0f83?rik=fmJjcQa7t1afWA&riu=http%3a%2f%2fgetdrawings.com%2fimg%2faustralia-silhouette-5.jpg&ehk=V2wiNNduBH4kOdKLYY%2ftYe5mwiSGF7DDmPIliaXpWMY%3d&risl=&pid=ImgRaw&r=0" },
    { name: "Nova Zelândia", silhouette: "https://th.bing.com/th/id/OIP.ua895AtzPavnU_1ELR7MfgHaIG?rs=1&pid=ImgDetMain" }
];

const historicalFigures = [
    { name: "Albert Einstein", silhouette: "https://th.bing.com/th/id/OIP.BTRUoKaTtPJKmMvvdt_c-AHaEc?w=281&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "Joana d'Arc", silhouette: "https://lereaprender.com.br/wp-content/uploads/2020/08/quem-foi-joana-darc.jpg" },
    { name: "Dom Pedro II", silhouette: "https://1.bp.blogspot.com/-jpzXpmn8l38/X8i7LbsvlwI/AAAAAAAA530/nmp3K_JjjqArn2UDrAEx1jOISbpAswZGQCLcBGAsYHQ/w464-h585/D.%2BPEDRO%2BII.png" },
    { name: "Santos Dumont", silhouette: "https://s.ebiografia.com/assets/img/authors/sa/nt/santos-dumont-l.jpg" }
];

let currentIndex = 0;
let score = 0;
let lives = 5;
let gameMode = 'countries';
let playerName = '';
let canAnswer = true; // Variável para controlar o envio de resposta

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
const loadingBar = document.getElementById("loading-bar");
const loadingBarContainer = document.getElementById("loading-bar-container");

// Função para normalizar texto (ignorar acentos e comparar em minúsculas)
function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Função para embaralhar a lista de itens
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca elementos
    }
}

// Configuração do modo de jogo
document.getElementById('mode-countries').addEventListener('click', () => {
    startGame('countries');
});

document.getElementById('mode-historical').addEventListener('click', () => {
    startGame('historical');
});

function startGame(mode) {
    playerName = document.getElementById('player-name').value.trim();
    if (!playerName) {
        alert("Por favor, digite seu nome antes de começar.");
        return;
    }
    gameMode = mode;
    currentIndex = 0;
    score = 0;
    lives = 5;
    shuffleArray(gameMode === 'countries' ? countries : historicalFigures);
    document.getElementById('menu').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    loadNext();
}

function loadNext() {
    if (currentIndex >= (gameMode === 'countries' ? countries.length : historicalFigures.length)) return;

    const question = (gameMode === 'countries' ? countries : historicalFigures)[currentIndex];
    silhouetteImage.src = question.silhouette;
    messageDisplay.textContent = `Qual é o nome do ${gameMode === 'countries' ? 'país' : 'personagem histórico'}?`;
    answerInput.value = '';
    canAnswer = true; // Reativa a entrada de respostas

    loadingBarContainer.style.display = "block"; // Exibe a barra de carregamento
    loadingBar.style.width = '0%'; // Reseta a largura da barra
    loadingBar.style.backgroundColor = "blue"; // Cor inicial da barra
}

// Permitir envio com Enter
answerInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita comportamento padrão (como enviar o formulário)
        checkAnswer();
    }
});

submitButton.addEventListener('click', checkAnswer);

function checkAnswer() {
    if (!canAnswer) return; // Bloqueia envio de múltiplas respostas
    canAnswer = false; // Desativa respostas até carregar a próxima imagem

    const answer = normalizarTexto(answerInput.value);
    const correctAnswer = normalizarTexto(
        (gameMode === 'countries' ? countries : historicalFigures)[currentIndex].name
    );

    if (answer === correctAnswer) {
        score++;
        messageDisplay.textContent = "Resposta correta!";
        loadingBar.style.backgroundColor = "green";  // Resposta correta com barra verde
    } else {
        lives--;
        messageDisplay.textContent = "Resposta errada!";
        loadingBar.style.backgroundColor = "red";  // Resposta errada com barra vermelha
    }

    scoreDisplay.textContent = `Pontuação: ${score}`;
    livesDisplay.textContent = `Vidas: ${lives} ❤️`;

    let width = 0;
    const loadingInterval = setInterval(() => {
        if (width >= 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                currentIndex++;
                if (lives <= 0 || currentIndex >= (gameMode === 'countries' ? countries.length : historicalFigures.length)) {
                    finishGame();
                } else {
                    loadNext(); // Carrega a próxima pergunta
                }
            }, 300); // Aguarda 300ms antes de carregar a próxima pergunta
        } else {
            width++;
            loadingBar.style.width = width + '%';
        }
    }, 30); // Barra aumenta de 1% a cada 30ms

    setTimeout(() => {
        loadingBarContainer.style.display = "none"; // Oculta a barra de carregamento após 3 segundos
    }, 3000); // A barra desaparece após 3 segundos
}

function finishGame() {
    const finalMessage = lives > 0 ? 'Parabéns!' : 'Game Over!';
    messageDisplay.textContent = `${finalMessage} Seu score final foi: ${score}`;
    document.getElementById('game').style.display = 'none';
    document.getElementById('menu').style.display = 'block';

    const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
    ranking.push({ name: playerName, score });
    ranking.sort((a, b) => b.score - a.score);
    if (ranking.length > 10) ranking.pop();
    localStorage.setItem('ranking', JSON.stringify(ranking));
    updateRanking();
}

function updateRanking() {
    rankingList.innerHTML = '';
    const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
    ranking.forEach((entry, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${entry.name}: ${entry.score}`;
        rankingList.appendChild(li);
    });
}

// Botão para reiniciar o jogo
restartButton.addEventListener('click', () => {
    document.getElementById('ranking').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
});

// Botão para mostrar ou esconder o ranking
showRankingButton.addEventListener('click', () => {
    if (rankingDiv.style.display === 'none') {
        updateRanking();
        rankingDiv.style.display = 'block';
    } else {
        rankingDiv.style.display = 'none';
    }
});

// Função para limpar o ranking
document.getElementById('clear-ranking').addEventListener('click', () => {
    if (confirm("Tem certeza de que deseja limpar o ranking?")) {
        localStorage.removeItem('ranking');
        updateRanking();
    }
});
