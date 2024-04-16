function handleCarousel() {
  const slides = document.querySelectorAll('.carousel__slide');
  const nextBtn = document.querySelector('.carousel__control--next');
  const prevBtn = document.querySelector('.carousel__control--prev');
  let currentSlide = 0;

  nextBtn.addEventListener('click', () => {
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    updateSlide();
  });

  prevBtn.addEventListener('click', () => {
    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    updateSlide();
  });

  function updateSlide() {
    slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    slides[currentSlide].style.display = 'flex';
  }
}
handleCarousel();

//handle collapses
function handleCollapse() {
  const collapseBtns = document.querySelectorAll('.collapse__btn');

  collapseBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const collapseContent = btn.nextElementSibling;
      const collapseInner = collapseContent.querySelector('.collapse__inner');
      const icon = btn.querySelector('.collapse__icon');

      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      if (isOpen) {
        collapseContent.style.maxHeight = 0;
        btn.setAttribute('aria-expanded', 'false');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-right');
      } else {
        collapseContent.style.maxHeight = `${collapseInner.scrollHeight}px`;
        btn.setAttribute('aria-expanded', 'true');
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-down');
      }
    });
  });
}

handleCollapse();
