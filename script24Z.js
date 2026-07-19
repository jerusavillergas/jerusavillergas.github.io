document.addEventListener('DOMContentLoaded', function() {
    // --- Lógica del Menú de Hamburguesa ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del botón
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
            // Asegura que el body no haga scroll cuando el menú está abierto
            document.body.classList.toggle('no-scroll', mainNav.classList.contains('active'));
        });

        // Cierra el menú cuando se hace clic en un enlace de navegación
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                // Pequeño retardo para permitir que la navegación ocurra antes de cerrar
                setTimeout(() => {
                    if (mainNav.classList.contains('active')) {
                        mainNav.classList.remove('active');
                        menuToggle.classList.remove('active');
                        document.body.classList.remove('no-scroll'); // Restaura el scroll del body
                    }
                }, 300);
            });
        });
    } else {
        console.warn("No se encontraron los elementos del menú (menuToggle o mainNav).");
    }

    // --- Lógica del Acordeón (FAQ) ---
    const acordeonTitulos = document.querySelectorAll('.acordeon-titulo');

    acordeonTitulos.forEach(titulo => {
        titulo.addEventListener('click', function() {
            // Cierra todos los otros acordeones si no es este
            acordeonTitulos.forEach(otroTitulo => {
                if (otroTitulo !== this && otroTitulo.classList.contains('active')) {
                    otroTitulo.classList.remove('active');
                    otroTitulo.setAttribute('aria-expanded', 'false');
                    otroTitulo.nextElementSibling.classList.remove('active');
                }
            });

            // Alterna la clase 'active' para el acordeón actual
            this.classList.toggle('active');
            
            // Actualiza el atributo aria-expanded para accesibilidad
            const isExpanded = this.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);

            // Selecciona el contenido del acordeón (el siguiente elemento hermano)
            const contenido = this.nextElementSibling;

            // Alterna la clase 'active' en el contenido para mostrar/ocultar
            if (contenido) {
                contenido.classList.toggle('active');
            }
        });
    });
});
