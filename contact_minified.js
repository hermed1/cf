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
