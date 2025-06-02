// Animación simple para el progreso
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.querySelector('.progress-bar');
    setTimeout(() => {
        progressBar.style.width = '12.5%';
        progressBar.setAttribute('aria-valuenow', '12.5');
    }, 500);
    
    // Efecto hover para las tarjetas de módulos
    const moduleCards = document.querySelectorAll('.module-card');
    moduleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});