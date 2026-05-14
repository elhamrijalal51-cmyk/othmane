// Code JavaScript global pour Othmane
document.addEventListener('DOMContentLoaded', () => {
    console.log('Application Othmane initialisée.');

    // Animation au défilement ou interactions globales
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Marquer le lien actif
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.color = 'var(--primary)';
            link.style.fontWeight = '700';
        }
    });
});
