/**
 * Lance la requete pour récupérer la liste des formations
 */
function makeRequest() {
    httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200)
                addToMenu(httpRequest.responseText);
        }
    };
    httpRequest.open('GET', 'formations.json');
    httpRequest.send();
}

/**
 * Fonction d'jout des formations au menu
 * 
 * @param {*} jsonString 
 */
function addToMenu(jsonString) {
    const formations = JSON.parse(jsonString);
    const menu = document.getElementById('menu-formations');

    formations.forEach(f => {
        // Libellé de la formation - avec ajout du préfixe
        let label = prefix('OX', f);

        let item = document.createElement('li');
        item.innerHTML = '<a href="#">' + label + '</a>';
        menu.appendChild(item);
    });
}

/**
 * Lancement de lla requete à la fin du chargement.
 */
window.onload = makeRequest;
