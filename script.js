// Sélection des boutons
const pierreJoueur = document.getElementById("pierre-joueur");
const feuilleJoueur = document.getElementById("feuille-joueur");
const ciseauxJoueur = document.getElementById("ciseaux-joueur");

// Sélection des images du robot
const pierreBot = document.getElementById("pierre-bot");
const feuilleBot = document.getElementById("feuille-bot");
const ciseauxBot = document.getElementById("ciseaux-bot");

// Sélection des éléments de résultats
const victoiresElement = document.getElementById("victoires");
const defaitesElement = document.getElementById("defaites");
const egalitesElement = document.getElementById("egalites");

// Variables pour suivre les choix du joueur et du bot
var joueurJeu = "";
var botJeu = "";

// Variables pour compter les parties gagnées, perdues et égalités
var victoires = 0;
var defaites = 0;
var egalites = 0;

// Fonction pour afficher une image
function afficherElement(element) {
    element.style.display = 'block';
}

// Fonction pour masquer toutes les images du bot
function masquerImagesBot() {
    pierreBot.style.display = 'none';
    feuilleBot.style.display = 'none';
    ciseauxBot.style.display = 'none';
}

// Fonction pour gérer le choix du bot
function choixBot() {
    // Nombre entier aléatoire entre 0 et 2 pour déterminer le choix de l'ordinateur
    const random = Math.floor(Math.random() * 3);
    console.log(random);

    // If-else pour relier l'entier à un objet
    if (random === 0) {
        afficherElement(pierreBot);
        botJeu = "Pierre";
    } else if (random === 1) {
        afficherElement(feuilleBot);
        botJeu = "Feuille";
    } else if (random === 2) {
        afficherElement(ciseauxBot);
        botJeu = "Ciseaux";
    } else {
        console.log("Erreur dans l'attribution de l'entier à un objet");
    }
}

// Fonction pour déterminer le gagnant
function gagnant() {
    // Si le joueur joue pierre
    if (joueurJeu === "Pierre") {
        if (botJeu === "Feuille") {
            return "ordinateur";
        } else if (botJeu === "Ciseaux") {
            return "joueur";
        } else {
            return "égalité";
        }
    // Si le joueur joue feuille
    } else if (joueurJeu === "Feuille") {
        if (botJeu === "Pierre") {
            return "joueur";
        } else if (botJeu === "Ciseaux") {
            return "ordinateur";
        } else {
            return "égalité";
        }
    // Si le joueur joue ciseaux
    } else if (joueurJeu === "Ciseaux") {
        if (botJeu === "Pierre") {
            return "ordinateur";
        } else if (botJeu === "Feuille") {
            return "joueur";
        } else {
            return "égalité";
        }
    }
}

// Fonction pour mettre à jour le résumé des parties
function updateSummary(resultat) {
    if (resultat === "joueur") {
        victoires++;
        victoiresElement.textContent = "Victoires : " + victoires;
    } else if (resultat === "ordinateur") {
        defaites++;
        defaitesElement.textContent = "Défaites : " + defaites;
    } else if (resultat === "égalité") {
        egalites++;
        egalitesElement.textContent = "Égalités : " + egalites;
    }
    console.log(`Victoires : ${victoires}, Défaites : ${defaites}, Égalités : ${egalites}`);
}

// Fonction pour démarrer une nouvelle partie
function nouvellePartie(choixJoueur) {
    // Réinitialiser les images du bot
    masquerImagesBot();

    // Enregistrer le choix du joueur
    joueurJeu = choixJoueur;
    console.log(joueurJeu);

    // Déterminer le choix du bot
    choixBot();

    // Déterminer le gagnant de la partie
    const resultat = gagnant();
    console.log(resultat);

    // Mettre à jour le résumé des parties
    updateSummary(resultat);
}

// Ajout d'écouteurs d'événements pour les clics
pierreJoueur.addEventListener("click", function() {
    nouvellePartie("Pierre");
});
feuilleJoueur.addEventListener("click", function() {
    nouvellePartie("Feuille");
});
ciseauxJoueur.addEventListener("click", function() {
    nouvellePartie("Ciseaux");
});
