function handleCarousel() {
  const slides = document.querySelectorAll('.carousel__slide');
  const nextBtn = document.querySelector('.carousel__control--next');
  const prevBtn = document.querySelector('.carousel__control--prev');
  let currentSlide = 0;
  let touchStartX = 0;
  let touchEndX = 0;
  function updateSlide() {
    const slidesToShow = window.innerWidth > 992 ? 3 : 1;
    slides.forEach((slide) => slide.classList.add('inactive-slide'));
    slides.forEach((slide) => slide.classList.remove('active-slide'));
    for (let i = 0; i < slidesToShow; i++) {
      const slideIndex = (currentSlide + i) % slides.length;
      slides[slideIndex].classList.remove('inactive-slide');
      slides[slideIndex].classList.add('active-slide');
    }
  }
  function changeSlide(direction) {
    const slidesToShow = window.innerWidth > 992 ? 3 : 1;
    currentSlide += direction;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = slides.length - slidesToShow;
    }
    updateSlide();
  }
  nextBtn.addEventListener('click', () => {
    changeSlide(1);
  });
  prevBtn.addEventListener('click', () => {
    changeSlide(-1);
  });
  document.querySelector('.carousel__slides').addEventListener(
    'touchstart',
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: !0 }
  );
  document
    .querySelector('.carousel__slides')
    .addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 75) {
        changeSlide(1);
      } else if (touchEndX > touchStartX + 75) {
        changeSlide(-1);
      }
    });
  window.addEventListener('resize', updateSlide);
  updateSlide();
}
handleCarousel();
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
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
document
  .getElementById('homepage-form')
  .addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
      data: {
        raison_sociale: document.getElementById('raison_sociale').value,
        nom: document.getElementById('nom').value,
        telephone: document.getElementById('telephone').value,
        email: document.getElementById('email').value,
      },
    };
    console.log('Données envoyées:', data);
    try {
      const response = await fetch(
        'https://glowing-broccoli-25ba25fccf.strapiapp.com/api/contact-form-homepages',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      console.log('Réponse du serveur:', result);
      if (response.ok) {
        const form = document.getElementById('homepage-form');
        form.style.display = 'flex';
        form.style.alignItems = 'center';
        form.style.justifyContent = 'center';
        form.style.height = `${form.offsetHeight}px`;
        const confirmationMessage = document.createElement('p');
        confirmationMessage.textContent =
          'Merci pour votre message, nos experts vous recontacteront dans les plus brefs délais';
        confirmationMessage.style.cssText =
          'text-align: center; font-size: 1.2em; padding: 20px; color: #333; background-color: #f8f9fa; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);';
        form.innerHTML = '';
        form.appendChild(confirmationMessage);
        form.style.cssText =
          'height :auto; background-color: $orange-color; left 25%; padding: 0';
      } else {
        console.error('Erreur lors de la soumission:', result);
        alert('Erreur lors de la soumission du formulaire 1');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la soumission du formulaire');
    }
  });
