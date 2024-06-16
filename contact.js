// //gestion du formulaire de la page contact
// document
//   .getElementById('contact-form')
//   .addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const data = {
//       data: {
//         raison_sociale: document.getElementById('raison_sociale').value,
//         SIRET: document.getElementById('siret').value,
//         Sexe: document.querySelector('input[name="gender"]:checked').value,
//         Nom: document.getElementById('nom').value,
//         telephone: document.getElementById('telephone').value,
//         email: document.getElementById('email').value,
//         HoraireDebut: document.getElementById('horaire-début').value,
//         HoraireFin: document.getElementById('horaire-fin').value,
//         Message: document.getElementById('message').value,
//       },
//     };

//     console.log('Données envoyées:', data); // Ajout de logs

//     try {
//       const response = await fetch('http://localhost:1337/api/contact-forms', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();
//       console.log('Réponse du serveur:', result);

//       if (response.ok) {
//         alert('Formulaire soumis avec succès');
//       } else {
//         console.error('Erreur lors de la soumission:', result); // Ajouter des logs pour les erreurs
//         alert('Erreur lors de la soumission du formulaire 1');
//       }
//     } catch (error) {
//       console.error('Erreur:', error);
//       alert('Erreur lors de la soumission du formulaire');
//     }
//   });

// function verifyRaisonSociale() {
//   const raisonSociale = document.getElementById('raison_sociale');
//   if (raisonSociale) {
//     raisonSociale.addEventListener('input', () => {
//       if (raisonSociale.value.length < 3) {
//         raisonSociale.setCustomValidity(
//           'La raison sociale doit faire au moins 3 caractères'
//         );
//         raisonSociale.reportValidity();
//       } else {
//         raisonSociale.setCustomValidity('');
//       }
//     });
//   }
// }
// verifyRaisonSociale();

// function verifySiret() {
//   const siret = document.getElementById('siret');
//   if (siret) {
//     siret.addEventListener('input', () => {
//       if (siret.value.length !== 14) {
//         siret.setCustomValidity('Le SIRET doit faire 14 caractères');
//       } else {
//         siret.setCustomValidity('');
//       }
//     });
//   }
// }
// verifySiret();

// function verifyName() {
//   const name = document.getElementById('nom');
//   if (name) {
//     name.addEventListener('input', () => {
//       let errorMessage = '';

//       if (name.value.length < 3) {
//         errorMessage = 'Le nom doit faire au moins 3 caractères';
//       } else if (/\d/.test(name.value)) {
//         errorMessage = 'Le nom ne doit pas contenir de chiffres';
//       } else if (/[^a-zA-Z\s]/.test(name.value)) {
//         errorMessage = 'Le nom ne doit pas contenir de caractères spéciaux';
//       } else name.setCustomValidity('');

//       name.setCustomValidity(errorMessage);
//       name.reportValidity();
//     });
//   }
// }
// verifyName();

// function verifyPhone() {
//   const phone = document.getElementById('telephone');
//   if (phone) {
//     phone.addEventListener('input', () => {
//       if (!/^[0-9]{10}$/.test(phone.value)) {
//         phone.setCustomValidity(
//           'Le numéro de téléphone doit contenir 10 chiffres'
//         );
//       } else {
//         phone.setCustomValidity('');
//       }
//     });
//   }
// }
// verifyPhone();
// function verifyEmail() {
//   const email = document.getElementById('email');
//   if (email) {
//     email.addEventListener('blur', () => {
//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailPattern.test(email.value)) {
//         email.setCustomValidity('Veuillez entrer une adresse email valide');
//         email.reportValidity();
//       } else {
//         email.setCustomValidity('');
//       }
//     });
//   }
// }

// verifyEmail();
// Gestion du formulaire de la page contact
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

    console.log('Données envoyées:', data); // Ajout de logs

    try {
      const response = await fetch('http://localhost:1337/api/contact-forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log('Réponse du serveur:', result);

      if (response.ok) {
        form.innerHTML =
          '<h2>Merci pour votre message, nos experts vous recontacteront dans les plus brefs délais.</h2>';
      } else {
        console.error('Erreur lors de la soumission:', result); // Ajouter des logs pour les erreurs
        alert('Erreur lors de la soumission du formulaire 1');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la soumission du formulaire');
    }
  });

// function verifyRaisonSociale() {
//   const raisonSociale = document.getElementById('raison_sociale');
//   if (raisonSociale) {
//     raisonSociale.addEventListener('blur', () => {
//       if (raisonSociale.value.length < 3) {
//         raisonSociale.setCustomValidity(
//           'La raison sociale doit faire au moins 3 caractères'
//         );
//       } else {
//         raisonSociale.setCustomValidity('');
//       }
//     });
//   }
// }
// verifyRaisonSociale();

// function verifySiret() {
//   const siret = document.getElementById('siret');
//   if (siret) {
//     siret.addEventListener('blur', () => {
//       if (siret.value.length !== 14) {
//         siret.setCustomValidity('Le SIRET doit faire 14 caractères');
//       } else {
//         siret.setCustomValidity('');
//       }
//     });
//   }
// }
// verifySiret();

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
