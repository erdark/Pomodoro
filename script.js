const minutes = document.getElementById("minutes");
const secondes = document.getElementById("secondes");

const start = document.getElementById("start");
const etat = document.getElementById("etat");

const Temps_Travail = document.getElementById("Temps_Travail");
const Temps_Pause = document.getElementById("Temps_Pause");

let sauvegarde_travail = 25;
let sauvegarde_pause = 25;
let arret_interval = undefined; // Utilisez let au lieu de const pour pouvoir réassigner la variable

function affichSecondes(secondes) {
    let secondeschr = secondes.toString();
    secondeschr = secondeschr.length < 2 ? '0' + secondeschr : secondeschr;
    return secondeschr;
}

function ecoule_temps() {
    if (start.textContent === "start") {
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
    if(minutes.textContent == 0 && secondes.textContent == 0 && etat.textContent == "travail"){
        minutes.textContent = sauvegarde_pause;
        document.body.style.backgroundColor = "darkblue";
        etat.textContent = "pause"
    }
    else if(minutes.textContent == 0 && secondes.textContent == 0 && etat.textContent == "pause"){
        minutes.textContent = affichSecondes(sauvegarde_travail);
        document.body.style.backgroundColor = "black"
        etat.textContent = "travail"
    }
    secondes.textContent = affichSecondes(secondes.textContent);
    minutes.textContent = affichSecondes(minutes.textContent); 
}

function depart() {
    console.log(Temps_Travail.value)
    if (start.textContent == "start") {
        start.textContent = "reset";
        clearInterval(arret_interval); // Efface l'intervalle précédent
        arret_interval = setInterval(ecoule_temps, 10);
    }
    else if (start.textContent == "reset") {
        start.textContent = "start";
        etat.textContent = "travail"
        document.body.style.backgroundColor = "black"
        minutes.textContent = sauvegarde_travail;
        secondes.textContent = "00";
    }
}

function modifier() {
    if(Temps_Travail.value >= 1 && Temps_Travail.value <= 60){
        console.log(Temps_Travail.value)
        minutes.textContent = affichSecondes(parseInt(Temps_Travail.value));
        sauvegarde_travail = minutes.textContent;
    }
    if(Temps_Pause.value >= 1 && Temps_Pause.value <= 60){
        console.log(Temps_Pause.value)
        sauvegarde_pause = affichSecondes(parseInt(Temps_Pause.value));
    }
}

start.addEventListener("click", depart);
soumettre.addEventListener("click", modifier);