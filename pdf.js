// Fonction pour afficher le PDF dans la modale
function viewPDF(pdfPath) {
    var iframe = document.getElementById('pdf-iframe');
    
    // Met à jour l'iframe avec le chemin du PDF sélectionné
    iframe.src = pdfPath;
    
    // Affiche la modale en changeant son opacité
    var modal = document.getElementById('pdf-modal');
    modal.style.display = 'flex';
    setTimeout(function() {
        modal.style.opacity = '1'; // Transition vers une opacité pleine
    }, 10); // Petite temporisation pour appliquer la transition correctement
}

// Fonction pour fermer la modale
function closePDF() {
    var modal = document.getElementById('pdf-modal');
    
    // Masque la modale en la rendant transparente
    modal.style.opacity = '0'; // Transition vers l'opacité nulle
    
    // Attendre que la transition soit terminée avant de la cacher complètement
    setTimeout(function() {
        modal.style.display = 'none'; // Cache la modale après la transition
    }, 300); // Temps de transition de 0.3s
}

// Assurez-vous que l'iframe est vide au chargement de la page pour éviter l'affichage d'un PDF par défaut
window.onload = function() {
    var iframe = document.getElementById('pdf-iframe');
    
    // Vide l'iframe au chargement de la page
    iframe.src = '';
    
    // Cache la modale et la rend transparente
    var modal = document.getElementById('pdf-modal');
    modal.style.display = 'none';
    modal.style.opacity = '0'; // Assurez-vous que la modale est invisible au départ
};
