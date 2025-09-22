document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active'); // Alterna la clase 'active' en la navegación
            menuToggle.classList.toggle('active'); // Alterna la clase 'active' en el botón (para la animación X)
        });

        // Ocultar el menú si se hace clic en un enlace (navegación a una sección)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });
    }
});
