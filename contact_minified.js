document
  .getElementById('contact-form')
  .addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = document.getElementById('contact-form');
    const data = {
      data: {
        raison_sociale: document.getElementById('raison_sociale').value,
        SIRET: document.getElementById('siret').value,
        Sexe: document.querySelector('input[name="gender"]:checked').value,
        Nom: document.getElementById('nom').value,
        telephone: document.getElementById('telephone').value,
        email: document.getElementById('email').value,
        HoraireDebut: document.getElementById('horaire-début').value,
        HoraireFin: document.getElementById('horaire-fin').value,
        Message: document.getElementById('message').value,
      },
    };
    console.log('Données envoyées:', data);
    try {
      const response = await fetch(
        'https://glowing-broccoli-25ba25fccf.strapiapp.com/api/contact-forms',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      console.log('Réponse du serveur:', result);
      if (response.ok) {
        form.innerHTML =
          '<h2>Merci pour votre message, nos experts vous recontacteront dans les plus brefs délais.</h2>';
      } else {
        console.error('Erreur lors de la soumission:', result);
        alert('Erreur lors de la soumission du formulaire 1');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la soumission du formulaire');
    }
  });
function verifyName() {
  const name = document.getElementById('nom');
  if (name) {
    name.addEventListener('blur', () => {
      let errorMessage = '';
      if (name.value.length < 3) {
        errorMessage = 'Le nom doit faire au moins 3 caractères';
      } else if (/\d/.test(name.value)) {
        errorMessage = 'Le nom ne doit pas contenir de chiffres';
      } else if (/[^a-zA-Z\s]/.test(name.value)) {
        errorMessage = 'Le nom ne doit pas contenir de caractères spéciaux';
      } else {
        errorMessage = '';
      }
      name.setCustomValidity(errorMessage);
    });
  }
}
verifyName();
function verifyPhone() {
  const phone = document.getElementById('telephone');
  if (phone) {
    phone.addEventListener('blur', () => {
      if (!/^[0-9]{10}$/.test(phone.value)) {
        phone.setCustomValidity(
          'Le numéro de téléphone doit contenir 10 chiffres'
        );
      } else {
        phone.setCustomValidity('');
      }
    });
  }
}
verifyPhone();
function verifyEmail() {
  const email = document.getElementById('email');
  if (email) {
    email.addEventListener('blur', () => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value)) {
        email.setCustomValidity('Veuillez entrer une adresse email valide');
      } else {
        email.setCustomValidity('');
      }
    });
  }
}
verifyEmail();
