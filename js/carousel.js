// Inicializar o carrossel manualmente (opcional)
document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.querySelector('#tyson-carousel');
    if (carouselElement) {
      const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000, // Tempo entre slides (em ms)
        pause: 'hover', // Pausar quando o mouse estiver sobre o carrossel
        wrap: true,     // Permitir loop dos slides
      });
      console.log('Carrossel inicializado com sucesso!');
    }
  });