function verifierFormulaire() {
    // Récupérer les valeurs des champs
    var nom = document.getElementById("nom").value.trim();
    var prenom = document.getElementById("prenom").value.trim();
    var email = document.getElementById("email").value.trim();
    var motDePasse = document.getElementById("motDePasse").value;
    var dateDeNaissance = document.getElementById("dateDeNaissance").value;
    var codePostal = document.getElementById("codePostal").value.trim();
    var age = document.getElementById("age").value.trim();
    var genre = document.querySelector('input[name="genre"]:checked');

    // Expression régulière pour valider l'email
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Vérifier si les champs sont vides ou non conformes
    if (nom === "") {
        alert("Veuillez saisir votre nom.");
        return false;
    }
    if (prenom === "") {
        alert("Veuillez saisir votre prénom.");
        return false;
    }
    if (email === "") {
        alert("Veuillez saisir votre email.");
        return false;
    } else if (!regexEmail.test(email)) {
        alert("Veuillez saisir une adresse email valide.");
        return false;
    }
    if (motDePasse === "") {
        alert("Veuillez saisir votre mot de passe.");
        return false;
    } else if (motDePasse.length < 6) {
        alert("Le mot de passe doit contenir au moins 6 caractères.");
        return false;
    }
    if (dateDeNaissance === "") {
        alert("Veuillez saisir votre date de naissance.");
        return false;
    }
    if (codePostal === "") {
        alert("Veuillez saisir votre code postal.");
        return false;
    } else if (isNaN(codePostal) || codePostal.length !== 5) {
        alert("Veuillez saisir un code postal valide (5 chiffres).");
        return false;
    }
    if (age === "") {
        alert("Veuillez saisir votre âge.");
        return false;
    } else if (isNaN(age) || parseInt(age) <= 0) {
        alert("Veuillez saisir un âge valide.");
        return false;
    } else if (parseInt(age) < 18) {
        alert("Vous devez être majeur pour vous inscrire.");
        return false;
    }

    if (!genre) {
        alert("Veuillez sélectionner votre genre.");
        return false;
    }

    // Récupérer le genre sélectionné
    var genreSelectionne = genre.value;
    
    // Si toutes les conditions sont remplies, afficher "BIEN VENNUE !" avec le genre et le nom correspondants
    alert("BIEN VENNUE ! Vous êtes " + genreSelectionne + " " + nom);
    return true;
}
