document.addEventListener('DOMContentLoaded', () => {
    // Menú Hamburguesa para Mobile
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('nav');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
            // Animación simple de las barras (opcional)
            mobileMenu.classList.toggle('toggle-active');
        });
    }

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    });

    // Formulario de cotización simulado
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const servicio = document.getElementById('servicio').value;

            alert(`¡Gracias ${nombre}! Hemos recibido tu solicitud para el servicio de: ${servicio}. Nos comunicaremos a la brevedad.`);

            this.reset();
        });
    }
});