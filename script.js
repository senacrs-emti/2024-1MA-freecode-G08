const countries = [
    // Américas 
    { name: "Brasil", silhouette: "https://th.bing.com/th/id/OIP.2kLWjnxqROfkhvMLjzfHaAAAAA?rs=1&pid=ImgDetMain" },
    { name: "Argentina", silhouette: "https://img.freepik.com/premium-vector/argentina-map-silhouette-isolated-white-background_650065-142.jpg?w=2000" },
    { name: "Canadá", silhouette: "https://th.bing.com/th/id/OIP.fTcNIpjkAPU0sictIM7v0wHaHa?w=800&h=800&rs=1&pid=ImgDetMain" },
    
    // Europa
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

    // Ásia
    { name: "Japão", silhouette: "https://static.vecteezy.com/ti/vetor-gratis/p1/3127394-japan-map-silhouette-vector-illustration-sketch-vetor.jpg" },
    { name: "Índia", silhouette: "https://img.freepik.com/vetores-premium/mapa-da-silhueta-da-india-isolado-no-fundo-branco_650065-132.jpg" },
];

let currentCountryIndex = 0;
let score = 3; // Pontuação inicial
let answered = false; // Para rastrear se a pergunta foi respondida

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(countries); // Embaralha o array de países

const countrySilhouette = document.getElementById('country-silhouette');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const proceedButton = document.getElementById('proceed');
const restartButton = document.getElementById('restart'); // Botão de reiniciar
const message = document.getElementById('message');
const scoreDisplay = document.getElementById('score');

function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); // Remove acentos e coloca em minúsculas
}

function loadCountry() {
    const currentCountry = countries[currentCountryIndex];
    countrySilhouette.src = currentCountry.silhouette;
    message.textContent = '';
    answerInput.value = '';
    answerInput.disabled = false; // Habilita o campo de entrada
    submitButton.disabled = false; // Habilita o botão de enviar
    proceedButton.style.display = 'none'; // Esconde o botão de prosseguir
    restartButton.style.display = 'none'; // Esconde o botão de reiniciar
    scoreDisplay.textContent = `Pontuação: ${score}`; // Atualiza a exibição da pontuação
    answered = false; // Reseta a flag para nova pergunta
}

submitButton.addEventListener('click', () => {
    const answer = normalizeString(answerInput.value.trim());
    const correctAnswer = normalizeString(countries[currentCountryIndex].name);

    if (answer === correctAnswer) {
        message.textContent = "Correto! 😊";
        message.style.color = "green";
        score++; // Aumenta a pontuação
    } else {
        message.textContent = "ERROU NEWBA! 😢";
        message.style.color = "red";
        score--; // Diminui a pontuação
    }

    scoreDisplay.textContent = `Pontuação: ${score}`; // Atualiza a exibição da pontuação
    answerInput.disabled = true; // Desabilita o campo de entrada
    submitButton.disabled = true; // Desabilita o botão de enviar
    proceedButton.style.display = 'block'; // Mostra o botão de prosseguir
    answered = true; // Marca que a pergunta foi respondida

    if (score <= 0) {
        message.textContent = "Você perdeu! 😔";
        submitButton.disabled = true; // Desabilita o botão de submissão
        proceedButton.style.display = 'none'; // Esconde o botão de prosseguir
        restartButton.style.display = 'block'; // Mostra o botão de reiniciar
    }
});

// Adicionando a funcionalidade do botão "Prosseguir"
proceedButton.addEventListener('click', () => {
    if (score > 0) { // Apenas avança se a pontuação for maior que zero
        message.textContent = ''; // Limpa a mensagem
        proceedButton.style.display = 'none'; // Esconde o botão de prosseguir
        currentCountryIndex++; // Avança para o próximo país
        if (currentCountryIndex < countries.length) {
            loadCountry(); // Carrega o próximo país
        } else {
            message.textContent = "Parabéns, você zerou o jogo! 🎉";
            submitButton.disabled = true;
        }
    }
});

// Reiniciar o jogo
restartButton.addEventListener('click', () => {
    currentCountryIndex = 0; // Reinicia o índice do país
    score = 3; // Reinicia a pontuação
    shuffleArray(countries); // Embaralha os países novamente
    submitButton.disabled = false; // Habilita o botão de submissão
    loadCountry(); // Carrega o primeiro país
});

// Adicionando a funcionalidade para pressionar Enter para enviar a resposta ou prosseguir
answerInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        if (!answered) {
            submitButton.click(); // Simula um clique no botão de enviar
        } else if (answered && score > 0) {
            proceedButton.click(); // Simula um clique no botão de prosseguir
        }
    }
});

// Iniciar o jogo
loadCountry();