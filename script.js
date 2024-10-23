const countries = [
    { name: "Brasil", silhouette: "https://th.bing.com/th/id/OIP.2kLWjnxqROfkhvMLjzfHaAAAAA?rs=1&pid=ImgDetMain" },
    { name: "Argentina", silhouette: "https://img.freepik.com/premium-vector/argentina-map-silhouette-isolated-white-background_650065-142.jpg?w=2000" },
    { name: "França", silhouette: "https://img.freepik.com/vector-premium/mapa-francia-sobre-fondo-blanco-ilustracion-vectorial_511393-3014.jpg?w=2000" },
    { name: "Alemanha", silhouette: "https://th.bing.com/th/id/OIP.EpYgYYJZDFM2SB2O1e4DAgHaFj?rs=1&pid=ImgDetMain" },
    { name: "Canadá", silhouette: "https://th.bing.com/th/id/OIP.fTcNIpjkAPU0sictIM7v0wHaHa?w=800&h=800&rs=1&pid=ImgDetMain" },
    
];
 
let currentCountryIndex = 0;
 
const countrySilhouette = document.getElementById('country-silhouette');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const proceedButton = document.getElementById('proceed');
const message = document.getElementById('message');
 
function loadCountry() {
    const currentCountry = countries[currentCountryIndex];
    countrySilhouette.src = currentCountry.silhouette;
    message.textContent = '';
    answerInput.value = '';
    proceedButton.style.display = 'none'; 
}
 
submitButton.addEventListener('click', () => {
    const answer = answerInput.value.trim();
    if (answer.toLowerCase() === countries[currentCountryIndex].name.toLowerCase()) {
        message.textContent = "Correto";
        message.style.color = "green";
        proceedButton.style.display = 'block'; 
    } else {
        message.textContent = "ERROU NEWBA";
        message.style.color = "red";
        proceedButton.style.display = 'block'; 
    }
});
 
proceedButton.addEventListener('click', () => {
    message.textContent = ''; 
    proceedButton.style.display = 'none'; 
    currentCountryIndex++; 
    if (currentCountryIndex < countries.length) {
        loadCountry(); 
    } else {
        message.textContent = "Você zerou o jogo";
        submitButton.disabled = true;
    }
});
 
// Iniciar o jogo
loadCountry();