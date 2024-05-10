// function handleCarousel() {
//   const slides = document.querySelectorAll('.carousel__slide');
//   const nextBtn = document.querySelector('.carousel__control--next');
//   const prevBtn = document.querySelector('.carousel__control--prev');
//   let currentSlide = 0;

//   nextBtn.addEventListener('click', () => {
//     currentSlide++;

//     if (currentSlide >= slides.length) {
//       currentSlide = 0;
//     }

//     updateSlide();
//   });

//   prevBtn.addEventListener('click', () => {
//     currentSlide--;

//     if (currentSlide < 0) {
//       currentSlide = slides.length - 1;
//     }

//     updateSlide();
//   });

//   function updateSlide() {
//     slides.forEach((slide) => {
//       slide.style.display = 'none';
//     });

//     slides[currentSlide].style.display = 'flex';
//   }
// }
// handleCarousel();

function handleCarousel() {
  const slides = document.querySelectorAll('.carousel__slide');
  const nextBtn = document.querySelector('.carousel__control--next');
  const prevBtn = document.querySelector('.carousel__control--prev');
  let currentSlide = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  nextBtn.addEventListener('click', () => {
    changeSlide(1);
  });

  prevBtn.addEventListener('click', () => {
    changeSlide(-1);
  });

  // Ajout des gestionnaires d'événements tactiles
  document
    .querySelector('.carousel__slides')
    .addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

  document
    .querySelector('.carousel__slides')
    .addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleTouchMove();
    });

  function handleTouchMove() {
    if (touchEndX < touchStartX - 75) {
      changeSlide(1);
    }
    if (touchEndX > touchStartX + 75) {
      changeSlide(-1);
    }
  }

  function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    updateSlide();
  }

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

document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('.menu__item');
  const currentPath = window.location.pathname;

  menuItems.forEach((item) => {
    if (
      item.getAttribute('href') === currentPath ||
      item.href === window.location.href
    ) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});

//handle back to top arrow
document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const backToTopBtn = document.getElementById('backToTopBtn');

  if (scrollPosition > 500) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

document.getElementById('backToTopBtn').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
