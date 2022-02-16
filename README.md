# Application Web

## Structure du projet

```
├── index.html => Page d'accueil
├── js
|  ├── menu.js => Script d'ajout des formations au menu
|  └── prefixer.js => Fonction utilitaire
|
├── package.json => Fichier npm :
|                   - déclaration des dépendences
|                   - lancement des tests et du serveur)
|
├── style.css : style de l'application
└── test
   └── menu_test.js : Test unitaire de la fonction utilitaire (prefixer.js)
```

## Lancement de l'application

1. Ouvrir le répertoire du projet dans un terminal.
2. Installer les dépendances avec la commande `npm install`.
3. Lancer le serveur avec `npm start`.  
   La page se rafraichit à chaque modification d'un des fichiers.

### Lancement simple sans `npm`

Si on ne dispose pas de `npm` installé sur son poste, on peut simplement ouvrir
le fichier `index.html` dans un navigateur.

## Lancement des tests unitaires

1. Ouvrir le répertoire du projet dans un terminal.
2. Lancer les tests avec `npm test`.