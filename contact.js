//gestion du formulaire de la page contact
document
  .getElementById('contact-form')
  .addEventListener('submit', async (e) => {
    e.preventDefault();

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

    console.log('Données envoyées:', data); // Ajout de logs

    try {
      const response = await fetch('http://localhost:1337/api/contact-forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json(); // Lire la réponse en JSON
      console.log('Réponse du serveur:', result); // Ajouter des logs pour la réponse

      if (response.ok) {
        alert('Formulaire soumis avec succès');
      } else {
        console.error('Erreur lors de la soumission:', result); // Ajouter des logs pour les erreurs
        alert('Erreur lors de la soumission du formulaire 1');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la soumission du formulaire');
    }
  });
