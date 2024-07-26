// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Animación de fade-in para secciones
    const faders = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('fade-in-visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Animación de escala para álbumes
    const albums = document.querySelectorAll('.scale-up');

    albums.forEach(album => {
        album.addEventListener('mouseover', () => {
            album.style.transform = 'scale(1.05)';
        });
        album.addEventListener('mouseout', () => {
            album.style.transform = 'scale(1)';
        });
    });

    // Desplazamiento suave al hacer clic en los enlaces de navegación
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Funcionalidad del menú de hamburguesa
    const menuToggle = document.getElementById('menuToggle');
    const sideNav = document.getElementById('sideNav');

    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        sideNav.classList.toggle('active');
    });
});
