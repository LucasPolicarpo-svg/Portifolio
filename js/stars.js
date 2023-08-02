
    let starsContainer = document.getElementById('stars-container');

    function createStar() {
        const screenWidth = window.innerWidth;
        const star = document.createElement('div');
        star.classList.add('mini-stars');

        // Define uma posição aleatória para a bolinha na tela
        const posX = Math.random() * screenWidth;
        const posY = Math.random() * window.innerHeight;

        star.style.left = `${posX}px`;
        star.style.top = `${posY}px`;

        starsContainer.appendChild(star);
    }

    function createStarsLoop() {
        setInterval(createStar, 150);
    }

    // Chama a função para criar bolinhas inicialmente ao carregar a página
    createStarsLoop();
