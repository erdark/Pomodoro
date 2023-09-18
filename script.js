const minutes = document.getElementById("minutes");
const secondes = document.getElementById("secondes");
const start = document.getElementById("start");
const etat = document.getElementById("etat");
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
        minutes.textContent = 5;
        document.body.style.backgroundColor = "darkblue";
        etat.textContent = "pause"
    }
    else if(minutes.textContent == 0 && secondes.textContent == 0 && etat.textContent == "pause"){
        minutes.textContent = 25;
        document.body.style.backgroundColor = "black"
        etat.textContent = "travail"
    }
    secondes.textContent = affichSecondes(secondes.textContent);
    minutes.textContent = affichSecondes(minutes.textContent);
    
    
}

function depart() {
    if (start.textContent == "start") {
        start.textContent = "reset";
        clearInterval(arret_interval); // Efface l'intervalle précédent
        arret_interval = setInterval(ecoule_temps, 1000);
    }
    else if (start.textContent == "reset") {
        start.textContent = "start";
        etat.textContent = "travail"
        document.body.style.backgroundColor = "black"
        minutes.textContent = "25";
        secondes.textContent = "00";
    }
}

start.addEventListener("click", depart);

