const countries = [
    // Américas 
    { name: "Brasil", silhouette: "https://th.bing.com/th/id/OIP.2kLWjnxqROfkhvMLjzfHaAAAAA?rs=1&pid=ImgDetMain" },
    { name: "Argentina", silhouette: "https://img.freepik.com/premium-vector/argentina-map-silhouette-isolated-white-background_650065-142.jpg?w=2000" },
    { name: "Canadá", silhouette: "https://th.bing.com/th/id/OIP.fTcNIpjkAPU0sictIM7v0wHaHa?w=800&h=800&rs=1&pid=ImgDetMain" },
    { name: "Chile", silhouette: "https://th.bing.com/th/id/OIP.yk3K9wHthdYR3bnKLdCBggAAAA?rs=1&pid=ImgDetMain" },
    { name: "Uruguai", silhouette: "https://th.bing.com/th/id/OIP.96T6_a4AZTzO8J3cVJCd0gHaH5?rs=1&pid=ImgDetMain"},
    { name: "Estados unidos", silhouette: "https://th.bing.com/th/id/OIP.AiYnAT55u1LG-Pf9NJPukQHaHa?rs=1&pid=ImgDetMain  "},

    
    // Europa
    { name: "França", silhouette: "https://img.freepik.com/vector-premium/mapa-francia-sobre-fondo-blanco-ilustracion-vectorial_511393-3014.jpg?w=2000" },
    { name: "Alemanha", silhouette: "https://th.bing.com/th/id/OIP.bf3sLq5xomSCmGML6Zz2KQHaHa?rs=1&pid=ImgDetMain" },
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
    {name: "Russia", silhouette: "https://th.bing.com/th/id/OIP.XwAZlOHUYAmjmD5vHfW6kgHaE8?rs=1&pid=ImgDetMain"},

    // Ásia
    { name: "Japão", silhouette: "https://static.vecteezy.com/ti/vetor-gratis/p1/3127394-japan-map-silhouette-vector-illustration-sketch-vetor.jpg" },
    { name: "Índia", silhouette: "https://img.freepik.com/vetores-premium/mapa-da-silhueta-da-india-isolado-no-fundo-branco_650065-132.jpg" },

    // Oceania
    {name: "Australia", silhouette: "https://th.bing.com/th/id/R.9eb57b6510fe981b3c3749bb776e0f83?rik=fmJjcQa7t1afWA&riu=http%3a%2f%2fgetdrawings.com%2fimg%2faustralia-silhouette-5.jpg&ehk=V2wiNNduBH4kOdKLYY%2ftYe5mwiSGF7DDmPIliaXpWMY%3d&risl=&pid=ImgRaw&r=0"},
    {name: "Nova zelandia", silhouette: "https://th.bing.com/th/id/OIP.ua895AtzPavnU_1ELR7MfgHaIG?rs=1&pid=ImgDetMain"},
];

const historicalFigures = [
    { name: "Mahatma Gandhi", country: "Índia", silhouette: "https://1.bp.blogspot.com/-_N9DYP7zAyw/TljaabmHKYI/AAAAAAAAKuk/MEaVUv5Dw-w/s1600/mahatma-gandhi-11.jpg", answers: ["Gandhi"] },
    
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
    startButton.style.display = 'block';
    showRankingButton.style.display = 'none'; // Esconde o botão "Mostrar Ranking"
});

document.getElementById('mode-historical').addEventListener('click', () => {
    gameMode = 'historical';
    currentIndex = 0;
    startButton.style.display = 'block';
    showRankingButton.style.display = 'none'; // Esconde o botão "Mostrar Ranking"
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

submitButton.addEventListener('click', () => {
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

        // Verifica se o jogador perdeu todas as vidas
        if (lives === 0) {
            gameOver();
            return; // Sai da função para evitar carregamento da próxima pergunta
        }
    }

    currentIndex++;

    if (currentIndex < (gameMode === 'countries' ? countries.length : historicalFigures.length)) {
        proceedButton.style.display = 'block';
    } else {
        finishGame();
    }
});

function gameOver() {
    alert("Game Over! Você perdeu todas as vidas.");
    // Salva a pontuação antes de voltar ao menu inicial
    saveScore();

    // Redefine variáveis para um novo jogo
    score = 0;
    lives = 5;
    currentIndex = 0;

    // Atualiza o placar e as vidas na tela
    scoreDisplay.textContent = `Pontuação: ${score}`;
    livesDisplay.textContent = `Vidas: ${lives} ❤️`;

    // Retorna à tela inicial
    document.getElementById('game').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}

proceedButton.addEventListener('click', () => {
    proceedButton.style.display = 'none';
    loadNext();
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
    localStorage.removeItem('playerScores'); // Limpa o ranking no localStorage
    rankingList.innerHTML = ''; // Atualiza a lista de ranking para refletir a remoção
    alert("Ranking limpo com sucesso!");
});
