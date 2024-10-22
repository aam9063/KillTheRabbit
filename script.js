// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', (event) => {
    // Inicialización del juego
    let score = 0; // Inicializa la puntuación en 0
    const scoreElement = document.querySelector('.total-count'); // Selecciona el elemento que muestra la puntuación
    const checkboxes = document.querySelectorAll('input[type="checkbox"]'); // Selecciona todos los checkboxes
    const gameOverScreen = document.getElementById('game-over'); // Selecciona el elemento de la pantalla de Game Over
    const restartButton = document.getElementById('restart-button'); // Selecciona el botón de reinicio

    // Función para actualizar la puntuación en el DOM
    function updateScore() {
        scoreElement.textContent = `Score: ${score}`; // Actualiza el contenido del elemento de puntuación
    }

    // Función para verificar si todos los conejos han sido disparados
    function checkGameOver() {
        const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked); // Verifica si todos los checkboxes están marcados
        if (allChecked) {
            gameOverScreen.classList.remove('hidden'); // Muestra la pantalla de Game Over si todos los checkboxes están marcados
        }
    }

    // Añade un event listener a cada checkbox para verificar el estado del juego cuando cambian
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            if (event.target.checked) {
                score += 1; // Incrementa la puntuación si el checkbox está marcado
                event.target.parentElement.classList.add('hidden'); // Oculta el conejo
            } else {
                score -= 1; // Decrementa la puntuación si el checkbox está desmarcado
                event.target.parentElement.classList.remove('hidden'); // Muestra el conejo
            }
            updateScore(); // Actualiza la puntuación en el DOM
            checkGameOver(); // Verifica el estado del juego
        });
    });

    // Maneja los clics del ratón
    document.addEventListener('click', (event) => {
        if (event.target.tagName !== 'INPUT') {
            checkboxes.forEach(checkbox => {
                checkbox.checked = true; // Marca todos los checkboxes cuando se hace clic fuera de un input
                checkbox.parentElement.classList.add('hidden'); // Oculta el conejo
            });
            checkGameOver(); // Verifica el estado del juego
        }
    });

    // Añade un event listener al botón de reinicio para reiniciar el juego
    restartButton.addEventListener('click', () => {
        gameOverScreen.classList.add('hidden'); // Oculta la pantalla de Game Over
        checkboxes.forEach(checkbox => {
            checkbox.checked = false; // Desmarca todos los checkboxes
            checkbox.parentElement.classList.remove('hidden'); // Muestra el conejo
        });
        score = 0; // Reinicia la puntuación
        updateScore(); // Actualiza la puntuación en el DOM
    });

    // Inicializa la puntuación en el DOM
    updateScore();
});

// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', (event) => {
    const checkboxes = document.querySelectorAll('.bunny-checkbox'); // Selecciona todos los checkboxes con la clase 'bunny-checkbox'
    const gameOverScreen = document.getElementById('game-over'); // Selecciona el elemento de la pantalla de Game Over

    // Función para verificar si todos los conejos han sido disparados
    function checkGameOver() {
        const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked); // Verifica si todos los checkboxes están marcados
        if (allChecked) {
            gameOverScreen.classList.remove('hidden'); // Muestra la pantalla de Game Over si todos los checkboxes están marcados
        }
    }

    // Añade un event listener a cada checkbox para verificar el estado del juego cuando cambian
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', checkGameOver);
    });

    // Maneja los clics del ratón
    document.addEventListener('click', (event) => {
        if (event.target.tagName !== 'INPUT') {
            checkboxes.forEach(checkbox => {
                checkbox.checked = true; // Marca todos los checkboxes cuando se hace clic fuera de un input
            });
            checkGameOver(); // Verifica el estado del juego
        }
    });
});