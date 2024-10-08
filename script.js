// Получаем элемент изображения
    const image = document.querySelector('.header img');

    // Отслеживаем прокрутку
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      // Меняем позицию изображения в зависимости от прокрутки
      image.style.transform = `translate(-50%, ${scrollY * 0.5}px)`;
    });