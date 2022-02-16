/**
 * Liste des formations à ajouter au menu
 * Placée ici pour permettre le lancement simple du fichier via `file://`
 * 
 * Cette variable est globale, et déclarée sans mot-clé.
 * Ce n'est pas une bonne pratique, et déclenchera sans doute
 * une Issue lors d'une analyse par SonarQube...
 */
 listeFormations = [
    "Git et GitLab",
    "GitLab CI-CD",
    "Docker",
    "Kubernetes"
];

/**
 * Fonction d'ajout des formations au menu
 * 
 */
function addToMenu() {
    menu = document.getElementById('menu-formations');

    listeFormations.forEach(f => {
        // Libellé de la formation - avec ajout du préfixe 'OX'
        // La fonction `prefix()` est définie dans le fichier `js/prefixer.js`
        let label = prefix('OX', f);

        let item = document.createElement('li');
        item.innerHTML = '<a href="#">' + label + '</a>';
        menu.appendChild(item);
    });
}

/**
 * Lancement de la fonction addToMenu à la fin du chargement.
 */
window.onload = addToMenu;
