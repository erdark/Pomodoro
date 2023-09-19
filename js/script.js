// Sélection des éléments HTML par leur ID
const minutes = document.getElementById("minutes");
const secondes = document.getElementById("secondes");

const depart = document.getElementById("depart");
const etat = document.getElementById("etat");

const Temps_Travail = document.getElementById("Temps_Travail");
const Temps_Pause = document.getElementById("Temps_Pause");

// Variables pour sauvegarder les durées de travail et de pause par défaut
let sauvegarde_travail = 25;
let sauvegarde_pause = 25;

let arret_interval = undefined; // Utilisation de let au lieu de const pour permettre la réaffectation de la variable

// Fonction pour formater les secondes avec un zéro devant si nécessaire
function affichSecondes(secondes) {
    let secondeschr = secondes.toString();
    secondeschr = secondeschr.length < 2 ? '0' + secondeschr : secondeschr;
    return secondeschr;
}

// Fonction pour faire écouter le temps et gérer le chronomètre
function ecoule_temps() {
    if (depart.textContent === "depart") {
        clearInterval(arret_interval); // Efface l'intervalle précédent
        return;
    }
    if (secondes.textContent == 0 && minutes.textContent > 0) {
        minutes.textContent = minutes.textContent - 1;
        secondes.textContent = 60;
    }
    if (secondes.textContent > 0) {
        secondes.textContent = secondes.textContent - 1;
    }
    if (minutes.textContent == 0 && secondes.textContent == 0 && etat.textContent == "travail") {
        minutes.textContent = sauvegarde_pause;
        document.body.style.backgroundColor = "darkblue";
        etat.textContent = "pause";
    } else if (minutes.textContent == 0 && secondes.textContent == 0 && etat.textContent == "pause") {
        minutes.textContent = affichSecondes(sauvegarde_travail);
        document.body.style.backgroundColor = "black";
        etat.textContent = "travail";
    }
    secondes.textContent = affichSecondes(secondes.textContent);
    minutes.textContent = affichSecondes(minutes.textContent);
}

// Fonction pour démarrer ou réinitialiser le chronomètre
function depart_chrono() {
    console.log(Temps_Travail.value);
    if (depart.textContent == "depart") {
        depart.textContent = "réinitialiser";
        clearInterval(arret_interval); // Efface l'intervalle précédent
        arret_interval = setInterval(ecoule_temps, 1000);
    } else if (depart.textContent == "réinitialiser") {
        depart.textContent = "depart";
        etat.textContent = "travail";
        document.body.style.backgroundColor = "black";
        minutes.textContent = sauvegarde_travail;
        secondes.textContent = "00";
    }
}

// Fonction pour modifier les durées de travail et de pause
function modifier() {
    if (Temps_Travail.value >= 1 && Temps_Travail.value <= 60) {
        minutes.textContent = affichSecondes(parseInt(Temps_Travail.value));
        sauvegarde_travail = minutes.textContent;
    }
    if (Temps_Pause.value >= 1 && Temps_Pause.value <= 60) {
        sauvegarde_pause = affichSecondes(parseInt(Temps_Pause.value));
    }
}

// Écouteurs d'événements pour les boutons de départ et de soumission
depart.addEventListener("click", depart_chrono);
soumettre.addEventListener("click", modifier);