const countries = [
    // Américas
    { name: "Brasil", silhouette: "https://th.bing.com/th/id/OIP.2kLWjnxqROfkhvMLjzfHaAAAAA?rs=1&pid=ImgDetMain" },
    { name: "Argentina", silhouette: "https://img.freepik.com/vetores-premium/silhueta-do-mapa-da-argentina-isolada-no-fundo-branco_650065-142.jpg" },
    { name: "Canadá", silhouette: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuJjsUEy5ixgOjemXlxtaLhKHESsT6W517A&s" },
    { name: "Chile", silhouette: "https://th.bing.com/th/id/OIP.yk3K9wHthdYR3bnKLdCBggAAAA?rs=1&pid=ImgDetMain" },
    { name: "Uruguai", silhouette: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskBU6m2AmtvFKYACtIJxgdk561E-sLhK5Og&s" },
    { name: "Estados Unidos", silhouette: "https://th.bing.com/th/id/OIP.AiYnAT55u1LG-Pf9NJPukQHaHa?rs=1&pid=ImgDetMain" },

    // Europa
    { name: "França", silhouette: "https://img.freepik.com/vetores-premium/silhueta-negra-do-pais-da-franca-mapa-ilustracao-vetorial_628809-946.jpg" },
    { name: "Alemanha", silhouette: "https://img.freepik.com/premium-vector/map-germany-icon-simple-illustration-map-germany-vector-icon-web_96318-25219.jpg" },
    { name: "Espanha", silhouette: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSun9R_VHvHY90m7tld2ekEdMcbiAN4vB6fsw&s" },
    { name: "Portugal", silhouette: "https://static.vecteezy.com/ti/vetor-gratis/p1/5091159-portugal-blank-vector-map-isolated-on-white-background-high-detailed-black-silhuette-map-of-portugal-gratis-vetor.jpg" },
    { name: "Suécia", silhouette: "https://cdn.pixabay.com/photo/2012/04/15/20/03/sweden-35134_640.png" },
    { name: "Noruega", silhouette: "https://img.freepik.com/vetores-premium/mapa-da-noruega-silhueta-preta-altamente-detalhada-isolada-no-fundo-branco_601298-14147.jpg" },

    // Ásia
    { name: "Japão", silhouette: "https://static.vecteezy.com/ti/vetor-gratis/p1/3127394-japan-map-silhouette-vector-illustration-sketch-vetor.jpg" },
    { name: "Índia", silhouette: "https://img.freepik.com/vetores-premium/mapa-da-silhueta-da-india-isolado-no-fundo-branco_650065-132.jpg" },

    // Oceania
    { name: "Austrália", silhouette: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6IEcrh1UfgCPbZY3chkNeybYk6Ryx1uihhQ&s" },
    { name: "Nova Zelândia", silhouette: "https://th.bing.com/th/id/OIP.ua895AtzPavnU_1ELR7MfgHaIG?rs=1&pid=ImgDetMain" },
];

const historicalFigures = [
    //Brasil
    { name: "Getúlio Vargas", silhouette: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Getulio_Vargas_%281930%29.jpg/640px-Getulio_Vargas_%281930%29.jpg"},
    { name: "Dom Pedro 2", silhouette: "https://1.bp.blogspot.com/-jpzXpmn8l38/X8i7LbsvlwI/AAAAAAAA530/nmp3K_JjjqArn2UDrAEx1jOISbpAswZGQCLcBGAsYHQ/w464-h585/D.%2BPEDRO%2BII.png" },
    { name: "Santos Dumont", silhouette: "https://s.ebiografia.com/assets/img/authors/sa/nt/santos-dumont-l.jpg" },
    
    //Europa

    //Alemanha
    { name: "Albert Einstein", silhouette: "https://th.bing.com/th/id/OIP.BTRUoKaTtPJKmMvvdt_c-AHaEc?w=281&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "Joseph Goebbels", silhouette: "https://s2-g1.glbimg.com/7QWiSy6S_aRoOC2nPeyRD3qYaT8=/0x0:572x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/c/H/srlDVZS1687BbCFCuAGQ/goebbels.jpg"},
    { name: "Karl Marx", silhouette: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karl_Marx_001.jpg/800px-Karl_Marx_001.jpg"},
    
    //Itália
    { name: "Benito Mussolini", silhouette: "https://c.files.bbci.co.uk/ED6E/production/_106028706_benitomussolini1.jpg"},
    { name: "Júlio César", silhouette: "https://www.walksinsiderome.com/wp-content/uploads/2022/09/Julius-Caesar-1024x576-1-960x576.jpg"},

    //França
    { name: "Napoleão Bonaparte", silhouette: "https://network.grupoabril.com.br/wp-content/uploads/sites/4/2016/12/446px-delarochenapoleon.jpg?quality=70&w=720&crop=1"},

    //Polônia
    { name: "Marie Curie", silhouette: "https://s3.amazonaws.com/libapps/accounts/66324/images/Mariecurie.jpg"},

    //Reino Unido
    { name: "Winston Churchill", silhouette: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sir_Winston_Churchill_-_19086236948.jpg/800px-Sir_Winston_Churchill_-_19086236948.jpg"},

    //Russia
    { name: "Josef Stalin", silhouette: "https://upload.wikimedia.org/wikipedia/commons/3/3c/StalinCropped1943%28b%29.jpg"},

    //Ásia
    { name: "Mao Tsé Tung", silhouette: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Mao_Zedong_1959.jpg"},
    { name: "Hirohito", silhouette: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1TgYXCgSfTn7Gsxq3KSrYQ-ZxLGMxNhHpA&s"},

    //USA
    { name: "Abraham Lincoln", silhouette: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/800px-Abraham_Lincoln_O-77_matte_collodion_print.jpg"},
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
        loadingBar.style.backgroundColor = "green"; // Resposta correta com barra verde
    } else {
        lives--;
        messageDisplay.textContent = "Resposta errada!";
        loadingBar.style.backgroundColor = "red"; // Resposta errada com barra vermelha
    }

    scoreDisplay.textContent = `Pontuação: ${score}`;
    livesDisplay.textContent = `Vidas: ${lives} ❤️`;

    // Define o tempo total da animação da barra em milissegundos
    const totalAnimationTime = 1500;
    let startTime = null;

    // Função para animar a barra de carregamento
    function animateLoadingBar(timestamp) {
        if (!startTime) startTime = timestamp; // Inicializa o tempo de início
        const elapsedTime = timestamp - startTime; // Tempo decorrido
        const progress = Math.min((elapsedTime / totalAnimationTime) * 100, 100); // Calcula o progresso (0 a 100%)

        loadingBar.style.width = progress + "%"; // Atualiza a largura da barra

        if (progress < 100) {
            requestAnimationFrame(animateLoadingBar); // Continua a animação
        } else {
            setTimeout(() => {
                currentIndex++;
                if (lives <= 0 || currentIndex >= (gameMode === 'countries' ? countries.length : historicalFigures.length)) {
                    finishGame();
                } else {
                    loadNext(); // Carrega a próxima pergunta
                }
            }, 300); // Aguarda 300ms antes de carregar a próxima pergunta
        }
    }

    loadingBarContainer.style.display = "block"; // Exibe a barra de carregamento
    requestAnimationFrame(animateLoadingBar); // Inicia a animação da barra

    setTimeout(() => {
        loadingBarContainer.style.display = "none"; // Oculta a barra de carregamento após 3 segundos
    }, totalAnimationTime); // A barra desaparece após o tempo total de animação
}

function finishGame() {
    // Define a mensagem final dependendo do estado das vidas
    const finalMessage = lives > 0 ? 'Parabéns! Você venceu!' : 'Game Over! Você perdeu!';
    
    // Exibe a mensagem final com a pontuação
    messageDisplay.textContent = `${finalMessage} Seu score final foi: ${score}`;
    
    // Torna o elemento de mensagem visível (caso ele esteja oculto)
    messageDisplay.style.display = 'block';
    
    // Exibe a tela de fim de jogo e esconde a tela de jogo
    document.getElementById('game').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    
    // Aguarda um breve intervalo para garantir que a mensagem seja visível
    setTimeout(() => {
        // Salva a pontuação e o nome do jogador no ranking
        const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
        ranking.push({ name: playerName, score });
        ranking.sort((a, b) => b.score - a.score);  // Ordena o ranking pelo maior score
        
        // Limita o ranking a 10 jogadores
        if (ranking.length > 10) ranking.pop();
        
        // Salva o novo ranking no localStorage
        localStorage.setItem('ranking', JSON.stringify(ranking));

        // Atualiza a exibição do ranking
        updateRanking();
    }, 500);  // Aguarda meio segundo antes de atualizar o ranking e mostrar o menu novamente
}

function updateRanking() {
    rankingList.innerHTML = ''; // Limpa a lista de ranking

    const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
    ranking.slice(0, 10).forEach((entry, index) => { // Exibe apenas os 10 primeiros
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${entry.name}: ${entry.score}`;

        // Definir cor de fundo para os três primeiros lugares
        if (index === 0) {
            li.style.backgroundColor = 'gold'; // Primeiro lugar (Dourado)
        } else if (index === 1) {
            li.style.backgroundColor = 'silver'; // Segundo lugar (Prata)
        } else if (index === 2) {
            li.style.backgroundColor = '#cd7f32'; // Terceiro lugar (Bronze)
        }

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