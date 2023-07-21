let intervalId;

function createStars() {
  const screenWidth = 1440; // Largura da tela
  const numStars = Math.floor(screenWidth / 5); // Quantidade de bolinhas que cabem na tela

  const starsContainer = document.getElementById('stars-container');

  // Limpa as bolinhas existentes antes de criar novas
  starsContainer.innerHTML = '';

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('mini-stars');

    // Define uma posição aleatória para a bolinha na tela
    const posX = Math.random() * screenWidth;
    const posY = Math.random() * window.innerHeight;

    star.style.left = `${posX}px`;
    star.style.top = `${posY}px`;

    starsContainer.appendChild(star);
  }
}

// Função para criar bolinhas em loop infinito
function createStarsLoop() {
  createStars(); // Cria as bolinhas imediatamente

  // Executa a função createStars() a cada 1000ms (1 segundo) e armazena o ID do intervalo
  intervalId = setInterval(createStars, 1000);
}

// Função para parar o loop infinito de criação de bolinhas
function stopStarsLoop() {
  clearInterval(intervalId); // Limpa o intervalo
}

// Adiciona um ouvinte de evento para o botão
document.getElementById('toggle-button').addEventListener('click', function () {
  const buttonText = this.innerText.toLowerCase();

  if (buttonText === 'toggle stars') {
    createStarsLoop(); // Inicia o loop infinito
    this.innerText = 'Stop Stars'; // Muda o texto do botão para "Stop Stars"
  } else {
    stopStarsLoop(); // Interrompe o loop infinito
    this.innerText = 'Toggle Stars'; // Muda o texto do botão de volta para "Toggle Stars"
  }
});

// Chama a função para criar bolinhas inicialmente ao carregar a página
createStarsLoop();